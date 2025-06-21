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
You are a professional SEO blog writer with expertise in writing emotionally engaging, long-form Hinglish blog articles that rank on Google and feel like human-written content.

Write a complete and meaningful blog post based on this title: "${title}"

Follow this exact structure and return plain text only (no JSON, Markdown, or formatting):

1. Meta Title: (under 60 characters, emotional and click-worthy)
2. Meta Description: (under 160 characters, persuasive and keyword-rich)
3. SEO Keywords: (comma-separated, 5 high-intent keywords max)
4. Blog Content: Write a detailed blog post in 8–10 paragraphs. Use Hinglish (Hindi-English mix) that feels natural — jaise ki koi real insaan dil se likh raha ho. Tone should be warm, emotional, relatable, aur friendly.

Include:
- Storytelling elements aur personal touch
- Real-life relatable examples
- Short, simple sentences and rhetorical questions
- Reader ko samjhne aur connect karne ki koshish
- SEO-friendly flow without over-optimization

Ensure:
- Blog Google mein rank kare aur emotionally connect bhi kare
- Language bilkul natural lage, not robotic or generic
- Article trustworthy, unique, aur share-worthy ho
- Ending mein ek emotional, thought-provoking message ya takeaway ho

Do not use headings or bullet points. Just write clean, well-flowing paragraphs.
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
