import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import Header from "@/components/Header/Header";
import FooterSection from "@/components/Footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

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
      <body
        className={`antialiased ${playfair.className} bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100`}
      >
        <ThemeProvider>
          <Header />
          {children}
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
