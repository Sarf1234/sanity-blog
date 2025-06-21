"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays } from "lucide-react";

const BoxUiHomePage = React.memo(({ post, index }) => {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="overflow-hidden rounded-lg shadow-sm bg-white hover:scale-[1.02] transition-transform duration-300">
      <Link href={`/blog/${post.slug.current}`}>
        <div className="relative w-full h-64">
          <Image
            src={post.mainImage}
            alt={post.title || "Blog post image"}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover rounded-t-lg"
            loading="lazy"
          />
        </div>
      </Link>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#4b2852] mb-2 line-clamp-2">
          {post.title}
        </h3>

        <div className="flex items-center text-sm text-gray-500 mb-3">
          <CalendarDays className="w-4 h-4 mr-1" />
          {formattedDate}
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {post.summary || "No summary available."}
        </p>

        <Link
          href={`/blog/${post.slug.current}`}
          className="text-[#9d3dbf] text-sm font-semibold hover:underline flex items-center"
        >
          Read More <span className="ml-1">→</span>
        </Link>
      </div>
    </article>
  );
});

export default BoxUiHomePage;
