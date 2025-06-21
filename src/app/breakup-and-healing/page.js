import { postsByTwoCategoriesQuery , categoriesQuery } from "@/lib/queries";
import { client } from "@/sanity/lib/client";
import BoxUiHomePage from "@/components/ui/BoxUiHomePage";
import { notFound } from "next/navigation";
import JobCategories from "@/components/pages/JobCategories";


// SEO Metadata for Love & Healing Page
export const metadata = {
  title: "Love Languages & Breakup Healing | LoveConnect",
  description:
    "Explore insightful articles that blend the beauty of love languages with the path of breakup healing. Understand emotional needs, communication styles, and recovery tips.",
  keywords: [
    "love languages",
    "breakup healing",
    "relationship advice",
    "emotional connection",
    "relationship recovery",
    "self-love",
    "healing after breakup",
    "romantic communication",
  ],
  openGraph: {
    title: "Love Languages & Breakup Healing | LoveConnect",
    description:
      "Dive into stories and guides that blend emotional connection with the healing journey. Perfect for those navigating love and loss.",
    url: "https://yourdomain.com/love-and-healing", // replace with your actual URL
    siteName: "LoveConnect",
    images: [
      {
        url: "https://yourdomain.com/og-love-healing.jpg", // optional image
        width: 1200,
        height: 630,
        alt: "Love and Healing Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Love Languages & Breakup Healing | LoveConnect",
    description:
      "Explore how understanding love languages can ease the pain of breakup and strengthen future relationships.",
    images: ["https://yourdomain.com/twitter-love-healing.jpg"],
  },
};


// Pre-render static paths for all category slugs
export async function generateStaticParams() {
  const categories = await client.fetch(categoriesQuery);
  return categories.map((cat) => ({
    slug: cat.slug.current,
  }));
}

export default async function CategoryPage() {
  const posts = await client.fetch(postsByTwoCategoriesQuery, {
    slug2: 'breakup-and-healing', // Second category slug
    slug1: 'love-languages',   // First category slug
  });

  if (!posts || posts.length === 0) {
    notFound();
  }

  

  return (
    <main className="min-h-screen bg-[#fefce8] text-black pt-20">
      {/* Header Section */}
      {/* <section className="bg-gradient-to-r from-[#dec187] to-[#c8a96a] text-black py-12 px-4 md:px-10 shadow-inner">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold capitalize mb-2">
            {formattedSlug}
          </h1>
          <p className="text-sm md:text-base text-gray-800">
            Explore heartfelt stories, advice, and guides in <strong>{formattedSlug}</strong>.
          </p>
        </div>
      </section> */}

      {/* Breadcrumb */}
      {/* <div className="max-w-7xl mx-auto px-4 md:px-10 mt-4 text-sm text-gray-600">
        <nav className="flex flex-wrap items-center space-x-2">
          <a href="/" className="hover:underline hover:text-black">Home</a>
          <span>/</span>
          <a href="/category" className="hover:underline hover:text-black">Categories</a>
          <span>/</span>
          <span className="capitalize font-medium">{formattedSlug}</span>
        </nav>
      </div> */}

      {/* Blog Posts */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-10">
        <h2 className="text-2xl font-semibold mb-6"> </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BoxUiHomePage key={index} post={post} />
          ))}
        </div>
      </section>

      {/* Categories List */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 pb-20">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">More Categories</h2>
        <JobCategories />
      </section>
    </main>
  );
}
