// app/category/[slug]/layout.js

import React from "react";
import Link from "next/link";

export default function Layout({ children, params }) {
  const { slug } = params;

  const formattedSlug = slug.replace(/-/g, " ");

  return (
    <main className="min-h-screen bg-gray-50 text-black">
      {/* Category Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-10 px-4 md:px-8">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold capitalize">
            {formattedSlug}
          </h1>
          <p className="mt-2 text-white text-sm md:text-base">
            Discover the latest posts in {formattedSlug}.
          </p>
        </div>
      </section>

      {/* Optional Breadcrumb */}
      <div className="container mx-auto px-4 md:px-8 mt-4 text-sm text-gray-500">
        <Link href="/" className="hover:underline text-gray-600">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/category" className="hover:underline text-gray-600">
          Categories
        </Link>{" "}
        / <span className="capitalize">{formattedSlug}</span>
      </div>

      {/* Page Content */}
      <section className="container mx-auto px-4 md:px-8 py-6">
        {children}
      </section>
    </main>
  );
}
