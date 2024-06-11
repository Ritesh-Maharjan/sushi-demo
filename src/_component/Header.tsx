"use client";

import React, { useState } from "react";
import MaxWidthContent from "./MaxWidthContent";
import Image from "next/image";
import {
  Contact,
  CookingPot,
  Facebook,
  Home,
  Info,
  Instagram,
  MapPin,
  Sun,
} from "lucide-react";

const Header = () => {
  const [displayMenu, setDisplayMenu] = useState(true);
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = today
    .toLocaleDateString("en-US", options)
    .replace(",", "");

  // Get hours, minutes, and seconds
  const hours = today.getHours().toString().padStart(2, "0");
  console.log(hours);

  return (
    <header className="sticky top-0 bg-black/85 z-50 border-b border-gray-600">
      <MaxWidthContent className="flex justify-between items-center px-4">
        <figure className="overflow-hidden">
          <Image
            height={100}
            width={100}
            src="/logo.png"
            alt="Clouds with text logo"
            className="h-15 w-10"
          />
        </figure>

        <button
          className="flex flex-col gap-1 z-50"
          aria-label="Menu"
          onClick={() => setDisplayMenu(!displayMenu)}
        >
          <span className="h-3 w-3 rounded-full bg-white inline-block"></span>
          <span className="h-3 w-3 rounded-full bg-white inline-block"></span>
          <span className="h-3 w-3 rounded-full bg-white inline-block"></span>
        </button>
      </MaxWidthContent>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gray-800 ${
          displayMenu ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
        } transition-all duration-1000`}
      >
        {/* image overlay */}
        <figure>
          <Image
            src="/location-by-durston-saylor.webp"
            alt="Location"
            fill
            className="opacity-40"
          />
        </figure>

        {/* menu section */}
        <main className="flex items-center h-full">
          {/* Info */}
          <div className="opacity-95 rounded-full overflow-hidden  relative -left-14">
            <div>
              <figure>
                <Image
                  className="w-64 h-64 object-cover"
                  src={"/menu.png"}
                  alt="Food with various ingredients"
                  width={100}
                  height={100}
                />
              </figure>
              <div className="bg-black/80  inset-0 absolute" />
              <div className="absolute text-white inset-0 top-6 z-[70] flex flex-col gap-y-5">
                <h3 className="text-4xl pl-20 ">Roku</h3>
                <p className="border-b-2 pl-20 pb-4">Authentic Omakase</p>
                <p className="border-b-2 pl-20 pb-4">{formattedDate}</p>
                <p className="pl-20 flex gap-2">
                  <Sun />
                  24deg
                </p>
              </div>
            </div>
          </div>
          {/* Menu Buttons */}
          <nav className="opacity-95 flex flex-col gap-2 -ml-16">
            <div className="flex flex-col cursor-pointer">
              <span>Home</span>
              <span className="bg-black p-3 rounded-full border-2 border-white w-fit">
                <Home />
              </span>
            </div>
            <div className="flex flex-col cursor-pointer ml-14">
              <span>About</span>
              <span className="bg-black p-3 rounded-full border-2 border-white w-fit">
                <Info />
              </span>
            </div>
            <div className="flex flex-col cursor-pointer ml-14">
              <span>Menu</span>
              <span className="bg-black p-3 rounded-full border-2 border-white w-fit">
                <CookingPot />
              </span>
            </div>
            <div className="flex flex-col cursor-pointer">
              <span>Contact</span>
              <span className="bg-black p-3 rounded-full border-2 border-white w-fit">
                <Contact />
              </span>
            </div>
          </nav>
        </main>

        <footer className="absolute bottom-3 flex items-center justify-center mx-auto w-full gap-4">
          <MapPin className="h-8 w-8" />
          <Facebook className="h-8 w-8" />
          <Instagram className="h-8 w-8" />
        </footer>
      </div>
    </header>
  );
};

export default Header;
