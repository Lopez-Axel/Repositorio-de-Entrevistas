# AGENTS.md

Plataforma de entrevistas asistidas por IA (entrevistador humano + transcripción Web Speech) para descubrir oportunidades de software para pequeños negocios.

## Estado del proyecto

- **El código es scaffolding del starter de Astro (`npm create astro`, commit "Initial commit from Astro"). La app no está construida aún.**
- `README.md`, `src/layouts/Layout.astro` y `src/components/Welcome.astro` son plantilla del starter: reemplázalos por la app real.
- La especificación completa y definitiva del producto está en **`CLAUDE.md`** (idéntico a la versión original de este archivo). **Antes de implementar cualquier cosa, lee `CLAUDE.md` completo.** Es la única fuente de requisitos y está numerada por secciones (§).
- Dependencias instaladas: solo `astro`. **Faltan `@astrojs/react`, `react`, `react-dom`, `@mui/material`** (necesario para las islas React y MUI). Regístralas en `astro.config.mjs`.

## Comandos

- `npm run dev` → dev server en `http://localhost:4321` (puerto por defecto de Astro).
- `npm run build` / `npm run preview` → build de producción en `dist/` y previsualización.
- Typecheck: `npm run astro check` (no hay script separado). **No hay lint ni tests configurados.**
- Requiere Node >= 22.12.0 (`engines`).
- `dist/`, `.astro/` y `.env*` están en `.gitignore`.

## Reglas de arquitectura (no negociables)

- **Astro es el framework principal.** React solo como islas para componentes interactivos (`interview:load`). Nada de Next.js, Vue, Angular, Tailwind, Redux.
- **Sin base de datos.** Persistencia = Google Sheets (fuente principal) + `localStorage`/IndexedDB (progreso local de la entrevista).
- **OpenRouter y Google Sheets solo desde el servidor** (endpoints de Astro). API keys y `GOOGLE_SERVICE_ACCOUNT_JSON` nunca al cliente. UI → estado → persistencia local → API → Sheets/OpenRouter, nunca componente React → Google/OpenRouter directamente.
- Modelo LLM **configurable por env** (`OPENROUTER_MODEL`), nunca hardcodeado.
- No guardar audio (solo texto transcrito). Nunca borrar una entrevista por un error.

## Reglas de datos

- **Las 12 preguntas viven solo en el código (`src/lib/questions.ts`). Nunca se guardan en Google Sheets.** Usa los textos verbatim de `CLAUDE.md` §4 — no los parafrasees.
- Sheets solo almacena datos/estado de la entrevista, respuestas y análisis. Las respuestas guardan `{ questionNumber, answer }`, no el texto de la pregunta. Las preguntas sí se envían a la IA junto con las respuestas (contexto semántico).
- Columnas exactas de las hojas: `Interviews` en `CLAUDE.md` §6, `AI_Analysis` en §7. Estructura `AIAnalysis` en §8.
- La IA debe distinguir evidencia explícita / inferencia / oportunidad, y **no inventar** datos no mencionados (`mentioned: false`, `evidence: null`).
- Estructura de archivos objetivo propuesta en `CLAUDE.md` §31.

## Variables de entorno

```env
OPENROUTER_API_KEY=
OPENROUTER_MODEL=
GOOGLE_SHEET_ID=
GOOGLE_SERVICE_ACCOUNT_JSON=
```

## Prohibido agregar

Chatbot, IA entrevistando, avatares, base de datos, auth/pagos/CRM, almacenamiento de audio, dashboards complejos, microservicios, Docker. MVP validación rápida de extremo a extremo (orden de fases en `CLAUDE.md` §47).