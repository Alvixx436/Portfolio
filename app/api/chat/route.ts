import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { text }: { text: string } = await req.json();

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // Use the new model
        messages: [{ role: "user", content: text }],
      }),
    });

    const data = await response.json();
    return NextResponse.json(data); // Return the valid response
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
