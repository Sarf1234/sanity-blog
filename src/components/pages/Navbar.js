"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import LogoMorph from "../ui/logoui";
import { client } from '../../sanity/lib/client'
import { menuQuery } from '@/lib/queries'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const router = usePathname();

  const isActive = (path) => router === path;

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    async function fetchMenu() {
      const data = await client.fetch(menuQuery);
      setMenuItems(data);
    }
    fetchMenu();
  }, []);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <div className="text-xl font-bold">Logo</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex justify-center items-center space-x-10 text-sm font-bold">
          {/* <div className="hidden md:flex items-center border rounded-lg px-4 py-2 shadow-sm focus-within:ring-2 ring-blue-500">
            <Search className="w-5 h-5 text-gray-500" />
            <input type="text" placeholder="Search..." className="w-full pl-3 outline-none text-sm" />
          </div> */}

          {menuItems.map(item => {
            const href = item.isExternal ? item.slug : `/${item.slug?.current || item.slug}`;
            return (
              <Link key={item._id} href={href} onClick={handleLinkClick} target={item.isExternal ? "_blank" : "_self"}>
                <span className={isActive(href) ? "text-blue-500" : "hover:text-blue-500 text-gray-700"}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="md:hidden flex items-center space-x-4">
          <Search className="w-6 h-6 cursor-pointer" onClick={() => setIsSearchOpen(true)} />
          <Menu className="w-6 h-6 cursor-pointer" onClick={() => setIsMenuOpen(true)} />
        </div>
      </div>

      {/* Mobile Search */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-4 transition-transform transform translate-x-0 animate-slide-in-left">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-bold">Search</div>
            <X className="w-6 h-6 cursor-pointer" onClick={() => setIsSearchOpen(false)} />
          </div>
          <input type="text" placeholder="Search..." className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 ring-blue-500 shadow-md" />
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-4 transition-transform transform translate-y-0 animate-slide-in-right">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-bold">Logo</div>
            <X className="w-6 h-6 cursor-pointer" onClick={() => setIsMenuOpen(false)} />
          </div>
          <hr className="shadow-md" />
          <nav className="flex justify-center flex-col w-full">
            {menuItems.map(item => {
              const href = item.isExternal ? item.slug : `/${item.slug?.current || item.slug}`;
              return (
                <Link key={item._id} href={href} className="border-b py-2" onClick={handleLinkClick} target={item.isExternal ? "_blank" : "_self"}>
                  <span className={isActive(href) ? "text-blue-500" : "hover:text-blue-500 text-gray-700"}>
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="flex justify-center space-x-6 mt-6">
            <Facebook className="w-6 h-6 text-blue-700 hover:text-blue-600 cursor-pointer" />
            <Twitter className="w-6 h-6 text-blue-700 hover:text-blue-400 cursor-pointer" />
            <Instagram className="w-6 h-6 text-pink-700 hover:text-pink-600 cursor-pointer" />
            <Youtube className="w-6 h-6 text-red-700 hover:text-red-600 cursor-pointer" />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-in-left {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(0); }
        }
        @keyframes slide-in-right {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
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
