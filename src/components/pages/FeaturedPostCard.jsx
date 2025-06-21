
import React from 'react'
import Link from 'next/link'
import { client } from "@/sanity/lib/client";
import { latestPostsQuery } from "@/lib/queries";

const FeaturedPostCard = async() => {

    const posts = await client.fetch(latestPostsQuery, {}, { cache: 'no-store' });
    const topPosts = posts?.slice(0, 1); // Only first 2 posts
    const [topPost] = topPosts;

    // console.clear()
    // console.log(topPost)


  return (
    <section className="w-full px-4 sm:px-6 py-20 bg-[#fefce8c9]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image Column */}
        <div className="w-full md:w-1/2">
          <img
            src={topPost.mainImage}
            alt={topPost.title}
            className="w-full h-auto rounded-md shadow-lg object-cover"
          />
        </div>

        {/* Text Column */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 rounded-md shadow-md">
          <div className="border-t-4 border-[#7a3b14] w-12 mb-4" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 leading-snug">
            {topPost.title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
           {topPost.summary}
           
          </p>
          <Link
            href={`/blog/${topPost.slug.current}`}
            className="inline-block border border-[#7a3b14] text-[#7a3b14] px-5 py-2 text-sm font-semibold tracking-wide rounded-sm hover:bg-[#7a3b14] hover:text-white transition"
          >
            READ MORE
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPostCard
