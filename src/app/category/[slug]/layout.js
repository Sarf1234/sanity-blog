import React from "react";
import Link from "next/link";

export default function Layout({ children, params }) {
  const { slug } = params;
  const formattedSlug = slug.replace(/-/g, " ");

  return (
    <main className="min-h-screen bg-[#fefce8] text-black pt-28">
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-10">
        {children}
      </section>
    </main>
  );
}
