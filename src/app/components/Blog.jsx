import Image from "next/image";
import pi1 from "@/app/assets/partner/pi1.png";
import pi2 from "@/app/assets/partner/pi2.png";
import pi3 from "@/app/assets/partner/pi3.png";
import {
  AiOutlineArrowRight,
  AiOutlineFieldTime,
  AiOutlineUser,
} from "react-icons/ai";
import Link from "next/link";
const Blog = () => {
  return (
    <div className="px-[10%] py-20 bg-[url('../../public/partner.png')] bg-pink-50 bg-no-repeat bg-cover">
      <div>
        <div className="grid place-items-center gap-2">
          <h2 className="text-white bg-[#609E45] w-fit px-4 py-1 rounded-md ">
            Latest News & Blogs
          </h2>
          <h1 className="sm:w-[60%] text-3xl text-center font-bold md:text-6xl text-[#EF682E]">
            Most Popular News & Top Blogs
          </h1>
        </div>
        <div className="grid sm:grid-cols-3 py-10 gap-10">
          <div className="grid gap-4 border-2 w-full p-2 hover:border-[#EF682E] ">
            <div className="transition hover:animate-bounce relative">
              <Image src={pi1} alt="" className="w-full hover:opacity-70" />
              <AiOutlineArrowRight className="absolute w-10 h-10 text-white p-2 bg-[#EF682E] rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
            </div>
            <div className="p-2">
              <h2 className="font-bold ">
                Reasons to Include Organic Fennel in Your Diet
              </h2>
              <p>
                Lorem ipsum dolor sit nad amet, consectetur adipiscing elit.
              </p>
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
              <Image src={pi2} alt="" className="w-full hover:opacity-70" />
              <AiOutlineArrowRight className="absolute w-10 h-10 text-white p-2 bg-[#EF682E] rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
            </div>
            <div className="p-2">
              <h2 className="font-bold ">
                Reasons to Include Organic Fennel in Your Diet
              </h2>
              <p>
                Lorem ipsum dolor sit nad amet, consectetur adipiscing elit.
              </p>
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
              <p>
                Lorem ipsum dolor sit nad amet, consectetur adipiscing elit.
              </p>
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
        <div className="flex justify-center">
          <Link href={"/blog"} className="border-2 border-[#EF682E] text-[#EF682E] px-4 py-2 font-semibold text-xl rounded-md hover:text-white hover:bg-[#EF682E]">
            View All Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
