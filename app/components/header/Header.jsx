"use client";
import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FaBars } from "react-icons/fa";
import ThemeToggle from "../component/ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "About", "Services", "Contact", "Blog"];

  return (
    <header className="shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bol">MySite</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Theme Toggle */}
        <div className="flex items-center space-x-4">
          <ThemeToggle/>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            <FaBars className="text-xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden mt-4 p-4 rounded-lg space-y-2">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="block hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
