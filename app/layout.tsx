import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Courier_Prime,
  Geist,
  Geist_Mono,
  Great_Vibes,
  Inter,
  Poppins,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const signatureFont = Great_Vibes({
  weight: "400",
  variable: "--font-signature",
  subsets: ["latin"],
});

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sari Kusumaningrum | Global Strategic Connector",
  description: "Connecting brands, governments, and global opportunities through strategic communication, diplomacy, and hospitality leadership.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${signatureFont.variable} ${interFont.variable} ${cormorantGaramond.variable} ${courierPrime.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
