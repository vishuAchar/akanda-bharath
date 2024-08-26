import React from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex gap-6 justify-center bg-amber-100  dark:bg-gray-600  dark:text-gray-900 lg:text-lg p-3">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
