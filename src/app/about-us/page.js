import React from 'react'

export const metadata = {
  title: "About TrueFeeling | A Space Where Emotions Live",
  description:
    "Discover the heart behind TrueFeeling — a platform dedicated to real emotions, healing, inspiration, and connection through love stories, quotes, and blogs.",
  keywords: [
    "about TrueFeeling",
    "love stories",
    "relationship blogs",
    "healing after breakup",
    "emotional quotes",
    "relationship advice",
    "self growth journey",
    "community of hearts",
  ],
  openGraph: {
    title: "About TrueFeeling | A Space Where Emotions Live",
    description:
      "Learn about TrueFeeling's mission to connect hearts through authentic stories, thoughtful blogs, and meaningful quotes. A safe place where love, healing, and growth come together.",
    url: "https://truefeelings.in/about",
    siteName: "TrueFeeling",
    images: [
      {
        url: "https://truefeelings.in/og-about.jpg", // replace with your OG image
        width: 1200,
        height: 630,
        alt: "About TrueFeeling Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About TrueFeeling | A Space Where Emotions Live",
    description:
      "Know more about TrueFeeling’s mission — a place for emotions, love stories, healing, and growth.",
    images: ["https://truefeelings.in/twitter-about.jpg"], // replace with Twitter OG
  },
};

const About = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] px-4 py-20 md:px-16 md:py-24 text-gray-800">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-rose mb-4">
          About TrueFeeling
        </h1>

        <p className="text-lg md:text-xl text-center text-gray-700 leading-relaxed max-w-3xl mx-auto">
          At <span className="font-semibold text-plum">TrueFeeling</span>, we believe that emotions deserve to be felt, expressed, and celebrated. 
          Whether it’s a story, a memory, or a simple quote, every feeling carries a voice — and we’re here to make sure it’s heard.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-rose">Our Mission</h2>
            <p className="text-base leading-relaxed">
              TrueFeeling was born with a simple intention: to create a safe and meaningful space where emotions can breathe. 
              From heartfelt love stories to soulful quotes, we aim to provide words for feelings that often go unspoken.
            </p>
            <p className="text-base leading-relaxed">
              We’re not just another blog — we’re a circle of hearts. 
              A place for those who are healing, those who are in love, and those who simply want to feel connected.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-rose">Why TrueFeeling?</h2>
            <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
              <li>
                <strong>Real Emotions:</strong> Every post is written to reflect genuine human experiences — love, pain, joy, and healing.
              </li>
              <li>
                <strong>Diverse Perspectives:</strong> We embrace stories and feelings from people across all walks of life.
              </li>
              <li>
                <strong>Healing Through Words:</strong> Whether you’re moving on or holding on, our words walk with you.
              </li>
              <li>
                <strong>Simple, Soothing UI:</strong> Read without distractions in a calm, heart-centered space.
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-plum mb-4">
            Walk With Us
          </h3>
          <p className="text-base leading-relaxed max-w-2xl mx-auto mb-6">
            Whether you came here searching for inspiration, strength, or just a little reminder that you’re not alone — 
            TrueFeeling is your space. Let’s grow, heal, and celebrate emotions together.
          </p>
          <a href="/" className="inline-block">
            <button className="bg-gradient-to-r from-[#dec187] to-[#c8a96a] text-black font-medium px-6 py-3 rounded-md shadow hover:scale-105 transition-all">
              Explore Blogs & Quotes
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
