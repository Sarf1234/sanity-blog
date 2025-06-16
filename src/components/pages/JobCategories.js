import Link from "next/link";
import { client } from '../../sanity/lib/client'
import { categoriesQuery } from '@/lib/queries'

export default async function JobCategories() {
  const categories = await client.fetch(categoriesQuery);

  return (
    <section className="py-12 px-2 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-lg md:text-4xl font-semibold text-gray-800 mb-6">
          Browse Jobs by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link href={`/${category.slug.current}`} key={index}>
              <div className="bg-gray-100 shadow-lg rounded-lg p-6 cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                <p className="text-xs md:text-lg font-semibold whitespace-nowrap">{category.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
