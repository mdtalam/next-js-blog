"use client";
import useUser from "@/hooks/useUser";
import Link from "next/link";
// components/Header.js

import { useState } from "react";

const Header = () => {
  const { user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" >
            My Blog
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-lg font-semibold hover:text-teal-400">
            Home
          </Link>
          <Link
            href="/profile"
            className="text-lg font-semibold hover:text-teal-400"
          >
            Profile
          </Link>

          {user ? (
            <>
              <Link
                href="/api/auth/logout"
                className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600"
              >
                Log Out
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/api/auth/login"
                className="bg-teal-500 px-4 py-2 rounded text-white hover:bg-teal-600"
              >
                Login
              </Link>

              <Link
                href="/api/auth/register"
                className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600"
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 z-10 left-0 w-full bg-gray-800 shadow-lg md:hidden">
            <nav className="flex flex-col items-center space-y-4 py-4">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-semibold hover:text-teal-400"
              >
                Home
              </Link>
              <Link
                href="/profile"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-semibold hover:text-teal-400"
              >
                Profile
              </Link>

              {user ? (
                <><Link
                href="/api/auth/logout"
                className="bg-red-500 px-4 py-2 rounded text-white hover:bg-teal-600"
              >
                Log Out
              </Link></>
              ) : (
                <>
                  <Link
                    href="/api/auth/login"
                    className="bg-teal-500 px-4 py-2 rounded text-white hover:bg-teal-600"
                  >
                    Login
                  </Link>
                  <Link
                    href="/api/auth/register"
                    className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
