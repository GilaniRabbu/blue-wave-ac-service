"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
  FaBarsStaggered,
} from "react-icons/fa6";

const Header = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const socialIcons = [
    { name: "Github", href: "#", icon: <FaGithub /> },
    { name: "LinkedinIn", href: "#", icon: <FaLinkedinIn /> },
    { name: "Twitter", href: "#", icon: <FaXTwitter /> },
  ];

  return (
    <header className="py-5 px-6 bg-indigo-200 dark:bg-indigo-900">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-shrink-0 z-10">
            <Image
              src="/profile.png"
              alt="Logo"
              className="rounded-full"
              width={40}
              height={40}
            />
          </Link>
          <nav className="hidden lg:flex space-x-5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group pb-1 text-black dark:text-white hover:text-sky-700 dark:hover:text-sky-300 transition-colors duration-200"
              >
                {item.name}
                <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-sky-700 dark:bg-sky-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out"></span>
              </Link>
            ))}
          </nav>
          <div className="hidden lg:flex space-x-5">
            {socialIcons.map((item) => (
              <Link key={item.name} href={item.href} className="text-xl">
                {item.icon}
              </Link>
            ))}
          </div>
          <p className="block lg:hidden text-3xl cursor-pointer">
            <FaBarsStaggered />
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
