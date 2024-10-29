import type { Metadata } from "next";
import { Inter, Rubik_Wet_Paint } from "next/font/google";
import FooterSection from "@/components/Footer/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const rubik = Rubik_Wet_Paint({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Portfolio of GilaniRabbu",
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
        className={`${inter.variable} ${rubik.variable} antialiased font-serif bg-gray-900 text-white`}
      >
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
