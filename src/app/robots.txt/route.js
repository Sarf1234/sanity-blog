// app/robots.txt/route.js
export async function GET() {
  const content = `
User-agent: *
Allow: /
Disallow: /studio/

Sitemap: https://truefeelings.in/sitemap.xml
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
