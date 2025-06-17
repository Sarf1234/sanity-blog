import React from "react";
import Link from "next/link";

const BoxUiHomePage = ({ post }) => {
  return (
    <div className="p-1">
      <Link href={`/blog/${post.slug.current}`}>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all">
          <img
            src={post.mainImage}
            alt={post.title}
            className="w-full h-60 object-cover"
          />
          <div className="p-4 text-left">
            <h3 className="text-md font-semibold text-gray-800">
              {post.title}
            </h3>
            <p className="text-sm text-gray-600 mb-1">
              {post?.authorName || "Unknown"}
            </p>
            <p className="text-xs text-gray-500 mb-2">
              Posted on: {new Date(post.publishedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BoxUiHomePage;
