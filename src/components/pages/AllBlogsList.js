import React from "react";
import { client } from "@/sanity/lib/client";
import { latestPostsQuery } from "@/lib/queries";
import BoxUiHomePage from "../ui/BoxUiHomePage";

const AllBlogsList = async () => {
  const posts = await client.fetch(latestPostsQuery, {}, { cache: 'no-store' });
  const topPosts = posts?.slice(0, 9);

  return (
    <div className="bg-[#fff5ed] py-20 w-full">
      {/* Motivational Heading */}
      <div className="text-center px-4 mb-12">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-light text-[#1f1f1f]">
          Learn the secrets to{" "}
          <span className="text-[#b65fcf] font-semibold">Life Success</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-2">
          Maximize your potentials now, several bundle packages <br />
          that you can choose
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-10 md:px-20">
        {topPosts.map((post, index) => (
          <BoxUiHomePage key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogsList;
