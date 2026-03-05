import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Exclusive Ceylon | Luxury Travel",
  description: "Experience the timeless beauty of Ceylon with our curated luxury travels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-50 selection:bg-stone-800 selection:text-stone-50 dark:selection:bg-stone-200 dark:selection:text-stone-900`}>
        {children}
      </body>
    </html>
  );
}
