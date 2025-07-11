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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="personal finance, investing, budgeting, saving, side hustles, debt management, 360revenue" />
        <meta name="author" content="360revenue" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="360revenue - Personal Finance & Earning Guides" />
        <meta property="og:description" content="Discover the best ways to earn money online, manage your finances, and achieve financial freedom with 360revenue." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.360revenue.com/" />
        <meta property="og:image" content="/360revenue-og-image.png" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="360revenue - Personal Finance & Earning Guides" />
        <meta name="twitter:description" content="Discover the best ways to earn money online, manage your finances, and achieve financial freedom with 360revenue." />
        <meta name="twitter:image" content="/360revenue-og-image.png" />
        <meta name="google-site-verification" content="vfheNm_yHRTOvHCN8dojFDINR065LJD9OakAcdQQLJs" />
        <meta name="google-adsense-account" content="ca-pub-7426456118888851" />
         {/* Global AdSense script */}
       <script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7426456118888851"
  crossOrigin="anonymous"
></script>

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
