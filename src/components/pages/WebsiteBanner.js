'use client'

import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { client } from '@/sanity/lib/client'
import { bannersQuery } from '@/lib/queries'
import Link from 'next/link'

const BannerCarousel = () => {
  const [banners, setBanners] = useState([])
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })])

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(bannersQuery, {}, { cache: 'no-store' })
      setBanners(data || [])
    }
    fetchData()
  }, [])

  if (!banners.length) return null

  return (
    <section className="w-full h-[70vh] md:h-[90vh] relative overflow-hidden">
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {banners.map((banner, idx) => (
            <div key={idx} className="embla__slide min-w-full h-full relative">
              {/* Background image */}
              <img
                src={banner.imageUrl}
                alt={banner.title}
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
              />

              {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

              {/* Centered Content */}
              <div className="relative z-20 h-full flex items-end md:items-center justify-center px-4">
                <div
                  className="w-full max-w-xl p-4 sm:p-8 rounded-md text-center
                  bg-white/10 backdrop-blur-lg
                  flex flex-col items-center gap-4
                  mb-8 md:mb-0"
                >
                  <h2 className="text-lg sm:text-3xl font-bold text-white leading-snug">
                    {banner.title}
                  </h2>
                  <p className="text-xs sm:text-base text-white leading-relaxed">
                    {banner.smallDescription}
                  </p>

                  {/* Button */}
                  {banner.linkType === 'external' && banner.externalUrl ? (
                    <a
                      href={banner.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block group"
                    >
                      <button className="relative inline-flex items-center justify-between px-6 py-3 sm:px-8 sm:py-3 bg-gradient-to-r from-[#dec187] to-[#c8a96a] text-black font-semibold tracking-widest text-xs sm:text-sm rounded-md shadow-md transition-all hover:shadow-lg hover:scale-[1.02]">
                        <span className="mr-2">VIEW NOW</span>
                        <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </button>
                    </a>
                  ) : banner.linkType === 'internal' && banner.internalLink?.slug?.current ? (
                    <Link
                      href={`/blog/${banner.internalLink.slug.current}`}
                      className="inline-block group"
                    >
                      <button className="relative inline-flex items-center justify-between px-6 py-3 sm:px-8 sm:py-3 bg-gradient-to-r from-[#dec187] to-[#c8a96a] text-black font-semibold tracking-widest text-xs sm:text-sm rounded-md shadow-md transition-all hover:shadow-lg hover:scale-[1.02]">
                        <span className="mr-2">VIEW NOW</span>
                        <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </button>
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BannerCarousel
