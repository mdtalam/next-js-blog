"use client"
import Link from "next/link";
// components/Header.js

import { useState } from "react";


const Header = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false); // Replace with actual auth logic
  const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const router = useRouter();

//   const handleLogin = () => {
//     // Implement your login logic
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     // Implement your logout logic
//     setIsAuthenticated(false);
//     router.push("/");
//   };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-lg font-bold">
          <Link href="/" className="hover:text-teal-400">
          My Blog
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-lg font-semibold hover:text-teal-400">
          Home
          </Link>
          <Link href="/profile" className="text-lg font-semibold hover:text-teal-400">
          Profile
          </Link>
         
            <button
            //   onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600"
            >
              Logout
            </button>
      
            <button
            //   onClick={handleLogin}
              className="bg-teal-500 px-4 py-2 rounded text-white hover:bg-teal-600"
            >
              Login
            </button>
         
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
          <div className="absolute top-16 left-0 w-full bg-gray-800 shadow-lg md:hidden">
            <nav className="flex flex-col items-center space-y-4 py-4">
              <Link href="/" onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-semibold hover:text-teal-400">
                Home
              </Link>
              <Link href="/profile" onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-semibold hover:text-teal-400">
                Profile
              </Link>
 
                <button
                //   onClick={() => {
                //     handleLogout();
                //     setIsMenuOpen(false);
                //   }}
                  className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600"
                >
                  Logout
                </button>

                <button
                //   onClick={() => {
                //     handleLogin();
                //     setIsMenuOpen(false);
                //   }}
                  className="bg-teal-500 px-4 py-2 rounded text-white hover:bg-teal-600"
                >
                  Login
                </button>

            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
