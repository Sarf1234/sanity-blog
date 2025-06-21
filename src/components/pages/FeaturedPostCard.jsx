import React from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { latestPostsQuery } from "@/lib/queries";
import { urlFor } from "@/sanity/lib/imageUrl";

const FeaturedPostCard = async () => {
  const posts = await client.fetch(latestPostsQuery, {}, { cache: "no-store" });
  const [topPost] = posts?.slice(0, 1);

  if (!topPost) return null;

  const imageUrl = urlFor(topPost.mainImage).width(800).height(500).url();

  return (
    <section
      className="w-full px-4 sm:px-6 py-20 bg-[#fefce8c9]"
      aria-labelledby="featured-post-heading"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image Column */}
        <div className="w-full md:w-1/2 relative h-[300px] sm:h-[400px] rounded-md overflow-hidden shadow-lg">
          <Image
            src={imageUrl}
            alt={topPost.title || "Featured Blog Post"}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover rounded-md"
            priority // High LCP area — load fast
          />
        </div>

        {/* Text Column */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 rounded-md shadow-md bg-white/60 backdrop-blur">
          <div className="border-t-4 border-[#7a3b14] w-12 mb-4" />
          <h2
            id="featured-post-heading"
            className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 leading-snug"
          >
            {topPost.title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 line-clamp-5">
            {topPost.summary}
          </p>
          <Link
            href={`/blog/${topPost.slug.current}`}
            className="inline-block border border-[#7a3b14] text-[#7a3b14] px-5 py-2 text-sm font-semibold tracking-wide rounded-sm hover:bg-[#7a3b14] hover:text-white transition"
            aria-label={`Read more about ${topPost.title}`}
          >
            READ MORE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPostCard;
