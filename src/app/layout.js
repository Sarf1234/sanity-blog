import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../hooks/ThemeContext";
import Footer from "@/components/pages/Footer";
import Navbar from "@/components/pages/Navbar";
import { GoogleTagManager } from '@next/third-parties/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://yourdomain.com"; // Replace with your production URL
const siteName = "LoveVerse Blog";
const description = "Explore deep love stories, relationship advice, and emotional journeys — curated just for you.";

export const metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "love blog",
    "relationship tips",
    "romantic stories",
    "dating advice",
    "emotional connection",
  ],
  authors: [{ name: "LoveVerse Team", url: siteUrl }],
  openGraph: {
    title: siteName,
    description,
    url: siteUrl,
    siteName,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "LoveVerse Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    creator: "@yourhandle", // Optional
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || "GTM-KL3PXFC4"} />
          <ThemeProvider>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
      </body>
    </html>
  );
}
