import Link from "next/link";
import React from "react";

export default function MenuItem({ title, address, Icon }) {
  return (
    <Link href={address} className="hover:text-amber-600">
      <Icon className="text-2xl sm:hidden cursor-pointer" />
      <p className="uppercase hidden sm:inline text-sm font-semibold">
        {title}
      </p>
    </Link>
  );
}
