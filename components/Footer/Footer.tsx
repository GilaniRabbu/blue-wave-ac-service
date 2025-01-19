import React from "react";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter, FaSquareGithub } from "react-icons/fa6";

const FooterSection = () => {
  const links = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About", href: "/about" },
    { id: 3, label: "Projects", href: "/projects" },
    { id: 4, label: "Skill", href: "/skill" },
    { id: 5, label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="py-10 bg-indigo-200 dark:bg-indigo-900">
      <div className="flex gap-4 items-center justify-center">
        <Link
          href={"https://www.linkedin.com/in/toufiq-gilani-rabbu/"}
          target="_blank"
          className="p-2 rounded-full border border-black dark:border-white"
          aria-label="Visit Toufiq Gilani Rabbu's LinkedIn profile"
        >
          <FaLinkedin className="text-2xl" />
        </Link>
        <Link
          href={"https://www.facebook.com/GilaniRabbu"}
          target="_blank"
          className="p-2 rounded-full border border-black dark:border-white"
          aria-label="Visit Toufiq Gilani Rabbu's Facebook profile"
        >
          <FaFacebookSquare className="text-2xl" />
        </Link>
        <Link
          href={"https://x.com/GilaniRabbu"}
          target="_blank"
          className="p-2 rounded-full border border-black dark:border-white"
          aria-label="Visit Toufiq Gilani Rabbu's X profile"
        >
          <FaSquareXTwitter className="text-2xl" />
        </Link>
        <Link
          href={"https://github.com/GilaniRabbu"}
          target="_blank"
          className="p-2 rounded-full border border-black dark:border-white"
          aria-label="Visit Toufiq Gilani Rabbu's Github profile"
        >
          <FaSquareGithub className="text-2xl" />
        </Link>
      </div>
      <div className="my-8 w-full border-b border-black dark:border-white"></div>
      <div className="mb-8 flex flex-col md:flex-row justify-center items-center gap-5">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className="cursor-pointer text-2xl"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <p className="text-center text-sm px-5">
        © 2025 Gilani Rabbu. All Rights Reserved.
      </p>
    </footer>
  );
};

export default FooterSection;
