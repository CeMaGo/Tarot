import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tarot Card Reader", // Update title
  description: "A mystical Tarot card reading application.", // Update description
  viewport: {
    width: "device-width",
    initialScale: 1.0,
  },
  openGraph: {
    title: "Tarot Card Reader",
    description: "A mystical Tarot card reading application.",
    url: "YOUR_URL", // Replace with your actual URL
    siteName: "Tarot Reader",
    type: "website",
    // images: [{ url: '/og-image.png' }] // Add an image if you have one
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
