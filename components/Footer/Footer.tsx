import React from "react";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter, FaSquareGithub } from "react-icons/fa6";

const FooterSection = () => {
  const links = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "Projects", href: "/projects" },
    { id: 3, label: "About", href: "/about" },
    { id: 4, label: "Skill", href: "/skill" },
    { id: 5, label: "Contact", href: "/contact" },
  ];

  return (
    <footer>
      <div className="py-16 md:py-20">
        <div className="flex gap-4 items-center justify-center">
          <Link
            href={"https://www.linkedin.com/in/toufiq-gilani-rabbu/"}
            target="_blank"
            className="p-2 rounded-full border transition-all hover:scale-95"
          >
            <FaLinkedin className="text-2xl" />
          </Link>
          <Link
            href={"https://www.facebook.com/GilaniRabbu"}
            target="_blank"
            className="p-2 rounded-full border transition-all hover:scale-95"
          >
            <FaFacebookSquare className="text-2xl" />
          </Link>
          <Link
            href={"https://x.com/GilaniRabbu"}
            target="_blank"
            className="p-2 rounded-full border transition-all hover:scale-95"
          >
            <FaSquareXTwitter className="text-2xl" />
          </Link>
          <Link
            href={"https://github.com/GilaniRabbu"}
            target="_blank"
            className="p-2 rounded-full border transition-all hover:scale-95"
          >
            <FaSquareGithub className="text-2xl" />
          </Link>
        </div>
        <div className="my-8 w-full border-b border-white/20"></div>
        <div className="mb-8 md:mb-5 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-5">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="cursor-pointer text-2xl font-bonny-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-center text-sm inter-400 text-white/40">
          © 2024 Gilani Rabbu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
