import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import FooterSection from "@/components/Footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
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
      <body className="antialiased bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <ThemeProvider>
          <Header />
          {children}
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
