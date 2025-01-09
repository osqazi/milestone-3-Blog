"use client"
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"], // Add subsets if necessary
  weight: "400", // Adjust weight if needed
  variable: "--font-bebas-neue", // Optional: define a CSS variable for the font
});

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed w-screen z-50 bg-gray-100">
      <header className="text-blue-600 p-1">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-2">
            <div className={`text-6xl font-bold ${bebasNeue.className}`}>
              META
            </div>
            <div
              className={`text-6xl font-bold text-white lowercase border-white ${bebasNeue.className}`}
              style={{
                WebkitTextStroke: "1px blue",
              }}
            >
              Log
            </div>
            <div className=" font-bold text-cyan-500 text-xl mt-6">
              . . . Kuch Naya
            </div>
          </div>
          {/* Hamburger menu button */}
          <button
            className="block md:hidden text-blue-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`fa-solid ${menuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
          </button>
          {/* Links for larger screens */}
          <ul
            className={`hidden md:flex space-x-8 font-bold`}
          >
            <li>
              <Link href="/">
                <div className="flex gap-1 text-end">
                  <i className="fa-solid fa-house"></i>
                  <p>Home</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <div className="flex gap-1 text-end">
                  <i className="fa-solid fa-person-chalkboard"></i>
                  <p>About</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <div className="flex gap-1 text-end">
                  <i className="fa-solid fa-address-book"></i>
                  <p>Contact</p>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
        {/* Dropdown menu for mobile */}
        <div
          className={`md:hidden bg-gray-100 p-4 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="space-y-4 font-bold">
            <li>
              <Link href="/">
                <div className="flex gap-1 text-end">
                  <i className="fa-solid fa-house"></i>
                  <p>Home</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <div className="flex gap-1 text-end">
                  <i className="fa-solid fa-person-chalkboard"></i>
                  <p>About</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <div className="flex gap-1 text-end">
                  <i className="fa-solid fa-address-book"></i>
                  <p>Contact</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <div className="text-center font-bold italic lg:text-2xl md:text-xl text-lg bg-gray-200 text-white py-1" style={{
                WebkitTextStroke: "1px black",
              }}>
         - - - Sirf Kam ki Knowledge. No Bakwaas - - -
      </div>
    </div>
  );
}
