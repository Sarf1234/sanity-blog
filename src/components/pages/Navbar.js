"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Search,
  X,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { client } from "../../sanity/lib/client";
import { menuQuery } from "@/lib/queries";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;
  const handleLinkClick = () => setIsMenuOpen(false);

  useEffect(() => {
    async function fetchMenu() {
      const data = await client.fetch(menuQuery);
      setMenuItems(data);
    }
    fetchMenu();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-white/90 shadow-md py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link href="/"> <div className="text-2xl font-bold text-plum">LoveVerse</div></Link>
       

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold">
          {menuItems.map((item) => {
            const href = item.isExternal
              ? item.slug
              : `/${item.slug?.current || item.slug}`;

            return (
              <Link
                key={item._id}
                href={href}
                target={item.isExternal ? "_blank" : "_self"}
                onClick={handleLinkClick}
              >
                <span
                  className={`transition-all duration-200 px-2 py-1 rounded ${
                    isActive(href)
                      ? "text-rose border-b-2 border-rose"
                      : scrolled
                        ? "text-gray-700 hover:text-plum"
                        : "text-white hover:text-rose hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center space-x-4">
          {/* <Search
            className="w-6 h-6 cursor-pointer text-softGray"
            onClick={() => setIsSearchOpen(true)}
          /> */}
          <Menu
             className={`w-8 h-8 cursor-pointer ${
           scrolled
                    ? "text-gray-700 hover:text-plum"
                  : "text-white hover:text-rose hover:bg-white/10"
           }`}
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col p-4 animate-slide-in-left">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-bold text-plum">Search</div>
            <X
              className="w-6 h-6 cursor-pointer text-softGray"
              onClick={() => setIsSearchOpen(false)}
            />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-softGray rounded-lg px-4 py-2 outline-none focus:ring-2 ring-rose"
          />
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] h-screen backdrop-blur-lg bg-white flex flex-col px-6 py-4 animate-slide-in-right">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-bold text-plum">LoveVerse</div>
            <X
              className="w-6 h-6 cursor-pointer text-softGray"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
          <hr className="my-2 border-blush" />
          <nav className="flex flex-col w-full space-y-2 font-semibold text-base">
            {menuItems.map((item) => {
              const href = item.isExternal
                ? item.slug
                : `/${item.slug?.current || item.slug}`;
              return (
                <Link
                  key={item._id}
                  href={href}
                  onClick={handleLinkClick}
                  target={item.isExternal ? "_blank" : "_self"}
                >
                  <span
                    className={`block px-4 py-2 rounded-md transition-all ${
                      isActive(href)
                        ? "bg-peach text-rose"
                        : "text-plum hover:bg-blush hover:text-rose"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="flex justify-center space-x-6 mt-6">
            <Facebook className="w-6 h-6 text-rose hover:text-plum cursor-pointer" />
            <Twitter className="w-6 h-6 text-rose hover:text-plum cursor-pointer" />
            <Instagram className="w-6 h-6 text-rose hover:text-plum cursor-pointer" />
            <Youtube className="w-6 h-6 text-rose hover:text-plum cursor-pointer" />
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes slide-in-left {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0%);
          }
        }

        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0%);
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.3s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
