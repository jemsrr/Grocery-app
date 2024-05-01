"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiPhoneCall,
} from "react-icons/bi";
import {
  AiOutlineMail,
  AiOutlineDown,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [menubar, setMenuBar] = useState("hidden");
  return (
    <div className="font-Poppins ">
      <div className=" grid bg-[#609E45] px-[5%] py-2 text-white text-xs  justify-between items-center md:flex     ">
        <h1>Welcome to the best TRoo Organic Grocery Store</h1>
        <h1>
          {" "}
          <strong>50%</strong> Clearance Sale
        </h1>
        <div className="flex justify-start gap-2 items-center  ">
          <div className="w-full flex justify-start items-center gap-2 ">
            <h1 className="md:w-24">Follow Us On</h1>
            <hr className="w-[30%]" />
          </div>
          <div className="flex justify-start items-center gap-2 text-xs font-bold md:text-xl">
            <div className="border-2 rounded-full p-1 hover:bg-[#EF682E] hover:border-none">
              <BiLogoFacebook />
            </div>
            <div className="border-2 rounded-full p-1 hover:bg-[#EF682E] hover:border-none">
              <BiLogoInstagram />
            </div>
            <div className="border-2 rounded-full p-1 hover:bg-[#EF682E] hover:border-none">
              <BiLogoLinkedin />
            </div>
            <div className="border-2 rounded-full p-1 hover:bg-[#EF682E] hover:border-none">
              <BiLogoTwitter />
            </div>
          </div>
        </div>
      </div>
      <div className="px-[5%] py-6 grid gap-2 sm:flex sm:justify-between sm:items-center">
        <div className="flex justify-start gap-2 items-center">
          <Image
            src={logo}
            alt="logo"
            className="bg-[#609E45] rounded-full p-1 w-10 sm:p-2 sm:w-16"
          />
          <h1 className="font-[700] text-xl sm:text-3xl text-[#609E45]">
            Organic <span className="font-[275] text-[#EF682E]">Grocery</span>
          </h1>
        </div>
        <div className="lg:flex lg:justify-end items-center gap-4">
          <form className="border-2 rounded-md p-2 flex">
            <input
              type="text"
              placeholder="Search Your Products"
              className="px-2 py-1 rounded-md w-full"
            />
            <button className="text-white bg-[#EF682E] px-2 py-1 rounded-md">
              Search
            </button>
          </form>
          <div className="hidden lg:flex lg:items-center lg:gap-2">
            <div className="flex gap-2 items-center">
              <BiPhoneCall className="text-[#EF682E] text-xl font-bold bg-[#EF682E20] rounded-full p-2 h-10 w-10" />
              <div>
                <h2 className="text-[16px]">Call Us on</h2>
                <h2 className="text-[16px] font-semibold text-[#609E45]">
                  +44 123 456 7890
                </h2>
              </div>
            </div>
            <span>|</span>
            <div className="flex gap-2 items-center ">
              <AiOutlineMail className="text-[#EF682E] text-xl font-bold bg-[#EF682E20] rounded-full p-2 h-10 w-10" />
              <div>
                <h2 className="text-[16px]">Email Us</h2>
                <h2 className="text-[16px] font-semibold text-[#609E45]">
                  info@troothemes.com
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-start md:items-center px-[5%]">
        {menubar !== "grid" && (
          <AiOutlineMenu
            onClick={() => setMenuBar("grid")}
            className="sm:hidden"
          />
        )}
        <ul
          className={`${menubar} sm:flex justify-start gap-2 md:gap-4 items-start`}
        >
          <AiOutlineClose
            onClick={() => setMenuBar("hidden")}
            className="sm:hidden"
          />
          <Link href={"/"} className="hover:text-[#609E45]">
            Home
          </Link>
          <Link href={"/aboutUs"} className="hover:text-[#609E45]">
            About Us
          </Link>
          <Link
            href={"/comingSoon"}
            className="flex justify-start items-center gap-[1px] hover:text-[#609E45]"
          >
            Shop
            <AiOutlineDown />
          </Link>
          <Link
            href={"/ourProductese"}
            className="flex justify-start items-center gap-[1px] hover:text-[#609E45]"
          >
            Products
            <AiOutlineDown />
          </Link>
          <Link
            href={"/comingSoon"}
            className="flex justify-start items-center gap-[1px] hover:text-[#609E45]"
          >
            Pages
            <AiOutlineDown />
          </Link>
          <Link href={"/blog"} className="hover:text-[#609E45]">
            Blogs
          </Link>
          <Link href={"/contactUs"} className="hover:text-[#609E45]">
            Contact US
          </Link>
        </ul>
        <div className="flex justify-end gap-2 md:gap-4 items-start md:items-center">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                My Account
                <AiOutlineDown />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href={"/login"}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Login
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href={"/signup"}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Sign Up
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <li className="flex justify-start items-center"></li>
          <AiOutlineHeart className="text-[#EF682E] text-2xl md:text-4xl font-bold bg-[#EF682E20] rounded-full p-1 h-min" />
          <Link href={"/cart"} className="relative">
            <AiOutlineShoppingCart className="text-[#EF682E] text-2xl md:text-4xl font-bold bg-[#EF682E20] rounded-full p-1 h-min" />
            <div className="absolute top-0 right-0 w-3 h-3 bg-[#609E45] rounded-full animate-ping"></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
