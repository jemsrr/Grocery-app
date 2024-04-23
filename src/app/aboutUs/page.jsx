import Image from "next/image";
import Link from "next/link";
import gd from "@/app/assets/grocery/gd.png";
import Feature from "../components/Feature";
import Banner from "../components/Banner";
import Testimonial from "../components/Testimonial";
import DlMobile from "../components/DlMobile";
import Partner from "../components/Partner";
import au from "@/app/assets/aboutUs/au.png";
import { FiCheckCircle, FiUser } from "react-icons/fi";
import { FaDotCircle } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="font-Poppins">
      <div className="relative grid place-content-center content-center text-center px-[5%] h-full bg-[url('../../public/main.png')] bg-pink-50 bg-no-repeat bg-cover">
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
            <span className="text-[#EF682E]">About Us</span>
          </h4>
        </div>
      </div>
      <div className=" grid sm:flex justify-between px-[10%] py-20">
        <Image src={au} alt="" className="sm:w-[50%] p-5" />
        <div className="sm:w-[50%] p-5 grid gap-4">
          <h1 className="font-bold text-3xl">
            We believe in pure and organic quality Products
          </h1>
          <p className="border-l-4 border-[#609E45] pl-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            inta nonumy eirmod tempor invidunt ut labore. Lorem ipsum dolor sit
            amet, consetetur sadipscing elitr, sed diam.
          </p>
          <div className="flex justify-between items-start gap-4">
            <div>
              <h2 className="text-xl font-bold">Organic Products</h2>
              <p>
                There are many variations passages Lorem Ipsum available, but we
                are the majority have suffered alteration.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold">50+ Delivery Partener</h2>
              <p>
                There are many variations passages Lorem Ipsum available, but we
                are the majority have suffered alteration.
              </p>
            </div>
          </div>
          <div className="grid gap-2">
            <div className="flex justify-start gap-2 items-center">
              <FiCheckCircle className="bg-[#609E4520] text-[#609E45] rounded-full p-2 w-10 h-10" />
              <h2 className="font-medium">
                Emergency response time is one hour or less guaranteed.
              </h2>
            </div>
            <div className="flex justify-start gap-2 items-center">
              <FiCheckCircle className="bg-[#609E4520] text-[#609E45] rounded-full p-2 w-10 h-10" />
              <h2 className="font-medium">
                Until the eleifend elit is a lot of great facilities.
              </h2>
            </div>
            <div className="flex justify-start gap-2 items-center">
              <FiCheckCircle className="bg-[#609E4520] text-[#609E45] rounded-full p-2 w-10 h-10" />
              <h2 className="font-medium">Lorem Ipsum is simply dummy text</h2>
            </div>
          </div>
          <div className="flex justify-start items-center gap-4">
            <FiUser className="border-2 border-[#609E45] p-2 rounded-full w-14 h-14 " />
            <div>
              <h2 className="font-bold text-xl">Adam Andreson</h2>
              <p className="text-xs">CEO and Founder</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#EF682E20] bg-[url('../../public/launch.png')] bg-no-repeat bg-cover px-[10%] py-20 grid sm:place-items-center gap-10">
        <div className="font-semibold text-xl sm:text-center p-2 sm:p-10 bg-white w-[70%] sm:w-[40%] rounded-lg">
          Launched our product on 28 Nov 2013
        </div>
        <button className=" w-fit border-2 px-4 py-2 rounded-md text-white bg-[#609E45]">
          Lounch
        </button>
        <div className=" bg-[url('../../public/line.png')] bg-no-repeat sm:bg-center ml-[8%] sm:ml-0">
          <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-center sm:gap-8">
            <div className="grid sm:place-items-end sm:text-end mx-5 sm:mx-0 w-[100%] sm:w-[50%] gap-2 bg-white rounded-xl p-6 border-2 border-[#EF682E50]">
              <hr className="w-[30%] h-1 bg-[#EF682E]" />
              <h1 className="font-semibold">Started Our Online Store</h1>
              <p className="opacity-60">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece.
              </p>
            </div>
            <FaDotCircle className="hidden sm:inline font-black text-2xl text-[#EF682E]" />
            <div className="flex justify-start font-bold text-xl text-[#EF682E] p-6 text-start sm:w-[50%]">
              <FaDotCircle className="inline sm:hidden absolute left-[15%] translate-x-[-10%] font-black text-xl text-[#EF682E]" />
              <h1>20 November,2013</h1>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-8">
            <div className="flex justify-start sm:justify-end font-bold text-xl text-[#609E45] p-6 sm:text-end w-[50%]">
              <FaDotCircle className="inline sm:hidden absolute left-[15%] translate-x-[-10%] font-black text-xl text-[#609E45]" />
              <h1>05 December,2015</h1>
            </div>
            <FaDotCircle className="hidden sm:inline font-black text-2xl text-[#609E45]" />
            <div className="grid sm:place-items-start  sm:text-start mx-5 sm:mx-0 w-[100%] sm:w-[50%] gap-2 bg-white rounded-xl p-6 border-2 border-[#609E4550]">
              <hr className="w-[30%] h-1 bg-[#609E45]" />
              <h1 className="font-semibold">Hired 20 employee</h1>
              <p className="opacity-60">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-center sm:gap-8">
            <div className="grid sm:place-items-end sm:text-end mx-5 sm:mx-0 w-[100%] sm:w-[50%] gap-2 bg-white rounded-xl p-6 border-2 border-[#EF682E50]">
              <hr className="w-[30%] h-1 bg-[#EF682E]" />
              <h1 className="font-semibold">Lounched 25+ more Products</h1>
              <p className="opacity-60">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece.
              </p>
            </div>
            <FaDotCircle className="hidden sm:inline font-black text-2xl text-[#EF682E]" />
            <div className="flex justify-start font-bold text-xl text-[#EF682E] p-6 text-start w-[50%]">
              <FaDotCircle className="inline sm:hidden absolute left-[15%] translate-x-[-10%] font-black text-xl text-[#EF682E]" />
              <h1>07 June,2016</h1>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-8">
            <div className="flex justify-start sm:justify-end font-bold text-xl text-[#609E45] p-6 sm:text-end w-[50%]">
              <FaDotCircle className="inline sm:hidden absolute left-[15%] translate-x-[-10%] font-black text-xl text-[#609E45]" />
              <h1>13 August ,2020</h1>
            </div>
            <FaDotCircle className="hidden sm:inline font-black text-2xl text-[#609E45]" />
            <div className="grid sm:place-items-start  sm:text-start mx-5 sm:mx-0 w-[100%] sm:w-[50%] gap-2 bg-white rounded-xl p-6 border-2 border-[#609E4550]">
              <hr className="w-[30%] h-1 bg-[#609E45]" />
              <h1 className="font-semibold">Open Second Store in NYC</h1>
              <p className="opacity-60">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece.
              </p>
            </div>
          </div>
        </div>
        <button className="w-fit border-2 px-4 py-2 rounded-md text-white bg-[#EF682E]">
          Now
        </button>
      </div>
      <Feature />
      <Banner />
      <Testimonial />
      <DlMobile />
      <Partner />
    </div>
  );
};

export default AboutUs;
