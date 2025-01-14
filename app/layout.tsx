import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "MetaLog - The Ultimate Blog for IT Enthusiasts",
  description:
    "MetaLog: Explore comprehensive content on programming, styling, deployment tools, and software knowledge. Stay ahead with our expert articles.",
  keywords: [
    "programming",
    "CSS",
    "deployment",
    "software",
    "IT knowledge",
    "blog",
    "MetaLog",
  ],
  openGraph: {
    title: "MetaLog - The Ultimate Blog for IT Enthusiasts",
    description:
      "MetaLog: Explore comprehensive content on programming, styling, deployment tools, and software knowledge. Stay ahead with our expert articles.",
    url: "https://owais-qazi.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@osqazi", // Based on the provided Twitter (X) handle
    title: "MetaLog - The Ultimate Blog for IT Enthusiasts",
    description:
      "Explore MetaLog for expert insights on programming, styling, and software deployment.",
    
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Owais Qazi" /> {/* Author meta tag */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
        />
        <link rel="icon" href="/favicon.ico" /> {/* Add your favicon */}
        <link rel="canonical" href="https://owais-qazi.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "MetaLog",
              "url": "https://owais-qazi.vercel.app",
              "description":
                "MetaLog: Explore comprehensive content on programming, styling, deployment tools, and software knowledge.",
              "sameAs": [
                "https://www.facebook.com/osqazi",
                "https://www.instagram.com/osqazi.khatri",
                "https://x.com/osqazi",
                "https://www.linkedin.com/in/owais-qazi/",
                "https://wa.me/+923353221003",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-gray-100 min-h-screen">
        <Navbar />
        <main className="pt-32">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
