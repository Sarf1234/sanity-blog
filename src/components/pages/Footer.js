import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Private Jobs", href: "/jobs/private" },
    { name: "Government Jobs", href: "/jobs/government" },
    { name: "Company List", href: "/companies" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & About Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4">JobFinder</h3>
            <p className="text-gray-400">
              Your trusted source for the best job opportunities. Helping you
              build your career one step at a time.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              <Link
                href="https://facebook.com"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Facebook className="w-6 h-6" />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Twitter className="w-6 h-6" />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Instagram className="w-6 h-6" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
            <p className="text-gray-400">
              Email:{" "}
              <Link href="mailto:support@jobfinder.com" className="hover:text-white">
                support@jobfinder.com
              </Link>
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          © 2025 JobFinder. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
