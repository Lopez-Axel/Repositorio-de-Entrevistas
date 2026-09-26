// ---------------------------------------------------------------------------
// InterviewsApi.gs  —  pegar en el script bound al Google Sheet y re-desplegar
// con "Ejecutar como: yo" / "Quién tiene acceso: Cualquier persona".
// Si el despliegue exige iniciar sesion, Google devuelve HTML de login y la app
// responde sheets_save_failed / sheets_read_failed.
//
// Contrato
//   POST { type: "interview", id, date, interviewer, businessName,
//          businessType, location, answers: {"1": "..."}, status }
//   POST { type: "analysis",  interviewId, rawJson }
//   GET  ?sheet=Interviews[&id=<uuid>]
//   GET  ?sheet=AI_Analysis[&id=<uuid>]
//   GET  ?sheet=AI_Consolidated
// Respuesta: { ok: true, ... }  (doPost)   y   { ok: true, data: [...] } (doGet)
//
// Interviews        : id, date, interviewer, businessName, businessType,
//                     location, answer_1..answer_13, status
// AI_Analysis       : interview_id, created_at, model, businessSummary,
//                     confidence, mainPainPoint, raw_json
// AI_Consolidated   : id, created_at, model, interview_ids, interview_count,
//                     summary, raw_json
//
// raw_json guarda la respuesta EXACTA del modelo: si manana el prompt pide un
// campo nuevo, ya esta en la hoja sin volver a correr nada.
// ---------------------------------------------------------------------------

const SHEET_INTERVIEWS = "Interviews";
const SHEET_ANALYSIS = "AI_Analysis";
const SHEET_CONSOLIDATED = "AI_Consolidated";
const MAX_QUESTION = 13;

const HEADERS = {};
HEADERS[SHEET_INTERVIEWS] = [
  "id",
  "date",
  "interviewer",
  "businessName",
  "businessType",
  "location",
  "answer_1",
  "answer_2",
  "answer_3",
  "answer_4",
  "answer_5",
  "answer_6",
  "answer_7",
  "answer_8",
  "answer_9",
  "answer_10",
  "answer_11",
  "answer_12",
  "answer_13",
  "status",
];
HEADERS[SHEET_ANALYSIS] = [
  "interview_id",
  "created_at",
  "model",
  "businessSummary",
  "confidence",
  "mainPainPoint",
  "raw_json",
];
HEADERS[SHEET_CONSOLIDATED] = [
  "id",
  "created_at",
  "model",
  "interview_ids",
  "interview_count",
  "summary",
  "raw_json",
];

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function sheetOrCreate_(name) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(name);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(name);
  }
  return sheet;
}

/** Agrega las columnas que falten, sin tocar las existentes. */
function ensureHeaders_(sheet, headers) {
  var current = sheet.getRange(1, 1, 1, Math.max(sheet.getLastColumn(), 1))
    .getValues()[0]
    .map(function (h) {
      return String(h).trim();
    });
  var missing = headers.filter(function (header) {
    return current.indexOf(header) === -1;
  });
  if (missing.length === 0) return;
  var start = current.length;
  sheet.getRange(1, start + 1, 1, missing.length).setValues([missing]);
}

/** Devuelve el numero de fila (1-based) donde esta el id, o 0 si no existe. */
function findRowById_(sheet, idColumn, id) {
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return 0;
  var ids = sheet.getRange(2, idColumn, lastRow - 1, 1).getValues();
  for (var i = 0; i < ids.length; i++) {
    if (String(ids[i][0]).trim() === String(id)) return i + 2;
  }
  return 0;
}

/** Escribe la fila: actualiza si el id ya existe, si no la agrega. */
function upsert_(sheetName, idColumn, values) {
  var sheet = sheetOrCreate_(sheetName);
  ensureHeaders_(sheet, HEADERS[sheetName]);
  var id = values[idColumn - 1];
  var row = id ? findRowById_(sheet, idColumn, id) : 0;
  if (row > 0) {
    sheet.getRange(row, 1, 1, values.length).setValues([values]);
    return { action: "updated", row: row };
  }
  sheet.appendRow(values);
  return { action: "appended", row: sheet.getLastRow() };
}

function stringOrEmpty_(value) {
  return typeof value === "string" ? value : "";
}

function saveInterview_(data) {
  var answers = data.answers || {};
  // Orden de columnas: id, date, interviewer, businessName, businessType,
  // location, answer_1..answer_13, status.
  var values = [
    data.id,
    data.date,
    data.interviewer,
    data.businessName || "",
    data.businessType || "",
    data.location || "",
  ];
  for (var q = 1; q <= MAX_QUESTION; q++) {
    values.push(stringOrEmpty_(answers[String(q)]));
  }
  values.push(data.status || "completed");
  return upsert_(SHEET_INTERVIEWS, 1, values);
}

function readJson_(raw) {
  if (typeof raw !== "string" || raw === "") return {};
  try {
    var parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    return {};
  }
}

function saveAnalysis_(data) {
  var rawJson = stringOrEmpty_(data.rawJson);
  var analysis = readJson_(rawJson);
  var interviewIds = data.interviewIds;
  var summary = stringOrEmpty_(analysis.summary);
  var values = [
    data.interviewId || "",
    new Date().toISOString(),
    data.model || "",
    stringOrEmpty_(analysis.businessSummary),
    stringOrEmpty_(analysis.confidence),
    stringOrEmpty_(analysis.mainPainPoint),
    rawJson,
  ];
  if (interviewIds) {
    return upsert_(SHEET_CONSOLIDATED, 1, [
      data.consolidatedId || Utilities.getUuid(),
      new Date().toISOString(),
      data.model || "",
      JSON.stringify(interviewIds),
      interviewIds.length,
      summary,
      rawJson,
    ]);
  }
  return upsert_(SHEET_ANALYSIS, 1, values);
}

function doPost(e) {
  if (!e || !e.postData) {
    return jsonResponse_({ ok: false, error: "no data received" });
  }
  var data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (error) {
    return jsonResponse_({ ok: false, error: "invalid json" });
  }
  try {
    var result;
    if (data.type === "interview") {
      result = saveInterview_(data);
    } else if (data.type === "analysis" || data.type === "consolidated") {
      result = saveAnalysis_(data);
    } else {
      return jsonResponse_({ ok: false, error: "unknown type: " + data.type });
    }
    return jsonResponse_({ ok: true, result: result });
  } catch (error) {
    return jsonResponse_({
      ok: false,
      error: String(error && error.message ? error.message : error),
    });
  }
}

/** Convierte la hoja en objetos usando la fila de encabezados como claves. */
function readRows_(sheet) {
  var values = sheet.getDataRange().getValues();
  if (values.length < 2) return [];
  var headers = values[0].map(function (h) {
    return String(h).trim();
  });
  return values.slice(1).map(function (row) {
    var obj = {};
    headers.forEach(function (header, i) {
      if (header === "") return;
      obj[header] = row[i] instanceof Date ? row[i].toISOString() : row[i];
    });
    return obj;
  });
}

/** La columna que identifica la entrevista cambia segun la hoja. */
function idColumn_(sheetName) {
  if (sheetName === SHEET_ANALYSIS) return "interview_id";
  if (sheetName === SHEET_CONSOLIDATED) return "id";
  return "id";
}

function doGet(e) {
  var params = (e && e.parameter) || {};
  var sheetName = params.sheet || SHEET_INTERVIEWS;
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  if (!sheet) {
    return jsonResponse_({ ok: false, error: "No existe la hoja " + sheetName });
  }
  try {
    var rows = readRows_(sheet);
    if (params.id) {
      var column = idColumn_(sheetName);
      rows = rows.filter(function (row) {
        return String(row[column] || "") === String(params.id);
      });
    }
    return jsonResponse_({ ok: true, data: rows });
  } catch (error) {
    return jsonResponse_({
      ok: false,
      error: "doGet: " + String(error && error.message ? error.message : error),
    });
  }
}
