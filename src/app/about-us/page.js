import React from 'react'


export const metadata = {
  title: "About LoveVerse | Where Emotions Find a Voice",
  description:
    "Discover the heart behind LoveVerse — a platform dedicated to emotional connection, healing, and inspiration through love stories, quotes, and blogs.",
  keywords: [
    "about LoveVerse",
    "love stories platform",
    "emotional blogs",
    "breakup healing",
    "relationship advice",
    "quotes on love",
    "healing journey",
    "community of hearts",
  ],
  openGraph: {
    title: "About LoveVerse | Where Emotions Find a Voice",
    description:
      "Learn about LoveVerse's mission to connect hearts through powerful storytelling and meaningful quotes. A space where love, healing, and growth meet.",
    url: "https://yourdomain.com/about", // replace with your actual domain
    siteName: "LoveVerse",
    images: [
      {
        url: "https://yourdomain.com/og-about.jpg", // optional OG image
        width: 1200,
        height: 630,
        alt: "About LoveVerse Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About LoveVerse | Where Emotions Find a Voice",
    description:
      "Know more about the story and mission of LoveVerse — connecting hearts through inspiring emotional content.",
    images: ["https://yourdomain.com/twitter-about.jpg"], // optional
  },
};


const About = () => {
  return (
    <div className="min-h-screen bg-[#fefce8] px-4 py-10 md:px-16 md:py-24 text-gray-800">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-rose mb-4">
          About LoveVerse
        </h1>

        <p className="text-lg md:text-xl text-center text-gray-700 leading-relaxed max-w-3xl mx-auto">
          At <span className="font-semibold text-plum">LoveVerse</span>, we believe that love is the most powerful force in the universe. Whether it's a story, a memory, or a quote, every emotion deserves a voice—and we are here to amplify it.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-rose">Our Mission</h2>
            <p className="text-base leading-relaxed">
              Our mission is simple: to build a home for heartfelt stories, relatable experiences, and powerful expressions of emotion. From inspiring blogs to uplifting quotes, everything we do is designed to connect hearts and minds.
            </p>
            <p className="text-base leading-relaxed">
              We’re more than just a blog—we’re a movement. A movement to help you feel understood, seen, and celebrated in every phase of your emotional journey.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-rose">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
              <li>
                <strong>Emotion-Driven Content:</strong> Everything we publish aims to inspire, heal, or empower.
              </li>
              <li>
                <strong>Diverse Voices:</strong> Our platform celebrates stories from all walks of life, no matter the background.
              </li>
              <li>
                <strong>Clean & Friendly UI:</strong> Enjoy a seamless, soothing reading experience across devices.
              </li>
              <li>
                <strong>Quote Slides:</strong> Let your day begin or end with a touch of daily love and motivation.
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-plum mb-4">
            Join Our Journey
          </h3>
          <p className="text-base leading-relaxed max-w-2xl mx-auto mb-6">
            Whether you're here to find inspiration, to heal, or just to feel a little more connected—you're not alone. Welcome to LoveVerse.
          </p>
          <a href="/" className="inline-block">
            <button className="bg-gradient-to-r from-[#dec187] to-[#c8a96a] text-black font-medium px-6 py-3 rounded-md shadow hover:scale-105 transition-all">
              Explore Our Blogs
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
