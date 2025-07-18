"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { MdClose, MdMenu } from "react-icons/md";

const navItems = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#brand-values", label: "Brand Values" },
  { href: "#construction", label: "Construction" },
  { href: "#what-we-do", label: "What We Do" },
  { href: "#mockup", label: "Mock Up" },
  { href: "#crafting", label: "Crafting" },
  { href: "#contact", label: "Contact" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-slate-50 shadow-md z-50">
      <div className="container mx-auto py-4 flex justify-between items-center ">
        <h2 className=" text-gray-300 text-2xl">logo</h2>

        <div className="relative" ref={menuRef}>
          <button
            className="text-3xl text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <MdClose /> : <MdMenu />}
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
