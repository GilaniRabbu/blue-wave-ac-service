import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import FooterSection from "@/components/Footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio of Gilani Rabbu",
  description: "A Portfolio Website for Developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-900 text-gray-100">
        <Header />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
