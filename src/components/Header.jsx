import React from "react";
import MenuItem from "./MenuItem";
import {
  AiFillHome,
  AiFillInfoCircle,
  AiOutlineMenu,
  AiFillContacts,
} from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between items-center px-3 py-2 max-w-6xl mx-auto sticky top-0 z-50 bg-slate-900">
      <div className="gap-4 hidden sm:flex">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={AiFillInfoCircle} />
        <MenuItem title="contact" address="/contact" Icon={AiFillContacts} />
      </div>
      <div className="flex gap-4 sm:hidden">
        <AiOutlineMenu className="text-2xl sm:hidden cursor-pointer" />
      </div>
      <div className="flex items-center gap-2">
        <DarkModeSwitch />

        <Link href={"/"} className="flex gap-1 items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={50}
            style={{ objectFit: "contain" }}
            className="sm:w-24 w-20"
          />
          <div className="text-2xl text-yellow-600 leading-6 font-bold font-sans hidden sm:inline whitespace-pre-wrap">
            Akanda <br />
            Bharath
          </div>
        </Link>
      </div>
    </div>
  );
}
