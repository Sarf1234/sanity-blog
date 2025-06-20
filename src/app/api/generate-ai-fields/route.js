import { client } from "@/sanity/lib/client";
import { nanoid } from "nanoid";

export async function POST(req) {
  try {
    const { _id, title } = await req.json();

    if (!title || !_id) {
      return new Response("Missing title or ID", { status: 400 });
    }

    const realId = _id.startsWith("drafts.") ? _id.replace("drafts.", "") : _id;
    console.log("🔍 Fetching Sanity doc for ID:", realId);

    const currentDoc = await client.getDocument(realId);
    console.log("📄 currentDoc:", currentDoc);

    if (!currentDoc) {
      return new Response("Document not found in Sanity", { status: 404 });
    }

    if (Array.isArray(currentDoc.body) && currentDoc.body.length > 0) {
      return new Response("Body already exists, skipping.", { status: 200 });
    }

   const prompt = `
You are a professional SEO blog writer with expertise in writing emotionally engaging, human-like articles that rank on Google.

Your task is to write a complete, well-researched blog post based on the title: "${title}".

Structure your response in the following order, with plain text only (no JSON, Markdown, or special characters):

1. Meta Title: (under 60 characters, emotionally engaging)
2. Meta Description: (under 160 characters, persuasive and keyword-rich)
3. SEO Keywords: (comma-separated, 5 keywords max, high search intent)
4. Blog Content: Write a detailed blog in 8-10 paragraphs. The tone should be warm, empathetic, relatable, and written as if by a human with life experience. Include storytelling elements, personal touch, and advice that genuinely helps the reader. Use short sentences, rhetorical questions, emotional resonance, and examples.

Ensure:
- The article is optimized for SEO but still reads naturally and use hinglish.
- Content is unique and not generic.
- Focus on reader intent and emotional connection.
- Make it Google-friendly, share-worthy, and trustworthy.

End the article with a gentle takeaway or message to leave the reader feeling understood and supported.
`;


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

    // Convert response into paragraph blocks
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

    return new Response(
      JSON.stringify({ message: "Body updated from AI response" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("❌ AI Body Update Error:", err.message || err);
    return new Response("Failed to update body from AI", { status: 500 });
  }
}
