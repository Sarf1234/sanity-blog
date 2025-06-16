"use client";

import Autoplay from "embla-carousel-autoplay";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Link from "next/link";
import { client } from '../../sanity/lib/client'
import { latestPostsQuery } from '@/lib/queries';

const FeaturedJobsCarousel = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await client.fetch(latestPostsQuery);
      setPosts(data);
      console.log(data)
    };
    fetchPosts();
  }, []);

  return (
    <section className="py-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="container mx-auto text-center">
        <h2 className="text-lg md:text-4xl font-bold text-white mb-6">
          Featured Blog Posts
        </h2>
        <div>
          <Carousel className="w-full"
            plugins={[ Autoplay({ delay: 2000 }) ]}
          >
            <CarouselContent className="-ml-1">
              {posts.map((post, index) => (
                <CarouselItem key={index} className="pl-1 basis-2/4 lg:basis-1/6">
                  <div className="p-1">
                    <Link href={`/blog/${post.slug.current}`}>
                      <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all">
                        <img
                          src={post.mainImage}
                          alt={post.title}
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-4 text-left">
                          <h3 className="text-md font-semibold text-gray-800">{post.title}</h3>
                          <p className="text-sm text-gray-600 mb-1">{post?.authorName || "Unknown"}</p>
                          <p className="text-xs text-gray-500 mb-2">
                            Posted on: {new Date(post.publishedAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0"/>
            <CarouselNext className="right-0"/>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobsCarousel;
