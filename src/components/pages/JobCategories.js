
import Link from "next/link"
import { client } from "../../sanity/lib/client"
import { categoriesQuery } from "@/lib/queries"

export default async function JobCategories() {
  const categories = await client.fetch(categoriesQuery, {}, { cache: 'no-store' })

  return (
    <section className="bg-[#fefce8] w-full py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Explore Categories</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Discover topics that matter to you — from love advice to breakup healing, our categories help you find exactly what you're looking for.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((item, index) => (
            <Link
              href={`/category/${item.slug.current}`}
              key={index}
              className="block text-center bg-[#fff5ed] hover:bg-[#c8a96a]/10 border border-gray-200 hover:border-[#dec187] text-gray-700 hover:text-[#c8a96a] font-medium py-3 px-4 rounded-md transition duration-300"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
