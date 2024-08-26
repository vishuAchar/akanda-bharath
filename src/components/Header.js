import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import Image from "next/image";
import { Images } from "@/constants/Images";
import Link from "next/link";

export default function Header() {
    return <div className="flex justify-between items-center px-3 py-2 max-w-6xl mx-auto">
        <div className="flex gap-4">
            <MenuItem title="home" address="/" Icon={AiFillHome} />
            <MenuItem title="about" address="/about" Icon={AiFillHome} />
        </div>
        <Link href={"/"} className="flex gap-1 items-center">
            <Image src={Images.logo} alt="logo" width={100} height={50} style={{ objectFit: "contain" }} />
            <div className="text-base font-bold font-sans hidden sm:inline whitespace-pre-wrap">Akanda <br />Bharath</div>
        </Link>
    </div>;
}
