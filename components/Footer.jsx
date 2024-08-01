import React from "react";
import LinkComponent from "./LinkComponent";
import ImageComponent from "./ImageComponent";
import { github, gmail, linkedin } from "@/public/images";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center bg-slate-900 w-full text-white p-5">
      <p className="text-xl md:text-3xl font-bold">Bruno Pérez</p>
      <div className="flex flex-col space-y-2 text-center text-[#E7983B]">
        <p className="text-xl text-white">Links</p>
        <div className="flex flex-col md:flex-row md:space-x-5  justify-center items-start">
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Projects</Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-5  justify-center items-center">
        <LinkComponent href="https://github.com/BrunoPerez93">
          <ImageComponent
            src={github}
            alt="Logo Github"
            width={50}
            height={50}
          />
        </LinkComponent>
        <LinkComponent href="https://www.linkedin.com/in/bruno-perez-07079324a">
          <ImageComponent
            src={linkedin}
            alt="Logo Linkedin"
            width={50}
            height={50}
          />
        </LinkComponent>

        <LinkComponent href="mailto:brunoperez24793@gmail.com?subject=Hello&body=I wanted to reach out to you regarding...">
          <ImageComponent src={gmail} alt="Logo Gmail" width={50} height={50} />
        </LinkComponent>
      </div>
    </footer>
  );
};

export default Footer;
