import type { Metadata } from "next";
import { Courier_Prime, Geist, Geist_Mono, Cormorant, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  subsets: ["latin"],
  weight: ["400", "700"]
})

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "700"]
})

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"]
})

export const metadata: Metadata = {
  title: "Sari Superconnector",
  description: "Sari Kusumaningrum - Superconnector",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${courierPrime.variable} ${cormorant.variable} ${poppins.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
