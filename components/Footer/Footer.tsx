import React from "react";
import Link from "next/link";
import { SiGmail } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareGithub } from "react-icons/fa6";

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
      <div className="container py-16 md:py-20">
        <div className="flex flex-col md:flex-row gap-4 md:justify-between items-center">
          <h2 className="font-bold text-3xl md:text-5xl text-center md:text-left w-full max-w-xl">
            MD. TOUFIQ GILANI RABBU
          </h2>
          <div className="mt-8 md:mt-0">
            <p className="mb-4 text-center md:text-right text-sm sm:text-base">
              9/1 South Khilgaon, Dhaka - 1219, BanglaDesh
            </p>
            <div className="mb-4 flex gap-4 items-center justify-center md:justify-end">
              <Link
                href={"mailto:toufiqjilanirabbu7@gmail.com"}
                title="toufiqjilanirabbu7@gmail.com"
                target="_blank"
              >
                <SiGmail className="text-2xl" />
              </Link>
              <Link
                href={"https://www.facebook.com/GilaniRabbu"}
                target="_blank"
              >
                <FaFacebookSquare className="text-2xl" />
              </Link>
              <Link href={"https://x.com/GilaniRabbu"} target="_blank">
                <FaSquareXTwitter className="text-2xl" />
              </Link>
              <Link href={"https://github.com/GilaniRabbu"} target="_blank">
                <FaSquareGithub className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="my-10 w-full border-b border-white/20"></div>
        <div className="flex flex-col md:flex-row gap-8 md:justify-between items-center text-sm md:text-base">
          <p className="text-white/40">© 2024. All rights reserved.</p>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-5">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="font-semibold cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
