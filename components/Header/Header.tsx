"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";

const hamburgerLine = `h-1 w-6 my-[2px] rounded-full bg-white transition ease transform duration-300`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { name: "Twitter", href: "#", icon: <FaGithub /> },
    { name: "Dribbble", href: "#", icon: <FaLinkedinIn /> },
    { name: "LinkedIn", href: "#", icon: <FaXTwitter /> },
  ];

  return (
    <header
      className={`fixed top-0 left-0 inter-700 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-purple-900 dark:bg-blue-900" : "bg-transparent"
      }`}
    >
      <div className="container px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0 z-10">
            <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          </Link>

          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group text-black dark:text-white hover:text-blue-300 transition-colors duration-200"
              >
                {item.name}
                <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            {socialIcons.map((icon) => (
              <a
                key={icon.name}
                href={icon.href}
                className="p-2 border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-full transition-all duration-200"
              >
                <p className="text-xl flex justify-center items-center">
                  {icon.icon}
                </p>
              </a>
            ))}
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
        <div className="lg:hidden fixed inset-0 bg-purple-900 dark:bg-blue-900 z-0">
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
                  className="p-2 border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-full transition-all duration-200"
                >
                  <p className="text-xl flex justify-center items-center">
                    {icon.icon}
                  </p>
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
