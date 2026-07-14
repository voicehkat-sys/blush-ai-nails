import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    console.log("Запрос в OpenAI...");

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: `
Ты эксперт по nail-дизайну.

Клиент написал:
${prompt}

Предложи 3 идеи маникюра.

Верни ТОЛЬКО JSON в таком формате:

{
  "designs": [
    {
      "title": "...",
      "description": "...",
      "image": "pink french nails"
    }
  ]
}
`,
    });

    console.log("Ответ получен");

    const text = response.output_text;

    console.log(text);

    const data = JSON.parse(text);

    return Response.json(data);

  } catch (error) {
    console.error(error);

    return Response.json(
      {
        designs: [],
        error: "Ошибка OpenAI",
      },
      {
        status: 500,
      }
    );
  }
}