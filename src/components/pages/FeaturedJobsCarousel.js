import React from "react";
import { client } from "@/sanity/lib/client";
import { latestPostsQuery } from "@/lib/queries";
import BoxUiHomePage from "../ui/BoxUiHomePage";
import JobCategories from "./JobCategories";

const FeaturedJobsSection = async () => {
  const posts = await client.fetch(latestPostsQuery);
  const topPosts = posts?.slice(0, 10); // Only first 2 posts

  return (
    <section className="py-10 px-2 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-lg md:text-4xl font-bold text-black mb-6 text-center">
          Featured Blog Posts
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left: 2/3 Posts */}
          <div className="w-full md:w-3/4 flex flex-wrap">
            {topPosts.map((post, index) => (
              <div key={index} className="md:w-1/3 gap-6 w-1/2">
                <BoxUiHomePage post={post} />
              </div>
            ))}
          </div>

          {/* Right: 1/3 Categories */}
          <div className="w-full md:w-1/3">
            <JobCategories />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobsSection;
