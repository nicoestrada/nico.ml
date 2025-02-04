import type { Metadata } from "next";
import { Geist, Geist_Mono, Handjet } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const handjet = Handjet({
  subsets: ['latin'],
  variable: '--font-handjet',
});

export const metadata: Metadata = {
  title: "nico.ml | main",
  description: "nico.ml | description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${handjet.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
