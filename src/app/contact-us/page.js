import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b pt-28 from-pink-50 via-rose-50 to-white px-4 md:px-12 py-12">
      <main className="container mx-auto max-w-5xl space-y-12">
        {/* Heading */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-rose-600">
            Let’s Stay Connected
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Have a story to share? A thought, a question, or maybe just a kind
            word? We’d love to hear from you. At{" "}
            <span className="font-semibold text-rose-500">TrueFeelings</span>,
            every connection matters.
          </p>
        </section>

        {/* Contact Details */}
        <section className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-rose-600">
              Reach Out to Us
            </h2>
            <p className="text-base text-gray-700">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:contact@truefeelings.in"
                className="text-rose-600 hover:underline"
              >
                contact@truefeelings.in
              </a>
            </p>
            {/* <p className="text-base text-gray-700">
              <strong>Phone:</strong>{" "}
              <span className="text-rose-600">+91-XXXXXXXXXX</span>
            </p> */}
            <p className="text-base text-gray-700">
              <strong>Address:</strong> TrueFeelings HQ, New Delhi, India
            </p>
            <p className="text-base text-gray-700">
              We’re available Monday to Friday, 9 AM – 6 PM IST.
            </p>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold text-rose-600 mb-3">
                Connect With Us
              </h3>
              <div className="flex space-x-4">
                <Link
                  href="https://www.facebook.com"
                  target="_blank"
                  className="text-rose-600 hover:text-rose-800 transition"
                >
                  <Facebook size={26} />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="text-rose-600 hover:text-rose-800 transition"
                >
                  <Twitter size={26} />
                </Link>
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  className="text-rose-600 hover:text-rose-800 transition"
                >
                  <Instagram size={26} />
                </Link>
                <Link
                  href="https://www.youtube.com"
                  target="_blank"
                  className="text-rose-600 hover:text-rose-800 transition"
                >
                  <Youtube size={26} />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 border border-rose-100">
            <h2 className="text-2xl font-semibold text-rose-600 mb-4">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                required
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-[#fefce8] text-black rounded-lg font-medium hover:bg-rose-700 transition transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Small Note */}
        <section className="text-center pt-6">
          <p className="text-sm text-gray-600">
            💌 We respect your privacy. Your messages are safe with us.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Contact;
