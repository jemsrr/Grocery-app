import Image from "next/image";
import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";
import gd from "@/app/assets/grocery/gd.png";
import pd from "@/app/assets/productes/pd.png";
import pi5 from "@/app/assets/partner/pi5.png";
import pi6 from "@/app/assets/partner/pi6.png";
import pi7 from "@/app/assets/partner/pi7.png";
import pi8 from "@/app/assets/partner/pi8.png";
import pi9 from "@/app/assets/partner/pi9.png";

import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";

const BlogDetail = () => {
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
            Read our news and blogs
          </h1>
          <h4>
            <Link href={"/"}>Home</Link> - <Link href={"/blog"}>Blogs</Link> -{" "}
            <span className="text-[#EF682E]">Blog Detail</span>
          </h4>
        </div>
      </div>
      <div className="px-[5%] md:px-[10%] py-20 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-3 grid gap-10">
          <div className="relative w-full h-80">
            <Image src={pi5} alt="" className="w-fit h-80" />
            <h1 className="absolute bottom-6 left-6 right-6 bg-white rounded-md opacity-90 text-opacity-20 p-2">
              Date: 23 Janm, 2022 | Posted By: Adam Cole | Tags: Grocery,
              Vegetable, Fruits
            </h1>
          </div>
          <div className="grid gap-6">
            <h1 className="font-bold text-3xl">
              Reasons to Include Organic Fennel in Your Diet
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. what is Lorem Ipsum has been the industry{"\u0027"}s standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley is of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into is
              this electronic typesetting, remaining essentially unchanged. It
              was popularised in the 1960s with the release of Letrasetis this
              sheets containing Lorem Ipsum passages, and more recently with
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. what is Lorem Ipsum has been the industry{"\u0027"}s standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley is of type and scrambled it to make a type specimen book.
            </p>
            <div className="grid md:grid-cols-5 gap-6">
              <Image src={pi8} alt="" className="md:col-span-2 h-full" />
              <Image src={pi7} alt="" className="md:col-span-3 h-full" />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. what is Lorem Ipsum has been the industry{"\u0027"}s standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley is of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap.
            </p>
            <h2 className="font-semibold text-2xl">Any Test Style Here</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. what is Lorem Ipsum has been the industry{"\u0027"}s standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley is of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into is
              this electronic typesetting, remaining essentially unchanged. It
              was popularised in the 1960s with the release of Letrasetis this
              sheets containing Lorem Ipsum passages, and more recently with
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className="grid md:grid-cols-2">
              <div className="flex justify-start gap-2 items-center">
                <FiCheckCircle className="bg-[#609E4520] text-[#609E45] rounded-full p-2 w-10 h-10" />
                <h2 className="font-medium">
                  Emergency response time is one hour.
                </h2>
              </div>
              <div className="flex justify-start gap-2 items-center">
                <FiCheckCircle className="bg-[#609E4520] text-[#609E45] rounded-full p-2 w-10 h-10" />
                <h2 className="font-medium">Emergency response time</h2>
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
              <div className="flex justify-start gap-2 items-center">
                <FiCheckCircle className="bg-[#609E4520] text-[#609E45] rounded-full p-2 w-10 h-10" />
                <h2 className="font-medium">Our service philosophy </h2>
              </div>
              <div className="flex justify-start gap-2 items-center">
                <FiCheckCircle className="bg-[#609E4520] text-[#609E45] rounded-full p-2 w-10 h-10" />
                <h2 className="font-medium">
                  Our service philosophy is proactive.{" "}
                </h2>
              </div>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. what is Lorem Ipsum has been the industry{"\u0027"}s standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley is of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap.
            </p>
            <div className="flex md:gap-4 items-center p-2 bg-[#609E4520]">
              <h1 className="font-medium md:text-xl ">Share this Article</h1>
              <div className="flex justify-end items-center md:gap-1 md:text-xl font-bold">
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
            <h2 className="font-bold text-2xl">0 Comments</h2>
            <form className="grid gap-2 bg-[#609E4520] p-2 md:p-10">
              <label htmlFor="">Full Name</label>
              <input
                type="text"
                placeholder="Full Name"
                className="p-2 rounded-lg border-2 hover:border-[#609E45]"
              />
              <label htmlFor="">Phone Number</label>
              <input
                type="text"
                placeholder="Phone Number"
                className="p-2 rounded-lg border-2 hover:border-[#609E45]"
              />
              <label htmlFor="">Email Address</label>
              <input
                type="text"
                placeholder="Enter ypur email"
                className="p-2 rounded-lg border-2 hover:border-[#609E45]"
              />
              <label htmlFor="">Write a Message ...</label>
              <textarea
                placeholder="Write a Message "
                className="p-2 rounded-lg border-2 hover:border-[#609E45]"
                cols="30"
                rows="5"
              ></textarea>

              <button className="text-white font-bold bg-[#609E45] p-4 rounded-md w-fit">
                Submit Now
              </button>
            </form>
          </div>
        </div>
        <div className="md:col-span-1 ">
          <div className=" grid gap-2 p-4 bg-[#609E4520] rounded-md">
            <h1 className="font-bold text-xl text-[#609E45]">Categories</h1>
            <hr className="h-1 " />
            <div className="grid gap-2">
              <div className="flex justify-between items-center">
                <h2 className="hover:text-[#609E45]">Grocery</h2>{" "}
                <h3 className="px-2 bg-[#609E4520] hover:text-white hover:bg-[#609E45] rounded-full">
                  5
                </h3>
              </div>
              <div className="flex justify-between items-center">
                <h2 className="hover:text-[#609E45]">Organic Vegetables</h2>{" "}
                <h3 className="px-2 bg-[#609E4520] hover:text-white hover:bg-[#609E45] rounded-full">
                  3
                </h3>
              </div>
              <div className="flex justify-between items-center">
                <h2 className="hover:text-[#609E45]">Fresh Food</h2>{" "}
                <h3 className="px-2 bg-[#609E4520] hover:text-white hover:bg-[#609E45] rounded-full">
                  3
                </h3>
              </div>
              <div className="flex justify-between items-center">
                <h2 className="hover:text-[#609E45]">Online Store</h2>{" "}
                <h3 className="px-2 bg-[#609E4520] hover:text-white hover:bg-[#609E45] rounded-full">
                  2
                </h3>
              </div>
              <div className="flex justify-between items-center">
                <h2 className="hover:text-[#609E45]">Fresh Fruits</h2>{" "}
                <h3 className="px-2 bg-[#609E4520] hover:text-white hover:bg-[#609E45] rounded-full">
                  4
                </h3>
              </div>
              <div className="flex justify-between items-center">
                <h2 className="hover:text-[#609E45]">Online Shopping</h2>{" "}
                <h3 className="px-2 bg-[#609E4520] hover:text-white hover:bg-[#609E45] rounded-full">
                  1
                </h3>
              </div>
              <div className="flex justify-between items-center">
                <h2 className="hover:text-[#609E45]">Fresh Dairy Products</h2>{" "}
                <h3 className="px-2 bg-[#609E4520] hover:text-white hover:bg-[#609E45] rounded-full">
                  1
                </h3>
              </div>
              <div className="flex justify-between items-center">
                <h2 className="hover:text-[#609E45]">Organic</h2>{" "}
                <h3 className="px-2 bg-[#609E4520] hover:text-white hover:bg-[#609E45] rounded-full">
                  1
                </h3>
              </div>
              <div className="flex justify-between items-center">
                <h2 className="hover:text-[#609E45]">Grocery</h2>{" "}
                <h3 className="px-2 bg-[#609E4520] hover:text-white hover:bg-[#609E45] rounded-full">
                  5
                </h3>
              </div>
            </div>
          </div>
          <div className=" grid gap-2 p-4 bg-[#609E4520] rounded-md my-10">
            <h1 className="font-bold text-xl text-[#609E45]">Tags</h1>
            <hr className="h-1 " />
            <div className="flex flex-wrap gap-2">
              <h1 className="px-4 py-2 bg-[#609E4520] rounded-lg hover:bg-[#609E45] hover:text-white w-fit">
                Grocery
              </h1>
              <h1 className="px-4 py-2 bg-[#609E4520] rounded-lg hover:bg-[#609E45] hover:text-white w-fit">
                Fruits
              </h1>
              <h1 className="px-4 py-2 bg-[#609E4520] rounded-lg hover:bg-[#609E45] hover:text-white w-fit">
                bakery
              </h1>
              <h1 className="px-4 py-2 bg-[#609E4520] rounded-lg hover:bg-[#609E45] hover:text-white w-fit">
                Online Shopping
              </h1>
              <h1 className="px-4 py-2 bg-[#609E4520] rounded-lg hover:bg-[#609E45] hover:text-white w-fit">
                Organic
              </h1>
              <h1 className="px-4 py-2 bg-[#609E4520] rounded-lg hover:bg-[#609E45] hover:text-white w-fit">
                Vegetables
              </h1>
              <h1 className="px-4 py-2 bg-[#609E4520] rounded-lg hover:bg-[#609E45] hover:text-white w-fit">
                Dairy Items
              </h1>
              <h1 className="px-4 py-2 bg-[#609E4520] rounded-lg hover:bg-[#609E45] hover:text-white w-fit">
                Food
              </h1>
            </div>
          </div>
          <div className=" grid gap-2 p-4 bg-[#609E4520] rounded-md my-10">
            <h1 className="font-bold text-xl text-[#609E45]">Related Blogs</h1>
            <hr className="h-1 " />
            <div className="grid gap-4">
              <div className="flex justify-start gap-4">
                <div className="w-[20%] md:w-[60%]">
                  <Image
                    src={pi9}
                    alt=""
                    className="w-full h-full bg-[#609E4520] rounded-lg"
                  />
                </div>
                <h1 className=" font-semibold flex items-center">
                  Discover a new way to shop for fresh & healthy food!
                </h1>
              </div>
              <div className="flex justify-start gap-4">
                <div className=" w-[20%] md:w-[60%]">
                  <Image
                    src={pi8}
                    alt=""
                    className="w-full h-full bg-[#609E4520] rounded-lg"
                  />
                </div>
                <h1 className=" font-semibold flex items-center">
                  Healthy Snacks to Get You Through the Work Day
                </h1>
              </div>
              <div className="flex justify-start gap-4">
                <div className=" w-[20%] md:w-[60%]">
                  <Image
                    src={pi7}
                    alt=""
                    className="w-full h-full bg-[#609E4520] rounded-lg"
                  />
                </div>
                <h1 className=" font-semibold flex items-center">
                  Common Challenges Faced by Online Grocery Businesses
                </h1>
              </div>
              <div className="flex justify-start gap-4">
                <div className=" w-[20%] md:w-[60%]">
                  <Image
                    src={pi6}
                    alt=""
                    className="w-full h-full bg-[#609E4520] rounded-lg"
                  />
                </div>
                <h1 className=" font-semibold flex items-center">
                  8 Must Have Tips for Online Grocery Shopping Right Now
                </h1>
              </div>
            </div>
          </div>
          <div className=" relative min-h-[500px] bg-[url('../../public/pd.png')] bg-no-repeat bg-cover bg-[#609E45] text-white rounded-md">
            <div className="grid gap-2 place-items-center text-center p-2">
              <h2 className="font-bold text-xl">Free Delivery Over $50.00</h2>
              <p className="text-xs">
                Shop $50.00+ Producrs and Get Free Delivery Anywhere
              </p>
              <button className="border-2 px-4 py-2 font-bold text-xl rounded-md hover:bg-white hover:text-[#EF682E] z-10">
                Shop Now
              </button>
            </div>
            <Image src={pd} alt="" className="absolute w-[70%] sm:w-[50%] md:w-full bottom-0 left-[50%] translate-x-[-50%] -z-0 opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
