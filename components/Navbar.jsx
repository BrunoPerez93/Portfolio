"use client";

import { menu } from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LinkNavbar from "./LinkNavbar";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const handleLinkClick = () => {
    setToggleDropdown(false);
  };

  return (
    <nav className="flex justify-between items-center w-full p-5">
      <div>
        <p className="font-bold text-xl">Bruno Pérez</p>
      </div>
      <div className="space-x-5 font-bold hidden md:flex justify-center items-center">
        <LinkNavbar
          href="#about"
          name="About"
          className="hover:text-orange-600"
        />
        <LinkNavbar
          href="#skills"
          name="Skills"
          className="hover:text-orange-600"
        />
        <LinkNavbar
          href="#projects"
          name="Projects"
          className="hover:text-orange-600"
        />
        <Button variant="outline" size="icon" onClick={handleThemeToggle}>
          <Sun
            className={`h-[1.2rem] w-[1.2rem] transition-all ${
              theme === "dark" ? "rotate-0 scale-0" : "rotate-0 scale-100"
            }`}
          />
          <Moon
            className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
              theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
            }`}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

      <div className="md:hidden flex items-center">
        <Image
          src={menu}
          className="object-cover rounded-full bg-white"
          width={37}
          height={37}
          alt="icono"
          onClick={() => setToggleDropdown(!toggleDropdown)}
        />
        {toggleDropdown && (
          <div className="absolute top-16 right-0 bg-white shadow-lg rounded-lg p-5 flex flex-col text-center items-center z-10 w-full space-y-3">
            <LinkNavbar
              href="#about"
              name="About"
              onClick={handleLinkClick}
              className="bg-slate-400 w-full rounded-md hover:bg-slate-700"
            />
            <LinkNavbar
              href="#skills"
              name="Skills"
              onClick={handleLinkClick}
              className="bg-slate-400 w-full rounded-md hover:bg-slate-700"
            />
            <LinkNavbar
              href="#projects"
              name="Projects"
              onClick={handleLinkClick}
              className="bg-slate-400 w-full rounded-md hover:bg-slate-700"
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
