import Image from "next/image";
import Link from "next/link";
import gd from "@/app/assets/grocery/gd.png";
import ty from "@/app/assets/thankYou.png";
import { FaFaceSmileBeam } from "react-icons/fa6";

const ThankYou = () => {
  return (
    <div className="font-Poppins">
      <div className="relative min-h-64 grid place-content-center content-center text-center px-[5%] h-full bg-[url('../../public/main.png')] bg-pink-50 bg-no-repeat bg-cover">
        <Image
          src={gd}
          alt=""
          className="absolute w-[20%] bottom-0 left-0 z-0"
        />
        <div className="py-[35%]">
          <h1 className="text-3xl font-bold text-[#609E45]">Thank You Page</h1>
          <h4>
            <Link href={"/"}>Home</Link> -{" "}
            <span className="text-[#EF682E]">Thank You</span>
          </h4>
        </div>
      </div>
      <div className="bg-[url('../../public/tybg.png')] bg-no-repeat bg-cover">
        <div className="text-center grid place-items-center gap-6 py-20">
          <Image src={ty} alt="" className="w-[60%] sm:w-[30%] lg:w-[20%]" />
          <h1 className="font-bold text-3xl text-[#609E45] ">
            We Have Received Your Payment Successfully.{" "}
          </h1>
          <p className=" w-[90%] md:w-[50%] text-xl">
            It is a long established fact that a reader will be distracted b the
            readable content of a page when looking at its layout.
          </p>
          <Link
            href={"/ourProductese"}
            className="text-white text-xl font-bold bg-[#609E45] p-4 rounded-md"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
