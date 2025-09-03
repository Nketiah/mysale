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
  title: "The Inara Wellness Day - The Return to Self | October 9, 2029",
  description: "Join us for a deeply restorative, one-day bliss experience where healing meets beauty, community meets stillness, and every moment is designed to help you return to yourself gently.",
  keywords: "wellness, meditation, pilates, art therapy, brunch, Minneapolis, self-care, healing",
  authors: [{ name: "Inara Wellness" }],
  openGraph: {
    title: "The Inara Wellness Day - The Return to Self",
    description: "A deeply restorative, one-day bliss experience where healing meets beauty and community meets stillness.",
    type: "website",
    locale: "en_US",
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#c4b5a0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
