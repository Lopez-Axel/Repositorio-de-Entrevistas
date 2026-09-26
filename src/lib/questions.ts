export interface InterviewQuestion {
  id: number;
  text: string;
}

export const interviewQuestions: InterviewQuestion[] = [
  {
    id: 1,
    text: "Cuénteme un poco sobre su negocio: ¿a qué se dedica, qué ofrece a sus clientes y cómo funciona actualmente?",
  },
  {
    id: 2,
    text: "Cuénteme cómo es un día normal de trabajo para usted, desde que comienza hasta que termina. ¿Qué actividades realiza habitualmente?",
  },
  {
    id: 3,
    text: "De todas las actividades que realiza, ¿cuáles son las que más tiempo, esfuerzo o atención le requieren?",
  },
  {
    id: 4,
    text: "¿Qué problemas o dificultades se presentan con más frecuencia en su trabajo y cómo afectan a su negocio?",
  },
  {
    id: 5,
    text: "Piense en la última vez que tuvo un problema importante en su negocio. ¿Qué ocurrió, cómo lo solucionó y qué consecuencias tuvo?",
  },
  {
    id: 6,
    text: "¿Cómo lleva actualmente el control de sus ventas, cobros, clientes, productos, materiales y demás información importante de su negocio?",
  },
  {
    id: 7,
    text: "¿Hay alguna tarea que tenga que hacer repetidamente, anotar a mano, revisar varias veces o realizar de una manera que considera innecesariamente complicada? Cuénteme cuál.",
  },
  {
    id: 8,
    text: "¿Qué herramientas, aplicaciones o medios tecnológicos utiliza actualmente para ayudarse en su negocio y qué cosas hace con ellos?",
  },
  {
    id: 9,
    text: "Cuando piensa en utilizar una nueva herramienta tecnológica para su negocio, ¿qué factores podrían hacer que decidiera no utilizarla o dejar de utilizarla?",
  },
  {
    id: 10,
    text: "Si pudiera mejorar o solucionar una sola cosa de su negocio con ayuda de la tecnología, ¿qué solucionaría y cómo le gustaría que funcionara?",
  },
  {
    id: 11,
    text: "Si una herramienta pudiera solucionar ese problema y ayudarle a ahorrar tiempo, ganar más dinero o reducir pérdidas, ¿qué tendría que ofrecer para que usted considerara que vale la pena pagar por ella?",
  },
  {
    id: 12,
    text: "¿Cómo preferiría pagar por una herramienta que realmente le ayudara en su negocio: un pago único, un pago mensual, anual, por uso u otra forma? ¿Por qué esa opción le resultaría más conveniente?",
  },
];

export const closingQuestion: InterviewQuestion = {
  id: 13,
  text: "¿Hay algún otro problema o necesidad de su negocio que considere importante y que no hayamos conversado?",
};

export const TOTAL_QUESTIONS = interviewQuestions.length;