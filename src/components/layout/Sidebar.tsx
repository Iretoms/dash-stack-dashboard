"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Rows3 } from "lucide-react";

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <div className="w-[18%] h-full overflow-y-auto px-7 py-6">
      <h1 className="font-bold text-xl text-center mb-10">
        <span className="text-primary">Dash</span>Stack
      </h1>
      <p className="font-semibold text-dark-text text-sm text-center">
        Dashboard
      </p>
      <nav className="mt-7">
        <ul className="flex flex-col gap-2">
          <li className="relative">
            <Link
              href="/favourite"
              className={`flex items-center gap-4 rounded-md transition-colors duration-200 px-4 py-4 text-dark-text text-sm font-semibold hover:text-white hover:bg-primary ${
                pathName === "/favourite"
                  ? "bg-primary text-white"
                  : "transparent"
              }`}
            >
              <Heart className="h-5 w-5" /> <span>Favorites</span>
            </Link>
            <div
              className={`absolute rounded-xl h-full w-[7px] -left-[1.9rem] top-0 ${
                pathName === "/favourite" ? "bg-primary" : "transparent"
              }`}
            ></div>
          </li>
          <li className="relative">
            <Link
              href="/product-stock"
              className={`flex items-center gap-4 rounded-md transition-colors duration-200 px-4 py-4 text-dark-text text-sm font-semibold hover:text-white hover:bg-primary ${
                pathName === "/product-stock"
                  ? "bg-primary text-white"
                  : "transparent"
              }`}
            >
              <Rows3 className="h-5 w-5" />
              <span>Product Stock</span>
            </Link>
            <div
              className={`absolute rounded-xl h-full w-[7px] -left-[1.9rem] top-0 ${
                pathName === "/product-stock" ? "bg-primary" : "transparent"
              }`}
            ></div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
