'use client'

import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { client } from '@/sanity/lib/client'
import { quoteSliderQuery } from '@/lib/queries'
import Link from 'next/link'

// ✅ Fallback quotes (copyright-free, human-like)
const fallbackQuotes = [
  {
    text: "Love isn’t about finding a perfect person, it’s about learning to see an imperfect soul perfectly."
  },
  {
    text: "The best relationships are built on small moments of kindness, not grand gestures of love."
  },
  {
    text: "In true love, silence often speaks louder than a thousand beautiful words."
  },
  {
    text: "Every strong bond is stitched together with trust, patience, and gentle understanding."
  },
  {
    text: "Real love doesn’t complete you — it helps you grow into the fullest version of yourself."
  },
]

const QuoteCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })])
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const data = await client.fetch(quoteSliderQuery)
        if (data?.quotes?.length > 0) {
          setQuotes(data.quotes)
        } else {
          setQuotes(fallbackQuotes) // fallback if Sanity is empty
        }
      } catch (error) {
        console.error("Error fetching quotes:", error)
        setQuotes(fallbackQuotes) // fallback on error
      }
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

                {/* Optional button support (internal/external links) */}
                {quote.buttonText && (
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
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuoteCarousel
