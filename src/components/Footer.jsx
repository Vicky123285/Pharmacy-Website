import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-12 mt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo & About */}
        <div>
          <h2 className="text-3xl font-extrabold">Glow&Fit</h2>
          <p className="text-sm mt-2 opacity-90">
            Your ultimate destination for beauty and fitness essentials.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-lg">
            {["Home", "Products", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase()}`} className="hover:text-yellow-300 transition duration-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-6 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="text-white hover:text-blue-500 transition duration-300" size={28} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="text-white hover:text-blue-400 transition duration-300" size={28} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="text-white hover:text-pink-400 transition duration-300" size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-8 border-t border-white/30 pt-4 opacity-80">
        &copy; {new Date().getFullYear()} Glow&Fit. All Rights Reserved.
      </div>
    </footer>
  );
}
