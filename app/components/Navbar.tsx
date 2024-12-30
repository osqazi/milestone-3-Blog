import { Bebas_Neue } from "next/font/google";

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
            <div className={`text-5xl font-bold ${bebasNeue.className}`}>
              META
            </div>
            <div
              className={`text-5xl font-bold text-white lowercase border-white ${bebasNeue.className}`}
              style={{
                WebkitTextStroke: "1px black",
              }}
            >
              Log
            </div>
            <div className="flex items-end font-bold text-cyan-500 text-xl">
                . . . Kuch Naya
            </div>
          </div>
          <ul className="flex space-x-4">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
