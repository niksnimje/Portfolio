"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/assets/Header/N_Logo.png"

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 ">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between bg-pink-300">

        {/* Logo Image */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={Logo}
            alt="Niks Nimje Logo"
            width={40}            // apne logo ke according adjust karna
            height={40}
            priority
          />
          {/* Agar naam bhi rakhna ho image ke sath */}
          {/* <span className="text-xl font-bold tracking-wider">NIKS NIMJE</span> */}
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-black">
          <li>
            <Link href="#about" className="hover:opacity-70 transition">
              About me
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:opacity-70 transition">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#portfolio" className="hover:opacity-70 transition">
              Portfolio
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <div>
          <Link
            href="#contact"
            className="px-5 py-2 rounded-full border border-white text-sm font-medium text-white hover:bg-white hover:text-black transition"
          >
            CONTACT ME
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
