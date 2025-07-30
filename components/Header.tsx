"use client";

import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SideMenu from "./SideMenu";
import { usePathname } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full bg-gradient-to-r from-gray-700 to-gray-900 sticky top-0 z-50 lg:bg-[#626568] backdrop-blur-md transition-opacity duration-300 ${
        isScrolled ? "opacity-85" : "opacity-100"
      }`}
    >
      <div
        className={`max-w-screen-2xl mx-auto w-full py-4 flex items-center justify-between px-4 md:px-6 lg:px-16`}
      >
        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden flex items-center mr-2 focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <MenuIcon className="text-white w-6 h-6" />
        </button>

        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <Image
            src={"/MainLogo.png"}
            alt="Nepal Motor Logo"
            width={40}
            height={40}
          />
          <span className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold ml-2 sm:ml-3">
            Nepal Motor
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-3 sm:space-x-4 md:space-x-9">
          <nav className="flex items-center space-x-2 sm:space-x-3 md:space-x-6">
            <Link
              href="/"
              className={`text-sm md:text-base font-semibold transition-colors ${
                pathname === "/"
                  ? "text-[#008080]"
                  : "text-white hover:text-[#008080]"
              }`}
            >
              Home
            </Link>
            <Link
              href="/sellcars"
              className={`text-sm md:text-base font-semibold transition-colors ${
                pathname === "/sellcars"
                  ? "text-[#008080]"
                  : "text-white hover:text-[#008080]"
              }`}
            >
              Sell Old Cars
            </Link>
            <Link
              href="/buy"
              className={`text-sm md:text-base font-semibold transition-colors ${
                pathname === "/buy"
                  ? "text-[#008080]"
                  : "text-white hover:text-[#008080]"
              }`}
            >
              Buy Old Cars
            </Link>

            {/* <Link
              href="/rent"
              className={`text-sm md:text-base font-semibold transition-colors ${
                pathname === '/rent' ? 'text-[#008080]' : 'text-white hover:text-[#008080]'
              }`}
            >
              Rent
            </Link> */}
            <Link
              href="/about"
              className={`text-sm md:text-base font-semibold transition-colors ${
                pathname === "/about"
                  ? "text-[#008080]"
                  : "text-white hover:text-[#008080]"
              }`}
            >
              About Us
            </Link>
          </nav>
          <Link
            href="/exchange"
            className="bg-gradient-to-r from-[#004D40] via-[#008080] to-[#00BCD4]  text-white px-3 sm:px-4 lg:ml-8 py-2 rounded-md text-sm md:text-base font-semibold hover:bg-[#93a17a] transition-colors whitespace-nowrap"
          >
            Exchange to EV
          </Link>
        </div>
        {/* this is only for test purpose */}

        {/* Mobile Menu */}
        <SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </header>
  );
};

export default Header;
