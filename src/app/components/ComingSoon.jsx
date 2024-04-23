import Image from "next/image";
import csbg from "@/app/assets/csoon/csbg.png";
import logo from "../assets/logo.png";
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter, BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

const ComingSoon = () => {
  return (
    <div className="relative md:flex justify-between">
      <div className="md:w-[50%] px-[5%] md:px-[10%] py-8 md:py-20 grid gap-6">
        <div className="flex justify-start gap-2 items-center">
          <Image
            src={logo}
            alt="logo"
            className="bg-[#609E45] rounded-full p-3 w-[59px]"
          />
          <h1 className="font-[700] text-[28px] text-[#609E45]">
            Organic <span className="font-[275] text-[#EF682E]">Grocery</span>
          </h1>
        </div>
        <div className="grid gap-4">
          <h2 className="text-white bg-[#609E45] w-fit px-4 py-1 rounded-md ">
            Coming Soon
          </h2>
          <h1 className="font-bold text-3xl text-[#EF682E]">
            All Good Things Come to Those who Wait...
          </h1>
          <p className="">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC
            Lorem Ipsum.
          </p>
        </div>
        <div>
          <h4>Notify Me </h4>
          <form className="sm:flex justify-between gap-4 py-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-4 rounded-md w-full"
            />
            <button className="text-white font-bold w-fit bg-[#609E45] p-4 rounded-md">
              Submit
            </button>
          </form>
        </div>
        <div className="flex sm:gap-4 items-center ">
          <BiPhoneCall className=" sm:text-2xl font-bold text-[#609E45] bg-[#609E4520] rounded-xl p-2 h-[49px] w-[49px]" />
          <div>
            <h2>Call Us on</h2>
            <h2 className="sm:text-xl font-bold ">+44 123 456 7890</h2>
          </div>
        </div>
        <div className="flex sm:gap-4 items-center ">
          <AiOutlineMail className=" sm:text-2xl font-bold text-[#609E45] bg-[#609E4520] rounded-xl p-2 h-[49px] w-[49px]" />
          <div>
            <h2>Email Us</h2>
            <h2 className="sm:text-xl font-bold ">contact@troothemes.com</h2>
          </div>
        </div>
        <div className="flex sm:gap-4 items-center">
          <div className="flex items-center gap-1">
            <h1>Follow Us On</h1>
            <hr className="w-10 h-1 bg-black" />
          </div>
          <div className="flex justify-end items-center gap-2 text-xl font-bold">
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
      <div className="absolute top-0 bottom-0 md:relative md:w-[50%] bg-[#609E4520] grid place-content-center md:p-20 opacity-10 md:opacity-100">
        <Image src={csbg} alt="" />
      </div>
    </div>
  );
};

export default ComingSoon;
