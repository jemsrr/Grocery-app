"use client";

import Image from "next/image";
import Link from "next/link";
import Data from "@/lib/MOCK_DATA.json";
import gd from "@/app/assets/grocery/gd.png";
import pd1 from "@/app/assets/productes/pd1.png";
import { AiFillStar } from "react-icons/ai";
import { FiCheckCircle, FiShoppingBag } from "react-icons/fi";

const ProductDetail = () => {
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
            Our organic products
          </h1>
          <h4>
            <Link href={"/"}>Home</Link> -{" "}
            <span className="text-[#EF682E]">Shop</span>
          </h4>
        </div>
      </div>
      <div className="px-[5%] md:px-[10%] py-20">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className=" lg:col-span-1 grid gap-2 ">
            <Image src={pd1} alt="" className="w-full rounded-lg" />
            <div className="hidden lg:flex justify-between gap-2">
              <div className="w-full rounded-lg">
                <Image src={pd1} alt="" className="transform scale-x-[-1]" />
              </div>
              <div className="w-full rounded-lg">
                <Image
                  src={pd1}
                  alt=""
                  className="transform rotate-180 scale-x-[-1]"
                />
              </div>
              <div className="w-full rounded-lg">
                <Image src={pd1} alt="" className="transform " />
              </div>
              <div className="w-full rounded-lg">
                <Image src={pd1} alt="" className="transform rotate-180" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 grid gap-4 bg-[#609E4520] rounded-lg p-2 md:p-10">
            <div className="flex justify-between items-center">
              <h1>
                Availability: <span className="text-[#609E45]">In Stock</span>
              </h1>
              <div className="flex items-center">
                <AiFillStar className="text-yellow-400" />
                <AiFillStar className="text-yellow-400" />
                <AiFillStar className="text-yellow-400" />
                <AiFillStar className="text-yellow-400" />
                <AiFillStar className="text-yellow-400" />( 10 Review )
              </div>
            </div>
            <h1 className="font-bold text-xl">Fresh Yellow Orange </h1>
            <div className="flex items-center gap-2">
              <del>$10.00</del>
              <h1 className="font-semibold">$08.00</h1>
            </div>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, words which don{"\u0027"}t look even slightly
              believable.There are many.
            </p>
            <hr />
            <div className="grid lg:flex items-center gap-2">
              <div className="grid gap-1">
                <label>QTY</label>
                <input
                  type="number"
                  defaultValue="1"
                  className="p-2 rounded-lg w-fit"
                />
              </div>
              <div className="grid gap-1">
                <label>size</label>
                <select name="size" className="p-2 rounded-lg w-fit">
                  <option value="Small">Small</option>
                  <option value="Midium">Midium</option>
                  <option value="Large">Large</option>
                </select>
              </div>
              <div className="grid gap-1">
                <label>Weight</label>
                <input
                  type="number"
                  defaultValue="1"
                  className="p-2 rounded-lg w-fit"
                />
              </div>
            </div>
            <hr />
            <button className="text-white flex items-center gap-2 w-fit font-bold bg-[#609E45] p-4 rounded-md">
              <FiShoppingBag />
              Add to Cart
            </button>
            <h1>
              SKU: <span className="text-[#EF682E]">D2300-2</span>
            </h1>
            <h1>
              CATEGORIES:{" "}
              <span className="text-[#EF682E]">
                CLOTHING, DEAL OF WEEK, WOMEN
              </span>
            </h1>
            <h1>
              TAGS: <span className="text-[#EF682E]">Hot, Trend</span>
            </h1>
          </div>
        </div>
        <div className="my-10">
          <div className="flex items-center gap-1 lg:gap-4 text-xl lg:font-bold">
            <h1 className="hover:text-[#609E45] hover:underline">
              Description
            </h1>
            <h1 className="hover:text-[#609E45] hover:underline">Review (1)</h1>
            <h1 className="hover:text-[#609E45] hover:underline">
              Additional information
            </h1>
          </div>
          <div className="bg-[#609E4520] p-2 md:p-10 rounded-lg grid gap-2 mt-6">
            <p>
              Lower temperature washes and delicate spin cycles are gentler on
              garment, helping to maintain the color, shape and structure of the
              fabric. At the same time it reduces energy consumption that is
              used in care processes. are gentler on garment, helping to
              maintain the color.
            </p>
            <h2 className="font-bold text-xl text-[#609E45]">Benefits</h2>
            <div className="grid md:grid-cols-2">
              <div className="flex justify-start gap-2 items-center">
                <FiCheckCircle className="bg-[#609E4520] text-[#609E45] rounded-full p-2 w-10 h-10" />
                <h2 className="font-medium">
                  Emergency response time is one hour or less guaranteed.
                </h2>
              </div>
              <div className="flex justify-start gap-2 items-center">
                <FiCheckCircle className="bg-[#609E4520] text-[#609E45] rounded-full p-2 w-10 h-10" />
                <h2 className="font-medium">
                  Emergency response time is one hour or less guaranteed.
                </h2>
              </div>
              <div className="flex justify-start gap-2 items-center">
                <FiCheckCircle className="bg-[#609E4520] text-[#609E45] rounded-full p-2 w-10 h-10" />
                <h2 className="font-medium">
                  We want you to pletely satisfied
                </h2>
              </div>
              <div className="flex justify-start gap-2 items-center">
                <FiCheckCircle className="bg-[#609E4520] text-[#609E45] rounded-full p-2 w-10 h-10" />
                <h2 className="font-medium">We want you to be completely</h2>
              </div>
              <div className="flex justify-start gap-2 items-center">
                <FiCheckCircle className="bg-[#609E4520] text-[#609E45] rounded-full p-2 w-10 h-10" />
                <h2 className="font-medium">
                  You deserve to have your in plain English.
                </h2>
              </div>
              <div className="flex justify-start gap-2 items-center">
                <FiCheckCircle className="bg-[#609E4520] text-[#609E45] rounded-full p-2 w-10 h-10" />
                <h2 className="font-medium">
                  Your questions answered in plain English.{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-2">
          <h1 className="font-bold text-xl">Related Product</h1>
          <hr className="w-[5%] h-1 bg-[#609E45]" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {Data.Vegetable.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="relative grid place-items-center gap-2 p-2 pb-10 rounded-md border-[#609E4570] hover:border-2 "
              >
                <img
                  src={item.photo_url}
                  alt=""
                  onError={(e) => (e.target.src = "/logo.png")}
                  className="p-4 w-full h-44 bg-[#609E4520] rounded-lg"
                />
                <h1 className=" text-[#609E45] text-2xl font-bold">
                  {item.name}
                </h1>
                <div className="flex justify-center gap-3">
                  <del>${item.price + 5}</del>
                  <h4>${item.price}</h4>
                </div>
                <div className="flex justify-center gap-[2px] text-2xl text-yellow-400">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
