'use client'

import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { client } from '@/sanity/lib/client'
import { quoteSliderQuery } from '@/lib/queries'
import Link from 'next/link'

const QuoteCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })])
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    const fetchQuotes = async () => {
      const data = await client.fetch(quoteSliderQuery)
      setQuotes(data?.quotes || [])
    }
    fetchQuotes()
  }, [])

  if (!quotes.length) return null

  return (
    <section className="w-full min-h-[60vh] flex items-center justify-center bg-[#fefce8c9] overflow-hidden px-4 py-10 md:py-20">
      <div className="embla w-full" ref={emblaRef}>
        <div className="embla__container flex">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="embla__slide min-w-full flex items-center justify-center text-center px-4"
            >
              <div className="max-w-3xl mx-auto">
                <p className="text-gray-700 italic text-lg md:text-xl leading-relaxed mb-4">
                  {quote.text}
                </p>

                {/* Conditionally render button */}
                {/* {quote.buttonText && (
                  <>
                    {quote.linkType === 'external' && quote.externalUrl && (
                      <a
                        href={quote.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <button className="mt-4 px-6 py-2 text-sm font-semibold bg-rose text-white rounded hover:bg-plum transition">
                          {quote.buttonText}
                        </button>
                      </a>
                    )}
                    {quote.linkType === 'internal' && quote.internalLinkSlug && (
                      <Link href={`/blog/${quote.internalLinkSlug}`} className="inline-block">
                        <button className="mt-4 px-6 py-2 text-sm font-semibold bg-rose text-white rounded hover:bg-plum transition">
                          {quote.buttonText}
                        </button>
                      </Link>
                    )}
                  </>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuoteCarousel
