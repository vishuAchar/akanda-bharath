"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div
      className={`hover:text-amber-600 font-semibold p-4 cursor-pointer ${
        genre &&
        genre === param &&
        "underline underline-offset-8 decoration-2 decoration-amber-500 rounded-lg"
      }`}
    >
      <Link href={`/?genre=${param}`}>{title}</Link>
    </div>
  );
}
