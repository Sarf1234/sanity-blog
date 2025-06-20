import { client } from "@/sanity/lib/client";
import { nanoid } from "nanoid";

export async function POST(req) {
  const { _id, title } = await req.json();

  if (!title || !_id) {
    return new Response("Missing title or ID", { status: 400 });
  }

  const realId = _id.startsWith("drafts.") ? _id.replace("drafts.", "") : _id;

  const currentDoc = await client.getDocument(realId);
  if (Array.isArray(currentDoc.body) && currentDoc.body.length > 0) {
    return new Response("Body already exists, skipping.", { status: 200 });
  }

  const prompt = `
You are a professional SEO blog writer.

Write a complete blog post based on this title: "${title}".

Include the following sections clearly:

1. Meta Title: (under 60 characters)
2. Meta Description: (under 160 characters)
3. SEO Keywords: (comma separated, 5 keywords max)
4. Product Description: Write a detailed 3–4 paragraph blog-style product description.

Return everything as plain text in this exact order — do not use JSON, Markdown, or formatting.

Keep it clean, readable, and suitable for directly showing on a blog site.
`;

  try {
    const aiRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3-70b-8192",
        messages: [
          { role: "system", content: "You are a professional SEO blog writer." },
          { role: "user", content: prompt },
        ],
        temperature: 0.7,
      }),
    });

    const data = await aiRes.json();
    const content = data.choices?.[0]?.message?.content || "";
    console.log("🧠 AI Response:", content);

    // Split plain text into paragraphs and convert to Sanity block format
    const paragraphBlocks = content
      .split(/\n{2,}/)
      .filter((p) => p.trim())
      .map((paragraph) => ({
        _type: "block",
        _key: nanoid(),
        style: "normal",
        children: [
          {
            _type: "span",
            _key: nanoid(),
            text: paragraph.trim(),
            marks: [],
          },
        ],
        markDefs: [],
      }));

    await client
      .patch(realId)
      .set({
        body: paragraphBlocks,
      })
      .commit();

    return new Response(JSON.stringify({ message: "Body updated from AI response" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("❌ AI Body Update Error:", err.message || err);
    return new Response("Failed to update body from AI", { status: 500 });
  }
}
