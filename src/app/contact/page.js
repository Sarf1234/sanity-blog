

import React from 'react';

export const metadata = {
  title: "Contact Us | LoveVerse",
  description:
    "Get in touch with the LoveVerse team for inquiries, feedback, or collaborations. We're here to help and connect with you emotionally.",
  keywords: [
    "contact LoveVerse",
    "love blog support",
    "emotional story contact",
    "relationship support",
    "talk to LoveVerse",
    "connect with love blog team",
  ],
  openGraph: {
    title: "Contact LoveVerse | Reach Out Today",
    description:
      "Have a question or want to connect? Use our contact page to reach the LoveVerse team for support, collaboration, or just to say hello.",
    url: "https://yourdomain.com/contact", // Replace with actual domain
    siteName: "LoveVerse",
    images: [
      {
        url: "https://yourdomain.com/og-contact.jpg", // Optional: update OG image
        width: 1200,
        height: 630,
        alt: "Contact LoveVerse",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact LoveVerse",
    description:
      "Reach out to the team behind LoveVerse — your emotional blog and quote platform. Let’s connect!",
    images: ["https://yourdomain.com/twitter-contact.jpg"], // Optional
  },
};


const ContactPage = () => {
  return (
    <section className="min-h-screen bg-[#fefce8] pt-20 px-4 py-16 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-lg p-6 sm:p-12">
        {/* Left Side - Form */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-[#3f3f3f]">Get In Touch</h2>
          <p className="text-gray-600 mb-6">Have a question, suggestion, or just want to say hello? We’d love to hear from you!</p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#dec187]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#dec187]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
              <textarea
                placeholder="Type your message here..."
                rows={5}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#dec187]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#dec187] to-[#c8a96a] text-black font-semibold px-6 py-2 rounded-md shadow hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Info */}
        <div className="bg-[#fefae0] p-6 rounded-lg flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4 text-[#3f3f3f]">Contact Information</h3>
          <p className="text-gray-700 mb-4">
            <strong>Email:</strong>{" "}
            <a href="mailto:connect@loveconnect.com" className="hover:underline text-[#c8a96a]">
              connect@loveconnect.com
            </a>
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Phone:</strong>{" "}
            <a href="tel:+919876543210" className="hover:underline text-[#c8a96a]">
              +91 98765 43210
            </a>
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Location:</strong> Mumbai, Maharashtra, India
          </p>
          <p className="text-sm text-gray-500 italic">
            We're here for you Monday to Saturday, 9:00 AM – 6:00 PM.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
