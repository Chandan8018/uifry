
"use client";
import React from "react";
import { Button} from "./ui/moving-border";
import { Navbar } from "flowbite-react";
import { BsFire } from "react-icons/bs";
import ThemeSwitch from "./ThemeSwitch";

export function Header() {
  return (
    <Navbar fluid rounded className="md:pl-20 md:pr-36">
      <Navbar.Brand href="https://flowbite-react.com" className="">
        <BsFire className="h-8 w-8 text-[#ff5555]"/>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">uifry™</span>
      </Navbar.Brand>
      <div className="flex justify-center items-center gap-3 md:order-2">
        <ThemeSwitch/>
        <Button borderRadius="4px"
        className="bg-black text-white border-slate-800 rounded-[3px]">Download</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="md:relative md:-left-48">
        <Navbar.Link href="#" className="font-bold text-[1.2vw] text-[#ff5555] dark:text-[#ff5555]">
          Home
        </Navbar.Link>
        <Navbar.Link href="#" className="font-bold text-[1.2vw]">About Us</Navbar.Link>
        <Navbar.Link href="#" className="font-bold text-[1.2vw]">Pricing</Navbar.Link>
        <Navbar.Link href="#" className="font-bold text-[1.2vw]">Features</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}


export default Header
