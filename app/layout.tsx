import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "W3force - AI-Powered Personal Finance",
  description: "Simple, AI-powered tools for retirement planning, budgeting, and investment tracking. Take control of your financial future—no finance degree needed.",
  keywords: ["retirement planning", "budget calculator", "investment tracking", "personal finance", "financial planning", "401k calculator", "AI finance"],
  authors: [{ name: "W3force" }],
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: "W3force - AI-Powered Personal Finance Made Simple",
    description: "Tools that help you understand your money, plan smarter, and build wealth—no finance degree needed.",
    type: "website",
    siteName: "W3force",
    url: "https://w3force-company.vercel.app",
    locale: "en_US",
    images: [
      {
        url: "/nestly/screenshot-1-home.png",
        width: 1200,
        height: 630,
        alt: "W3force - AI-Powered Personal Finance Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "W3force - AI-Powered Personal Finance Made Simple",
    description: "Tools that help you understand your money, plan smarter, and build wealth—no finance degree needed.",
    images: ["/nestly/screenshot-1-home.png"],
    creator: "@w3force",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
