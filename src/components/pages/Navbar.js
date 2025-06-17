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
      className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-white shadow-md shadow-slate-200 py-2" : "bg-white py-8"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-xl font-bold text-slate-800 transition-colors duration-300">
          Logo
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex justify-center items-center space-x-10 text-sm font-bold">
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
                  className={`transition-colors duration-300 ${
                    isActive(href)
                      ? "text-indigo-600"
                      : "text-slate-800 hover:text-indigo-600"
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
          <Search
            className="w-6 h-6 cursor-pointer text-slate-800"
            onClick={() => setIsSearchOpen(true)}
          />
          <Menu
            className="w-6 h-6 cursor-pointer text-slate-800"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </div>

      {/* Mobile Search */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-4 animate-slide-in-left">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-bold text-slate-800">Search</div>
            <X
              className="w-6 h-6 cursor-pointer text-slate-800"
              onClick={() => setIsSearchOpen(false)}
            />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 ring-indigo-400 shadow-sm"
          />
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-4 animate-slide-in-right">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-bold text-slate-800">Logo</div>
            <X
              className="w-6 h-6 cursor-pointer text-slate-800"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
          <hr className="shadow-md shadow-slate-200" />
          <nav className="flex flex-col w-full">
            {menuItems.map((item) => {
              const href = item.isExternal
                ? item.slug
                : `/${item.slug?.current || item.slug}`;
              return (
                <Link
                  key={item._id}
                  href={href}
                  className="border-b py-2 hover:bg-indigo-100 px-2 rounded-md transition-colors"
                  onClick={handleLinkClick}
                  target={item.isExternal ? "_blank" : "_self"}
                >
                  <span
                    className={`transition-colors duration-300 ${
                      isActive(href)
                        ? "text-indigo-600"
                        : "text-slate-800 hover:text-indigo-600"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="flex justify-center space-x-6 mt-6">
            <Facebook className="w-6 h-6 text-indigo-600 hover:text-indigo-500 cursor-pointer" />
            <Twitter className="w-6 h-6 text-indigo-600 hover:text-indigo-500 cursor-pointer" />
            <Instagram className="w-6 h-6 text-indigo-600 hover:text-indigo-500 cursor-pointer" />
            <Youtube className="w-6 h-6 text-indigo-600 hover:text-indigo-500 cursor-pointer" />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-in-left {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes slide-in-right {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
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
