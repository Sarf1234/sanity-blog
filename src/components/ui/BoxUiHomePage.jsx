"use client";
import React from "react";
import Link from "next/link";
import { CalendarDays } from "lucide-react";

const BoxUiHomePage = ({ post }) => {
  return (
    <div className=" overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      <img
        src={post.mainImage}
        alt={post.title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#4b2852] mb-2">{post.title}</h3>

        <div className="flex items-center text-sm text-gray-500 mb-3">
          <CalendarDays className="w-4 h-4 mr-1" />
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
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
    </div>
  );
};

export default BoxUiHomePage;
