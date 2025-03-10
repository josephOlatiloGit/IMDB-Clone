import React from "react";
import NavbarItem from "./NavbarItem";
import { Suspense } from "react";

export default function Navbar() {
  return (
    <Suspense>
      <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg-text-lg justify-center gap-6">
        <NavbarItem title="Trending" params="fetchTrending" />
        <NavbarItem title="Top Rated" params="fetchTopRated" />
      </div>
    </Suspense>
  );
}
