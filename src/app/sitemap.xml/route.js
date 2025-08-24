import { client } from "@/sanity/lib/client";
import { categoriesQuery, allPostsQuery } from "@/lib/queries";

export async function GET() {
  const baseUrl = "https://truefeelings.in"; // ✅ Replace with your domain

  const [categories, posts] = await Promise.all([
    client.fetch(categoriesQuery),
    client.fetch(allPostsQuery),
  ]);

  const categoryUrls = categories.map((cat) => {
    return `<url><loc>${baseUrl}/category/${cat.slug.current}</loc></url>`;
  });

  const postUrls = posts.map((post) => {
    return `<url><loc>${baseUrl}/blog/${post.slug.current}</loc></url>`;
  });

  const staticUrls = [
    `<url><loc>${baseUrl}</loc></url>`,
    `<url><loc>${baseUrl}/about</loc></url>`,
    `<url><loc>${baseUrl}/contact</loc></url>`,
    `<url><loc>${baseUrl}/love-stories</loc></url>`,
    `<url><loc>${baseUrl}/relationship-advice</loc></url>`,
    `<url><loc>${baseUrl}/healing</loc></url>`,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticUrls.join("")}
    ${categoryUrls.join("")}
    ${postUrls.join("")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

