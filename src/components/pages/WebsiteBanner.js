"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { client } from "@/sanity/lib/client";
import { bannersQuery } from "@/lib/queries";
import Link from "next/link";

const BannerCarousel = () => {
  const [banners, setBanners] = useState([]);
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(bannersQuery);
      setBanners(data || []);
    };
    fetchData();
  }, []);

  if (!banners.length) return null;

  return (
    <section className="w-full md:h-[70vh] h-[40vh] overflow-hidden relative">
      <div className="embla w-full h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {banners.map((banner, idx) => (
            <div
              className="embla__slide min-w-full h-full relative"
              key={idx}
            >
              {/* Background Image */}
              <img
                src={banner.imageUrl}
                alt={banner.title}
                className="absolute top-0 left-0 w-full h-full object-contain z-0"
              />

              {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-10" />

              {/* Content */}
              <div className="relative z-20 h-full">
                <div
                  className="absolute bottom-[10px] left-[20px] w-[33.3333%] p-3 sm:p-5 bg-white bg-opacity-70 rounded shadow-lg
                  flex flex-col justify-end h-fit sm:h-auto"
                >
                  <h2 className="text-base sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 leading-snug">
                    {banner.title}
                  </h2>
                  <p className="text-xs sm:text-base text-gray-700 mb-3 leading-tight sm:leading-normal">
                    {banner.smallDescription}
                  </p>

                  {banner.linkType === "external" && banner.externalUrl ? (
                    <a
                      href={banner.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block max-w-28 bg-indigo-600 text-white text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded hover:bg-indigo-700 transition"
                    >
                      Visit Site
                    </a>
                  ) : banner.linkType === "internal" && banner.internalLink?.slug?.current ? (
                    <Link
                      href={`/blog/${banner.internalLink.slug.current}`}
                      className="inline-block max-w-50 bg-indigo-600 text-white text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded hover:bg-indigo-700 transition"
                    >
                      Visit Post
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerCarousel;
