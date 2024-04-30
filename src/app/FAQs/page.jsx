"use client";
import Image from "next/image";
import Link from "next/link";
import gd from "@/app/assets/grocery/gd.png";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { main, btn, btn2 } from "@/app/components/productmenu.module.css";

const FAQs = () => {
  return (
    <div className="font-Poppins">
      <div className="relative min-h-80 grid place-content-center content-center text-center px-[5%] h-full bg-[url('../../public/main.png')] bg-pink-50 bg-no-repeat bg-cover">
        <Image
          src={gd}
          alt=""
          className="absolute w-[20%] bottom-0 left-0 z-0"
        />
        <div className="py-[35%]">
          <h1 className="text-3xl font-bold text-[#609E45]">
            Learn more about us
          </h1>
          <h4>
            <Link href={"/"}>Home</Link> -{" "}
            <span className="text-[#EF682E]">FAQ{"\u0027"}s</span>
          </h4>
        </div>
      </div>
      <div className="grid md:grid-cols-2 py-20 px-[5%] md:px-[10%]">
        <div className="p-2">
          <h1 className=" p-4 rounded-md font-bold text-xl text-[#609E45] hover:underline">
            Pre-Sale Questions
          </h1>
          <div className="p-2 grid gap-4">
            <div id={main} className="group">
              <h2 className="flex justify-between items-center p-2 border-2 border-[#EF682E20] rounded-lg group-hover:bg-[#609E45] group-hover:text-white">
                How do I Claim a Free Coupon?
                <FaAngleDown id={btn2} className="inline animate-bounce" />
                <FaAngleUp id={btn} className=" hidden animate-bounce" />
              </h2>
              <p id={btn} className="hidden p-2 font-light text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates iure eos, inventore saepe repellat, repudiandae omnis
                modi sapiente harum facere explicabo sequi commodi, iste amet
                eum odit optio repellendus aliquam.
              </p>
            </div>
            <div id={main} className="group">
              <h2 className="flex justify-between items-center p-2 border-2 border-[#EF682E20] rounded-lg group-hover:bg-[#609E45] group-hover:text-white">
                How do I Make a regular Table Booking?
                <FaAngleDown id={btn2} className="inline animate-bounce" />
                <FaAngleUp id={btn} className=" hidden animate-bounce" />
              </h2>
              <p id={btn} className="hidden p-2 font-light text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates iure eos, inventore saepe repellat, repudiandae omnis
                modi sapiente harum facere explicabo sequi commodi, iste amet
                eum odit optio repellendus aliquam.
              </p>
            </div>
            <div id={main} className="group">
              <h2 className="flex justify-between items-center p-2 border-2 border-[#EF682E20] rounded-lg group-hover:bg-[#609E45] group-hover:text-white">
                How can I be certain my booking{"\u0027"}s been received?
                <FaAngleDown id={btn2} className="inline animate-bounce" />
                <FaAngleUp id={btn} className=" hidden animate-bounce" />
              </h2>
              <p id={btn} className="hidden p-2 font-light text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates iure eos, inventore saepe repellat, repudiandae omnis
                modi sapiente harum facere explicabo sequi commodi, iste amet
                eum odit optio repellendus aliquam.
              </p>
            </div>
            <div id={main} className="group">
              <h2 className="flex justify-between items-center p-2 border-2 border-[#EF682E20] rounded-lg group-hover:bg-[#609E45] group-hover:text-white">
                What happens if I{"\u0027"}m running late?
                <FaAngleDown id={btn2} className="inline animate-bounce" />
                <FaAngleUp id={btn} className=" hidden animate-bounce" />
              </h2>
              <p id={btn} className="hidden p-2 font-light text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates iure eos, inventore saepe repellat, repudiandae omnis
                modi sapiente harum facere explicabo sequi commodi, iste amet
                eum odit optio repellendus aliquam.
              </p>
            </div>
            <div id={main} className="group">
              <h2 className="flex justify-between items-center p-2 border-2 border-[#EF682E20] rounded-lg group-hover:bg-[#609E45] group-hover:text-white">
                Why do you need my email address?
                <FaAngleDown id={btn2} className="inline animate-bounce" />
                <FaAngleUp id={btn} className=" hidden animate-bounce" />
              </h2>
              <p id={btn} className="hidden p-2 font-light text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates iure eos, inventore saepe repellat, repudiandae omnis
                modi sapiente harum facere explicabo sequi commodi, iste amet
                eum odit optio repellendus aliquam.
              </p>
            </div>
          </div>
        </div>
        <div className="p-2">
          <h1 className=" p-4 rounded-md font-bold text-xl text-[#609E45] hover:underline">
            Delivery Quistions
          </h1>
          <div className="p-2 grid gap-4">
            <div id={main} className="group">
              <h2 className="flex justify-between items-center p-2 border-2 border-[#EF682E20] rounded-lg group-hover:bg-[#609E45] group-hover:text-white">
                How do I Claim a Free Coupon?
                <FaAngleDown id={btn2} className="inline animate-bounce" />
                <FaAngleUp id={btn} className=" hidden animate-bounce" />
              </h2>
              <p id={btn} className="hidden p-2 font-light text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates iure eos, inventore saepe repellat, repudiandae omnis
                modi sapiente harum facere explicabo sequi commodi, iste amet
                eum odit optio repellendus aliquam.
              </p>
            </div>
            <div id={main} className="group">
              <h2 className="flex justify-between items-center p-2 border-2 border-[#EF682E20] rounded-lg group-hover:bg-[#609E45] group-hover:text-white">
                How do I Make a regular Table Booking?
                <FaAngleDown id={btn2} className="inline animate-bounce" />
                <FaAngleUp id={btn} className=" hidden animate-bounce" />
              </h2>
              <p id={btn} className="hidden p-2 font-light text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates iure eos, inventore saepe repellat, repudiandae omnis
                modi sapiente harum facere explicabo sequi commodi, iste amet
                eum odit optio repellendus aliquam.
              </p>
            </div>
            <div id={main} className="group">
              <h2 className="flex justify-between items-center p-2 border-2 border-[#EF682E20] rounded-lg group-hover:bg-[#609E45] group-hover:text-white">
                How can I be certain my booking{"\u0027"}s been received?
                <FaAngleDown id={btn2} className="inline animate-bounce" />
                <FaAngleUp id={btn} className=" hidden animate-bounce" />
              </h2>
              <p id={btn} className="hidden p-2 font-light text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates iure eos, inventore saepe repellat, repudiandae omnis
                modi sapiente harum facere explicabo sequi commodi, iste amet
                eum odit optio repellendus aliquam.
              </p>
            </div>
            <div id={main} className="group">
              <h2 className="flex justify-between items-center p-2 border-2 border-[#EF682E20] rounded-lg group-hover:bg-[#609E45] group-hover:text-white">
                What happens if I{"\u0027"}m running late?
                <FaAngleDown id={btn2} className="inline animate-bounce" />
                <FaAngleUp id={btn} className=" hidden animate-bounce" />
              </h2>
              <p id={btn} className="hidden p-2 font-light text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates iure eos, inventore saepe repellat, repudiandae omnis
                modi sapiente harum facere explicabo sequi commodi, iste amet
                eum odit optio repellendus aliquam.
              </p>
            </div>
            <div id={main} className="group">
              <h2 className="flex justify-between items-center p-2 border-2 border-[#EF682E20] rounded-lg group-hover:bg-[#609E45] group-hover:text-white">
                Why do you need my email address?
                <FaAngleDown id={btn2} className="inline animate-bounce" />
                <FaAngleUp id={btn} className=" hidden animate-bounce" />
              </h2>
              <p id={btn} className="hidden p-2 font-light text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates iure eos, inventore saepe repellat, repudiandae omnis
                modi sapiente harum facere explicabo sequi commodi, iste amet
                eum odit optio repellendus aliquam.
              </p>
            </div>
          </div>
        </div>
        <div className="p-2">
          <h1 className=" p-4 rounded-md font-bold text-xl text-[#609E45] hover:underline">
            Pricing Questions
          </h1>
          <div className="p-2 grid gap-4">
            <div id={main} className="group">
              <h2 className="flex justify-between items-center p-2 border-2 border-[#EF682E20] rounded-lg group-hover:bg-[#609E45] group-hover:text-white">
                How do I Claim a Free Coupon?
                <FaAngleDown id={btn2} className="inline animate-bounce" />
                <FaAngleUp id={btn} className=" hidden animate-bounce" />
              </h2>
              <p id={btn} className="hidden p-2 font-light text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates iure eos, inventore saepe repellat, repudiandae omnis
                modi sapiente harum facere explicabo sequi commodi, iste amet
                eum odit optio repellendus aliquam.
              </p>
            </div>
            <div id={main} className="group">
              <h2 className="flex justify-between items-center p-2 border-2 border-[#EF682E20] rounded-lg group-hover:bg-[#609E45] group-hover:text-white">
                How do I Make a regular Table Booking?
                <FaAngleDown id={btn2} className="inline animate-bounce" />
                <FaAngleUp id={btn} className=" hidden animate-bounce" />
              </h2>
              <p id={btn} className="hidden p-2 font-light text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates iure eos, inventore saepe repellat, repudiandae omnis
                modi sapiente harum facere explicabo sequi commodi, iste amet
                eum odit optio repellendus aliquam.
              </p>
            </div>
            <div id={main} className="group">
              <h2 className="flex justify-between items-center p-2 border-2 border-[#EF682E20] rounded-lg group-hover:bg-[#609E45] group-hover:text-white">
                How can I be certain my booking{"\u0027"}s been received?
                <FaAngleDown id={btn2} className="inline animate-bounce" />
                <FaAngleUp id={btn} className=" hidden animate-bounce" />
              </h2>
              <p id={btn} className="hidden p-2 font-light text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates iure eos, inventore saepe repellat, repudiandae omnis
                modi sapiente harum facere explicabo sequi commodi, iste amet
                eum odit optio repellendus aliquam.
              </p>
            </div>
            <div id={main} className="group">
              <h2 className="flex justify-between items-center p-2 border-2 border-[#EF682E20] rounded-lg group-hover:bg-[#609E45] group-hover:text-white">
                What happens if I{"\u0027"}m running late?
                <FaAngleDown id={btn2} className="inline animate-bounce" />
                <FaAngleUp id={btn} className=" hidden animate-bounce" />
              </h2>
              <p id={btn} className="hidden p-2 font-light text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates iure eos, inventore saepe repellat, repudiandae omnis
                modi sapiente harum facere explicabo sequi commodi, iste amet
                eum odit optio repellendus aliquam.
              </p>
            </div>
            <div id={main} className="group">
              <h2 className="flex justify-between items-center p-2 border-2 border-[#EF682E20] rounded-lg group-hover:bg-[#609E45] group-hover:text-white">
                Why do you need my email address?
                <FaAngleDown id={btn2} className="inline animate-bounce" />
                <FaAngleUp id={btn} className=" hidden animate-bounce" />
              </h2>
              <p id={btn} className="hidden p-2 font-light text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates iure eos, inventore saepe repellat, repudiandae omnis
                modi sapiente harum facere explicabo sequi commodi, iste amet
                eum odit optio repellendus aliquam.
              </p>
            </div>
          </div>
        </div>
        <div className="p-2">
          <h1 className=" p-4 rounded-md font-bold text-xl text-[#609E45] hover:underline">
            My Account Quistions
          </h1>
          <div className="p-2 grid gap-4">
            <div id={main} className="group">
              <h2 className="flex justify-between items-center p-2 border-2 border-[#EF682E20] rounded-lg group-hover:bg-[#609E45] group-hover:text-white">
                How do I Claim a Free Coupon?
                <FaAngleDown id={btn2} className="inline animate-bounce" />
                <FaAngleUp id={btn} className=" hidden animate-bounce" />
              </h2>
              <p id={btn} className="hidden p-2 font-light text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates iure eos, inventore saepe repellat, repudiandae omnis
                modi sapiente harum facere explicabo sequi commodi, iste amet
                eum odit optio repellendus aliquam.
              </p>
            </div>
            <div id={main} className="group">
              <h2 className="flex justify-between items-center p-2 border-2 border-[#EF682E20] rounded-lg group-hover:bg-[#609E45] group-hover:text-white">
                How do I Make a regular Table Booking?
                <FaAngleDown id={btn2} className="inline animate-bounce" />
                <FaAngleUp id={btn} className=" hidden animate-bounce" />
              </h2>
              <p id={btn} className="hidden p-2 font-light text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates iure eos, inventore saepe repellat, repudiandae omnis
                modi sapiente harum facere explicabo sequi commodi, iste amet
                eum odit optio repellendus aliquam.
              </p>
            </div>
            <div id={main} className="group">
              <h2 className="flex justify-between items-center p-2 border-2 border-[#EF682E20] rounded-lg group-hover:bg-[#609E45] group-hover:text-white">
                How can I be certain my booking{"\u0027"}s been received?
                <FaAngleDown id={btn2} className="inline animate-bounce" />
                <FaAngleUp id={btn} className=" hidden animate-bounce" />
              </h2>
              <p id={btn} className="hidden p-2 font-light text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates iure eos, inventore saepe repellat, repudiandae omnis
                modi sapiente harum facere explicabo sequi commodi, iste amet
                eum odit optio repellendus aliquam.
              </p>
            </div>
            <div id={main} className="group">
              <h2 className="flex justify-between items-center p-2 border-2 border-[#EF682E20] rounded-lg group-hover:bg-[#609E45] group-hover:text-white">
                What happens if I{"\u0027"}m running late?
                <FaAngleDown id={btn2} className="inline animate-bounce" />
                <FaAngleUp id={btn} className=" hidden animate-bounce" />
              </h2>
              <p id={btn} className="hidden p-2 font-light text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates iure eos, inventore saepe repellat, repudiandae omnis
                modi sapiente harum facere explicabo sequi commodi, iste amet
                eum odit optio repellendus aliquam.
              </p>
            </div>
            <div id={main} className="group">
              <h2 className="flex justify-between items-center p-2 border-2 border-[#EF682E20] rounded-lg group-hover:bg-[#609E45] group-hover:text-white">
                Why do you need my email address?
                <FaAngleDown id={btn2} className="inline animate-bounce" />
                <FaAngleUp id={btn} className=" hidden animate-bounce" />
              </h2>
              <p id={btn} className="hidden p-2 font-light text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates iure eos, inventore saepe repellat, repudiandae omnis
                modi sapiente harum facere explicabo sequi commodi, iste amet
                eum odit optio repellendus aliquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
