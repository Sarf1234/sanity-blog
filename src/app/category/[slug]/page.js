import { postsByCategoryQuery, categoriesQuery } from "@/lib/queries";
import { client } from "@/sanity/lib/client";
import BoxUiHomePage from "@/components/ui/BoxUiHomePage";
import { notFound } from "next/navigation";
import JobCategories from "@/components/pages/JobCategories";

// Pre-render static paths for all category slugs
export async function generateStaticParams() {
  const categories = await client.fetch(categoriesQuery);
  return categories.map((cat) => ({
    slug: cat.slug.current,
  }));
}

export default async function CategoryPage({ params }) {
  const posts = await client.fetch(postsByCategoryQuery, {
    categorySlug: params.slug,
  });

  if (!posts || posts.length === 0) {
    notFound();
  }

  return (
    <section className="px-4 py-10 md:px-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 capitalize">
          {params.slug.replace(/-/g, " ")}
        </h1>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left: 2/3 Posts */}
          <div className="w-full md:w-3/4 flex flex-wrap">
            {posts.map((post, index) => (
              <div key={index} className="md:w-1/3 gap-6 w-1/2">
                <BoxUiHomePage post={post} />
              </div>
            ))}
          </div>

          {/* Right: 1/3 Categories */}
          <div className="w-full md:w-1/3">
            <JobCategories />
          </div>
        </div>
      </div>
    </section>
  );
}
