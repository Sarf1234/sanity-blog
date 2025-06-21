import Link from "next/link";
import { client } from "../../sanity/lib/client";
import { categoriesQuery } from "@/lib/queries";

export default async function JobCategories() {
  const categories = await client.fetch(categoriesQuery, {}, { cache: 'no-store' });

  return (
    <div className="bg-white rounded-lg shadow-md p-5 w-full">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
      <ul className="space-y-2">
        {categories.map((item, index) => (
          <li
            key={item.title}
            className="text-gray-800 border-b border-gray-200 pb-2 hover:text-indigo-600 cursor-pointer"
          >
            <Link href={`/category/${item.slug.current}`} key={index}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
