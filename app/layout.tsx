import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/ui/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.360revenue.in'),
  title: "360revenue - Personal Finance & Earning Money Online",
  description: "Discover proven strategies to earn money online, build wealth, and achieve financial freedom. Expert guides on investing, side hustles, budgeting, and personal finance.",
  keywords: "earn money online, personal finance, investing, budgeting, saving, side hustles, debt management, financial freedom, 360revenue",
  authors: [{ name: "Ritesh Panda", url: "https://www.360revenue.in" }],
  creator: "Ritesh Panda",
  publisher: "360revenue",
  robots: "index, follow",
  openGraph: {
    title: "360revenue - Personal Finance & Earning Money Online",
    description: "Discover proven strategies to earn money online, build wealth, and achieve financial freedom. Expert guides on investing, side hustles, budgeting, and personal finance.",
    url: "https://www.360revenue.in",
    siteName: "360revenue",
    images: [
      {
        url: "/360revenue-og-image.png",
        width: 1200,
        height: 630,
        alt: "360revenue - Personal Finance & Earning Money Online",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "360revenue - Personal Finance & Earning Money Online",
    description: "Discover proven strategies to earn money online, build wealth, and achieve financial freedom.",
    images: ["/360revenue-og-image.png"],
  },
  verification: {
    google: "vfheNm_yHRTOvHCN8dojFDINR065LJD9OakAcdQQLJs",
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-adsense-account" content="ca-pub-7426456118888851" />
        {/* Global AdSense script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7426456118888851"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
