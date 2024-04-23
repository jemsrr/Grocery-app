"use client";
import Image from "next/image";
import pa1 from "@/app/assets/partner/pa1.png";
import pa2 from "@/app/assets/partner/pa2.png";
import pa3 from "@/app/assets/partner/pa3.png";
import pa4 from "@/app/assets/partner/pa4.png";
import pa5 from "@/app/assets/partner/pa5.png";
import pa6 from "@/app/assets/partner/pa6.png";

const Partner = () => {
  return (
    <div className="px-[10%] py-20 bg-[url('../../public/partner.png')] bg-pink-50 bg-no-repeat bg-cover">
      <div className="sm:flex justify-between my-20">
        <div className="sm:w-[40%] flex flex-col gap-4 justify-center">
          <h2 className="text-white bg-[#609E45] w-fit px-4 py-1 rounded-md ">
            Our Trusted Partner
          </h2>
          <h1 className="font-bold text-4xl text-[#EF682E]">
            We have 523+ more trusted partner
          </h1>
          <p className="text-xl">
            There are many variations of passages of Lorem Ipsum available, but
            the majority.
          </p>
          <button className="text-white bg-[#EF682E] px-4 py-2 w-fit rounded-md">
            Become a Partner
          </button>
        </div>
        <div className="grid place-content-center grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4  sm:w-[60%] py-10 sm:p-10">
          <Image src={pa1} alt="" className="w-full" />
          <Image src={pa2} alt="" className="w-full" />
          <Image src={pa3} alt="" className="w-full" />
          <Image src={pa4} alt="" className="w-full" />
          <Image src={pa5} alt="" className="w-full" />
          <Image src={pa6} alt="" className="w-full" />
          <Image src={pa1} alt="" className="w-full" />
          <Image src={pa2} alt="" className="w-full" />
          <Image src={pa3} alt="" className="w-full" />
          <Image src={pa4} alt="" className="w-full" />
          <Image src={pa5} alt="" className="w-full" />
          <Image src={pa6} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Partner;
