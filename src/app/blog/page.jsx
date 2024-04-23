import Image from "next/image";
import Link from "next/link";
import gd from "@/app/assets/grocery/gd.png";
import pi1 from "@/app/assets/partner/pi1.png";
import pi2 from "@/app/assets/partner/pi2.png";
import pi3 from "@/app/assets/partner/pi3.png";
import pi4 from "@/app/assets/partner/pi4.png";
import pi5 from "@/app/assets/partner/pi5.png";
import pi6 from "@/app/assets/partner/pi6.png";
import pi7 from "@/app/assets/partner/pi7.png";
import pi8 from "@/app/assets/partner/pi8.png";
import pi9 from "@/app/assets/partner/pi9.png";

import {
  AiOutlineArrowRight,
  AiOutlineFieldTime,
  AiOutlineUser,
} from "react-icons/ai";

const blog = () => {
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
            <Link href={"/"}>Home</Link> -{" "}
            <span className="text-[#EF682E]">Blogs</span>
          </h4>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-10 py-20 px-[10%]">
        <Link href={"/blog/blogDetail"} className="grid gap-4 border-2 w-full p-2 hover:border-[#EF682E] ">
          <div className="transition hover:animate-bounce relative">
            <Image src={pi1} alt="" className="w-full hover:opacity-70" />
            <AiOutlineArrowRight className="absolute w-10 h-10 text-white p-2 bg-[#EF682E] rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
          </div>
          <div className="p-2">
            <h2 className="font-bold ">
              Reasons to Include Organic Fennel in Your Diet
            </h2>
            <p>Lorem ipsum dolor sit nad amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex justify-start items-center p-2 gap-2">
            <AiOutlineUser />
            <h3>Johnson doe</h3>
            |
            <AiOutlineFieldTime />
            <h3>08 Jan, 2023</h3>
          </div>
        </Link>
        <div className="grid gap-4 border-2 w-full p-2 hover:border-[#EF682E]">
          <div className="transition hover:animate-bounce relative">
            <Image src={pi2} alt="" className="w-full hover:opacity-70" />
            <AiOutlineArrowRight className="absolute w-10 h-10 text-white p-2 bg-[#EF682E] rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
          </div>
          <div className="p-2">
            <h2 className="font-bold ">
              Reasons to Include Organic Fennel in Your Diet
            </h2>
            <p>Lorem ipsum dolor sit nad amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex justify-start items-center p-2 gap-2">
            <AiOutlineUser />
            <h3>Johnson doe</h3>
            |
            <AiOutlineFieldTime />
            <h3>08 Jan, 2023</h3>
          </div>
        </div>
        <div className="grid gap-4 border-2 w-full p-2 hover:border-[#EF682E]">
          <div className="transition hover:animate-bounce relative">
            <Image src={pi3} alt="" className="w-full hover:opacity-70" />
            <AiOutlineArrowRight className="absolute w-10 h-10 text-white p-2 bg-[#EF682E] rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
          </div>
          <div className="p-2">
            <h2 className="font-bold ">
              Reasons to Include Organic Fennel in Your Diet
            </h2>
            <p>Lorem ipsum dolor sit nad amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex justify-start items-center p-2 gap-2">
            <AiOutlineUser />
            <h3>Johnson doe</h3>
            |
            <AiOutlineFieldTime />
            <h3>08 Jan, 2023</h3>
          </div>
        </div>
        <div className="grid gap-4 border-2 w-full p-2 hover:border-[#EF682E] ">
          <div className="transition hover:animate-bounce relative">
            <Image src={pi4} alt="" className="w-full hover:opacity-70" />
            <AiOutlineArrowRight className="absolute w-10 h-10 text-white p-2 bg-[#EF682E] rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
          </div>
          <div className="p-2">
            <h2 className="font-bold ">
              Why Online Grocery Shopping is Preferable Traditional Shopping?
            </h2>
            <p>Lorem ipsum dolor sit nad amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex justify-start items-center p-2 gap-2">
            <AiOutlineUser />
            <h3>Johnson doe</h3>
            |
            <AiOutlineFieldTime />
            <h3>08 Jan, 2023</h3>
          </div>
        </div>
        <div className="grid gap-4 border-2 w-full p-2 hover:border-[#EF682E]">
          <div className="transition hover:animate-bounce relative">
            <Image src={pi5} alt="" className="w-full hover:opacity-70" />
            <AiOutlineArrowRight className="absolute w-10 h-10 text-white p-2 bg-[#EF682E] rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
          </div>
          <div className="p-2">
            <h2 className="font-bold ">
              8 Major Advantages of Online Grocery Shopping
            </h2>
            <p>Lorem ipsum dolor sit nad amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex justify-start items-center p-2 gap-2">
            <AiOutlineUser />
            <h3>Johnson doe</h3>
            |
            <AiOutlineFieldTime />
            <h3>08 Jan, 2023</h3>
          </div>
        </div>
        <div className="grid gap-4 border-2 w-full p-2 hover:border-[#EF682E]">
          <div className="transition hover:animate-bounce relative">
            <Image src={pi6} alt="" className="w-full hover:opacity-70" />
            <AiOutlineArrowRight className="absolute w-10 h-10 text-white p-2 bg-[#EF682E] rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
          </div>
          <div className="p-2">
            <h2 className="font-bold ">
              Discover a new way to shop for fresh & healthy food!
            </h2>
            <p>Lorem ipsum dolor sit nad amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex justify-start items-center p-2 gap-2">
            <AiOutlineUser />
            <h3>Johnson doe</h3>
            |
            <AiOutlineFieldTime />
            <h3>08 Jan, 2023</h3>
          </div>
        </div>
        <div className="grid gap-4 border-2 w-full p-2 hover:border-[#EF682E] ">
          <div className="transition hover:animate-bounce relative">
            <Image src={pi7} alt="" className="w-full hover:opacity-70" />
            <AiOutlineArrowRight className="absolute w-10 h-10 text-white p-2 bg-[#EF682E] rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
          </div>
          <div className="p-2">
            <h2 className="font-bold ">
              Ways to Save Money & Time through Online Grocery Shopping
            </h2>
            <p>Lorem ipsum dolor sit nad amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex justify-start items-center p-2 gap-2">
            <AiOutlineUser />
            <h3>Johnson doe</h3>
            |
            <AiOutlineFieldTime />
            <h3>08 Jan, 2023</h3>
          </div>
        </div>
        <div className="grid gap-4 border-2 w-full p-2 hover:border-[#EF682E]">
          <div className="transition hover:animate-bounce relative">
            <Image src={pi8} alt="" className="w-full hover:opacity-70" />
            <AiOutlineArrowRight className="absolute w-10 h-10 text-white p-2 bg-[#EF682E] rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
          </div>
          <div className="p-2">
            <h2 className="font-bold ">
              8 Must Have Tips for Online Grocery Shopping Right Now
            </h2>
            <p>Lorem ipsum dolor sit nad amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex justify-start items-center p-2 gap-2">
            <AiOutlineUser />
            <h3>Johnson doe</h3>
            |
            <AiOutlineFieldTime />
            <h3>08 Jan, 2023</h3>
          </div>
        </div>
        <div className="grid gap-4 border-2 w-full p-2 hover:border-[#EF682E]">
          <div className="transition hover:animate-bounce relative">
            <Image src={pi9} alt="" className="w-full hover:opacity-70" />
            <AiOutlineArrowRight className="absolute w-10 h-10 text-white p-2 bg-[#EF682E] rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
          </div>
          <div className="p-2">
            <h2 className="font-bold ">
              10 Most Common Challenges Faced by Online Grocery Businesses
            </h2>
            <p>Lorem ipsum dolor sit nad amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex justify-start items-center p-2 gap-2">
            <AiOutlineUser />
            <h3>Johnson doe</h3>
            |
            <AiOutlineFieldTime />
            <h3>08 Jan, 2023</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blog;
