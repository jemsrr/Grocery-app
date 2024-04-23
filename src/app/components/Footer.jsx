import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";
import { AiOutlineMail } from "react-icons/ai";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiPhoneCall,
} from "react-icons/bi";
import debit from "@/app/assets/debit.png";

const Footer = () => {
  return (
    <div className="font-Poppins py-10 text-white px-[10%] h-full bg-[url('../../public/footer.png')]  bg-[#609E45] bg-no-repeat bg-cover grid gap-2">
      <div className=" grid sm:flex sm:justify-between ">
        <div className="grid md:flex justify-start items-center gap-4">
          <div className="flex gap-4 items-center ">
            <BiPhoneCall className=" text-2xl font-bold bg-[#EF682E20] rounded-xl p-2 h-[49px] w-[49px]" />
            <div>
              <h2 className="text-[16px]">Call Us on</h2>
              <h2 className="text-[16px] font-semibold ">+44 123 456 7890</h2>
            </div>
          </div>
          <div className="flex gap-4 items-center ">
            <AiOutlineMail className=" text-2xl font-bold bg-[#EF682E20] rounded-xl p-2 h-[49px] w-[49px]" />
            <div>
              <h2 className="text-[16px]">Email Us</h2>
              <h2 className="text-[16px] font-semibold ">
                info@troothemes.com
              </h2>
            </div>
          </div>
        </div>
        <div className="flex sm:justify-end gap-4 items-center">
          <div className="flex justify-end items-center gap-1">
            <h1>Follow Us On</h1>
            <hr className="w-10" />
          </div>
          <div className="flex justify-end items-center sm:gap-2 text-xs sm:text-xl font-bold">
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
      <hr />
      <div className="grid sm:flex sm:justify-between my-10 gap-10">
        <div className="sm:w-[40%]">
          <div className="grid gap-2 ">
            <div className="flex justify-start gap-2 items-center">
              <Image
                src={logo}
                alt="logo"
                className="bg-[#609E45] rounded-full p-1 w-10 sm:p-2 sm:w-16"
              />
              <h1 className="font-[700] text-xl sm:text-3xl">
                Organic{" "}
                <span className="font-[275] ">Grocery</span>
              </h1>
            </div>
            <p>
              Lorem Ipsum is simply it is dummy rummy dummy text of the since it
              is printing and typesetting{"\u0027"}s the and it industry{"\u0027"}s standard dummy
              text ever since the 150.
            </p>
            <h3>Address</h3>
            <address>4516 School Street, Danbury, CT, Canada, 458068</address>
          </div>
        </div>
        <div className="sm:w-[60%] grid sm:grid-flow-col place-content-between gap-4">
          <div>
            <h2 className="font-bold text-2xl">Recently Added</h2>
            <hr className="w-[30%] my-1" />
            <div className="grid gap-4">
              <Link href={"/"}>Homepage </Link>
              <Link href={"/aboutUs"}>About Us </Link>
              <Link href={"/ourProductese"}>Our Products </Link>
              <Link href={"/testimonial"}>Our Testimonial</Link>
              <Link href={"/blog"}>Our Blogs</Link>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-2xl">Customer Support</h2>
            <hr className="w-[30%] my-1" />
            <div className="grid gap-4">
              <Link href={"/cart"}>Order</Link>
              <Link href={"/comingSoon"}>Track Your Order</Link>
              <Link href={"/FAQs"}>Help & Support </Link>
              <Link href={"/comingSoon"}>Shipping & Delivery</Link>
              <Link href={"/contactUs"}>Contact Us</Link>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-2xl">Catogories</h2>
            <hr className="w-[30%] my-1" />
            <div className="grid gap-4">
              <li>Fresh Vegetable</li>
              <li>Fresh Fruits</li>
              <li>Fresh Beverage</li>
              <li>Fresh Backery Items</li>
              <li>Netural Drinks</li>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="grid sm:flex justify-between items-center gap-2">
        <h1>Copyright © 2023. Themes. All rights reserved.</h1>
        <Image src={debit} alt="" className="sm:w-[25%]" />
        <h1>Privacy Policy / Terms & Conditions</h1>
      </div>
    </div>
  );
};

export default Footer;
