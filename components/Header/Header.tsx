"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Theme from "./Theme";
// import { useTheme } from "@/context/ThemeContext";

const hamburgerLine = `h-1 w-6 my-[2px] rounded-full bg-white transition ease transform duration-300`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolios", href: "/portfolios" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const socialIcons = [
    { name: "Twitter", href: "#", icon: "/github.svg" },
    { name: "Dribbble", href: "#", icon: "/linkedin.svg" },
    { name: "LinkedIn", href: "#", icon: "/twitter.svg" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 inter-700 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-purple-900 dark:bg-gray-900" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0 z-10">
            <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          </Link>

          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-white hover:text-purple-300 transition-colors duration-200 ${
                  pathname === item.href ? "border-b-2 border-purple-500" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            {socialIcons.map((icon) => (
              <a
                key={icon.name}
                href={icon.href}
                className="text-white hover:bg-white hover:text-purple-900 rounded-full p-2 transition-colors duration-200"
              >
                <Image src={icon.icon} alt={icon.name} width={20} height={20} />
              </a>
            ))}

            {/* <button
              onClick={toggleTheme}
              className="text-white hover:bg-white hover:text-purple-900 dark:hover:bg-gray-700 dark:hover:text-white rounded-full p-2 transition-colors duration-200"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button> */}
          </div>
          <div className="relative">
            <Theme />
          </div>

          <button
            className="lg:hidden flex flex-col h-12 w-12 justify-center items-center group z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div
              className={`${hamburgerLine} ${
                isMobileMenuOpen ? "rotate-45 translate-y-[8px]" : ""
              }`}
            />
            <div
              className={`${hamburgerLine} ${
                isMobileMenuOpen
                  ? "opacity-0"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${hamburgerLine} ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-purple-900 z-0">
          <div className="flex flex-col space-y-10 h-full px-2 pt-24">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-center text-white text-2xl font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex justify-center space-x-5 mt-8">
              {socialIcons.map((icon) => (
                <a
                  key={icon.name}
                  href={icon.href}
                  className="text-white hover:bg-white hover:text-purple-900 rounded-full p-2 transition-colors duration-200"
                >
                  <Image
                    src={icon.icon}
                    alt={icon.name}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
