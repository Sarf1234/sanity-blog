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
You are a professional SEO blog writer. Write a full-length blog in Hinglish (mixed Hindi-English), the way Indian people talk naturally online — for example:

Example: 
"Jab dil toot jata hai na, toh lagta hai sab kuch khatam ho gaya. Lekin zindagi wahi rukti nahi. Thoda waqt lagta hai, but things do get better."

Based on the title: "${title}", write a complete, emotionally meaningful, long-form Hinglish blog post.

Use this structure only (plain text output):

1. Meta Title: (under 60 characters, emotional and click-worthy)
2. Meta Description: (under 160 characters, persuasive and keyword-rich)
3. SEO Keywords: (comma-separated, 5 keywords max)
4. Blog Content: Write a detailed blog post in 10-15 paragraphs in Hinglish (use both Hindi and English words as Indians naturally speak). Use simple, emotional, relatable tone — jaise koi apna dil se likh raha ho.

Instructions:
- Storytelling aur personal examples ka use karo
- Chhoti chhoti lines likho, jisme emotion ho
- Rhetorical questions use karo jaise: "Kya aapne bhi kabhi aisa feel kiya hai?"
- Reader ko apne words se connect feel karao
- Blog Google-friendly hona chahiye, but natural lage — over SEO mat karo
- Last paragraph mein ek emotional ya motivational closing zarur ho
- Strictly use Hinglish (no pure English)

Avoid headings, bullets, or formatting. Just write a clean, flowing article in Hinglish.
`;

    const aiRes = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama3-70b-8192",
          messages: [
            {
              role: "system",
              content: "You are a professional SEO blog writer.",
            },
            { role: "user", content: prompt },
          ],
          temperature: 0.7,
        }),
      }
    );

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
