import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "10Labs — Engineering solutions, empowering people.",
    template: "%s | 10Labs",
  },
  description:
    "10Labs membantu bisnis bergerak lebih cepat lewat arah teknologi, solusi, dan people enablement.",
  openGraph: {
    title: "10Labs — Engineering solutions, empowering people.",
    description:
      "10Labs membantu bisnis bergerak lebih cepat lewat arah teknologi, solusi, dan people enablement.",
    siteName: "10Labs",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="antialiased">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
