import { Bebas_Neue } from "next/font/google";
import Link from "next/link";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"], // Add subsets if necessary
  weight: "400", // Adjust weight if needed
  variable: "--font-bebas-neue", // Optional: define a CSS variable for the font
});

export default function Navbar() {
  return (
    <div className="fixed w-screen z-50 bg-gray-100 ">
      <header className="text-blue-600 p-4 ">
        <nav className="container mx-auto flex justify-between">
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
            <div className="flex font-bold text-cyan-500 text-xl mt-6">
                . . . Kuch Naya
            </div>
          </div>
          <ul className="flex space-x-8 font-bold">
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
      </header>
    </div>
  );
}
