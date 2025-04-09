"use client"

import { useState } from "react"
import { RiMenuLine, RiCloseLine } from "react-icons/ri"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full bg-blue-900 sticky top-0  z-10 text-white">
      <header className="max-w-7xl mx-auto px-5 lg:px-0 flex py-3 lg:py-3 items-center justify-between ">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">AC</div>
          <span className="font-medium">Ac Service</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-16">
          <a href="#home" className="font-medium">Home</a>
          <a href="#about" className="font-medium">About</a>
          <a href="#services" className="font-medium">Services</a>
          <a href="#pricing" className="font-medium">Pricing</a>
        </nav>

        <div className="lg:flex gap-3 hidden items-center">
          <a
            href="#contact"
            className="flex items-center rounded-full border-primary text-primary px-6 py-2.5 text-sm font-medium text-primary border border-white bg-white/90"
          >
            <span>Contact Us</span>
            <div className="w-5 h-5 ml-2 rounded-full border border-primary flex items-center justify-center">
              <span className="sr-only">Arrow right</span>
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
            </div>
          </a>
          <a
            href="#contact"
            className="flex items-center rounded-full px-6 py-2.5 text-sm font-medium bg-blue-500 text-white hover:bg-blue-600"
          >
            <span>Book Online</span>
            <div className="w-5 h-5 ml-2 rounded-full border border-white flex items-center justify-center">
              <span className="sr-only">Arrow right</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </div>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(true)} className="lg:hidden cursor-pointer">
          <RiMenuLine size={28} />
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white p-6 transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"
            } lg:hidden z-[60] overflow-y-auto`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white cursor-pointer"
          >
            <RiCloseLine size={28} />
          </button>

          {/* Mobile Navigation Links */}
          <nav className="mt-12 flex flex-col gap-6 text-lg">
            <a href="#home" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>About</a>
            <a href="#services" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#pricing" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Pricing</a>
            <div className="flex flex-col gap-6">
              <a
                href="#contact"
                className="flex items-center rounded-full border-primary text-primary px-6 py-2.5 text-sm font-medium text-primary border border-white hover:bg-white/90"
              >
                <span>Contact Us</span>
                <div className="w-5 h-5 ml-2 rounded-full border border-primary flex items-center justify-center">
                  <span className="sr-only">Arrow right</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                </div>
              </a>
              <a
                href="#contact"
                className="flex items-center rounded-full px-6 py-2.5 text-sm font-medium bg-blue-500 text-white hover:bg-blue-600"
              >
                <span>Book Online</span>
                <div className="w-5 h-5 ml-4 rounded-full border border-white flex items-center justify-center">
                  <span className="sr-only">Arrow right</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>
              </a>
            </div>
          </nav>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-white/70 bg-opacity-10 backdrop-blur-sm lg:hidden z-[50]"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </header>
    </div>
  )
}
