"use client";

import { menu } from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LinkNavbar from "./LinkNavbar";

const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const handleLinkClick = () => {
    setToggleDropdown(false);
  };

  return (
    <nav className="flex justify-between items-center w-full p-5">
      <div>
        <p className="font-bold text-xl">Bruno Pérez</p>
      </div>
      <div className="space-x-5 font-bold hidden md:flex">
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
      </div>

      <div className="md:hidden flex items-center">
        <Image
          src={menu}
          className="object-cover rounded-full"
          width={37}
          height={37}
          alt=""
          onClick={() => setToggleDropdown(!toggleDropdown)}
        />
        {toggleDropdown && (
          <div className="absolute top-16 right-0 bg-white shadow-lg rounded-lg p-5 flex flex-col text-center items-center z-10 w-full space-y-3">
            <LinkNavbar
              href="#about"
              name="About"
              onClick={handleLinkClick}
              className="bg-slate-200 w-full rounded-md hover:bg-slate-500"
            />
            <LinkNavbar
              href="#skills"
              name="Skills"
              onClick={handleLinkClick}
              className="bg-slate-200 w-full rounded-md hover:bg-slate-500"
            />
            <LinkNavbar
              href="#projects"
              name="Projects"
              onClick={handleLinkClick}
              className="bg-slate-200 w-full rounded-md hover:bg-slate-500"
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
