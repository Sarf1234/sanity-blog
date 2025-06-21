import React from "react";
import { client } from "@/sanity/lib/client";
import { latestPostsQuery } from "@/lib/queries";
import Link from "next/link";
import BoxUiHomePage from "../ui/BoxUiHomePage";

const AllBlogsList = async () => {
  const posts = await client.fetch(latestPostsQuery, {}, { cache: 'no-store' });
  const topPosts = posts?.slice(0, 10); // Only first 2 posts

  return (
    <div className="bg-[#fafafa] rounded-lg shadow-md p-5 my-10 py-10 w-full">
      <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Top Blogs</h3>
      <div className="w-full flex flex-wrap">
            {topPosts.map((post, index) => (
              <div key={index} className="md:w-1/3 gap-6 w-1/2">
                <BoxUiHomePage post={post} />
              </div>
            ))}
    </div>
    </div>
  );
};

export default AllBlogsList;
