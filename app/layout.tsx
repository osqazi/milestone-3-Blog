import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "MetaLog - Kuch Naya",
  description: "Metalog: The Leading blog website for Programming, Styling, Deployment Programs/softwares Knowledge. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"></link>
        <Navbar />
        <div className="pt-32">
        {children}
        <Footer/>
        </div>
      </body>
    </html>
  );
}
