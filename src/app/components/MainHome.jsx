import React from "react";
import Image from "next/image";
import { CiDeliveryTruck } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";

import g1 from "@/app/assets/grocery/g1.png";
import g2 from "@/app/assets/grocery/g2.png";
import gd from "@/app/assets/grocery/gd.png";
import Link from "next/link";

const MainHome = () => {
  return (
    <div className="font-Poppins grid md:flex md:justify-end gap-10 py-10 relative px-[10%] h-full bg-[url('../../public/main.png')] bg-pink-50 bg-no-repeat bg-cover">
      <Image src={gd} alt="" className="absolute w-[20%] opacity-60 bottom-0 left-0 z-0" />
      <div className="w-[100%] md:w[45%] md:py-20 grid gap-6 z-10">
        <h2 className="text-white bg-[#609E45] w-fit px-4 py-1 rounded-md ">
          We are more then faster
        </h2>
        <h1 className="font-semibold text-3xl md:text-6xl text-[#609E45]">
          The right store with The right Price
        </h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amen, consectetur adipescent alit, sed do
          eiusmod tempor incident ut labored et dolore magna aliquant. Et
          ejecta's quiz.
        </p>
        <Link
          href={"/ourProductese"}
          className="text-white bg-[#EF682E] px-4 py-2 w-fit rounded-md"
        >
          shop Now
        </Link>
      </div>
      <div className="relative w-[100%] md:w[35%] h-60 sm:h-96 md:h-auto ">
        <div className="absolute left-0 top-0 w-[49%] h-[70%]  rounded-full border-dashed border-2 border-[#EF682E]">
          <Image src={g1} alt="" className=" w-full h-full p-1 rounded-full" />
        </div>
        <div className="absolute right-0 bottom-0 w-[49%] h-[70%]  rounded-full border-dashed border-2 border-[#EF682E]">
          <Image src={g2} alt="" className=" w-full h-full p-1 rounded-full" />
        </div>
        <div className="absolute bg-white w-[50%] md:w-[25%] p-2 text-center md:top-[10%] left-[50%]  translate-x-[-50%]">
          Stay home & get your daily needs
          <CiDeliveryTruck className="text-[#609E45] bg-[#609E4520] rounded-full h-[40px] w-[40px] ml-[50%] translate-x-[-50%] p-2" />
        </div>
        <div className="absolute flex gap-2 bg-white w-fit p-2 items-center h-fit bottom-0 md:bottom-[10%] left-[50%] translate-x-[-50%]">
          <AiOutlineLike className="text-[#609E45] bg-[#609E4520] rounded-full h-[40px] w-[40px] p-2" />
          Best quality products
        </div>
      </div>
    </div>
  );
};

export default MainHome;
