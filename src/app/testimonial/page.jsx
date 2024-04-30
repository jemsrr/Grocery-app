import Image from "next/image";
import Link from "next/link";
import gd from "@/app/assets/grocery/gd.png";

import { BiSolidQuoteAltLeft } from "react-icons/bi";

const Testimonials = () => {
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
            What our clients say about us
          </h1>
          <h4>
            <Link href={"/"}>Home</Link> -{" "}
            <span className="text-[#EF682E]">Testimonial</span>
          </h4>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-20 px-[10%]">
        <div className=" grid w-full place-items-center gap-10 px-6 py-2 border-[14px] rounded-2xl  hover:border-[#609E45] hover:text-[#609E45] hover:bg-black hover:bg-opacity-10 ">
          <BiSolidQuoteAltLeft className="p-1 text-4xl rounded-full" />
          <p className=" text-center text-black">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humor, or randomized.
          </p>
          <div className="grid place-items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-red-100   "></div>
            <h2 className="font-bold text-xl">Vilma Hawkins</h2>
            <h4 className="text-black">Customer</h4>
          </div>
        </div>
        <div className=" grid w-full place-items-center gap-10 px-6 py-2 border-[14px] rounded-2xl  hover:border-[#609E45] hover:text-[#609E45] hover:bg-black hover:bg-opacity-10 ">
          <BiSolidQuoteAltLeft className="p-1 text-4xl rounded-full" />
          <p className=" text-center text-black">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humor, or randomized.
          </p>
          <div className="grid place-items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-red-100   "></div>
            <h2 className="font-bold text-xl">Tonny Hensley</h2>
            <h4 className="text-black">Customer</h4>
          </div>
        </div>
        <div className=" grid w-full place-items-center gap-10 px-6 py-2 border-[14px] rounded-2xl  hover:border-[#609E45] hover:text-[#609E45] hover:bg-black hover:bg-opacity-10 ">
          <BiSolidQuoteAltLeft className="p-1 text-4xl rounded-full" />
          <p className=" text-center text-black">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humor, or randomized.
          </p>
          <div className="grid place-items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-red-100   "></div>
            <h2 className="font-bold text-xl">Victoria Roach</h2>
            <h4 className="text-black">Customer</h4>
          </div>
        </div>
        <div className=" grid w-full place-items-center gap-10 px-6 py-2 border-[14px] rounded-2xl  hover:border-[#609E45] hover:text-[#609E45] hover:bg-black hover:bg-opacity-10 ">
          <BiSolidQuoteAltLeft className="p-1 text-4xl rounded-full" />
          <p className=" text-center text-black">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humor, or randomized.
          </p>
          <div className="grid place-items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-red-100   "></div>
            <h2 className="font-bold text-xl">Vilma Hawkins</h2>
            <h4 className="text-black">Customer</h4>
          </div>
        </div>
        <div className=" grid w-full place-items-center gap-10 px-6 py-2 border-[14px] rounded-2xl  hover:border-[#609E45] hover:text-[#609E45] hover:bg-black hover:bg-opacity-10 ">
          <BiSolidQuoteAltLeft className="p-1 text-4xl rounded-full" />
          <p className=" text-center text-black">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humor, or randomized.
          </p>
          <div className="grid place-items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-red-100   "></div>
            <h2 className="font-bold text-xl">Tonny Hensley</h2>
            <h4 className="text-black">Customer</h4>
          </div>
        </div>
        <div className=" grid w-full place-items-center gap-10 px-6 py-2 border-[14px] rounded-2xl  hover:border-[#609E45] hover:text-[#609E45] hover:bg-black hover:bg-opacity-10 ">
          <BiSolidQuoteAltLeft className="p-1 text-4xl rounded-full" />
          <p className=" text-center text-black">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humor, or randomized.
          </p>
          <div className="grid place-items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-red-100   "></div>
            <h2 className="font-bold text-xl">Victoria Roach</h2>
            <h4 className="text-black">Customer</h4>
          </div>
        </div>
        <div className=" grid w-full place-items-center gap-10 px-6 py-2 border-[14px] rounded-2xl  hover:border-[#609E45] hover:text-[#609E45] hover:bg-black hover:bg-opacity-10 ">
          <BiSolidQuoteAltLeft className="p-1 text-4xl rounded-full" />
          <p className=" text-center text-black">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humor, or randomized.
          </p>
          <div className="grid place-items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-red-100   "></div>
            <h2 className="font-bold text-xl">Vilma Hawkins</h2>
            <h4 className="text-black">Customer</h4>
          </div>
        </div>
        <div className=" grid w-full place-items-center gap-10 px-6 py-2 border-[14px] rounded-2xl  hover:border-[#609E45] hover:text-[#609E45] hover:bg-black hover:bg-opacity-10 ">
          <BiSolidQuoteAltLeft className="p-1 text-4xl rounded-full" />
          <p className=" text-center text-black">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humor, or randomized.
          </p>
          <div className="grid place-items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-red-100   "></div>
            <h2 className="font-bold text-xl">Tonny Hensley</h2>
            <h4 className="text-black">Customer</h4>
          </div>
        </div>
        <div className=" grid w-full place-items-center gap-10 px-6 py-2 border-[14px] rounded-2xl  hover:border-[#609E45] hover:text-[#609E45] hover:bg-black hover:bg-opacity-10 ">
          <BiSolidQuoteAltLeft className="p-1 text-4xl rounded-full" />
          <p className=" text-center text-black">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humor, or randomized.
          </p>
          <div className="grid place-items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-red-100   "></div>
            <h2 className="font-bold text-xl">Victoria Roach</h2>
            <h4 className="text-black">Customer</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
