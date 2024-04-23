import Image from "next/image";
import Link from "next/link"
import b1 from "@/app/assets/banner/b1.png";
import b2 from "@/app/assets/banner/b2.png";


const Banner = () => {
  return (
    <div className=" relative font-Poppins px-[10%] bg-[url('../../public/banner.png')] bg-[#609E45] text-white bg-no-repeat bg-cover ">
      <Image src={b1} alt="" className="absolute bottom-0 left-0 w-[25%] z-0 opacity-60" />
      <div className="relative grid place-content-center place-items-center gap-4 py-[10%] z-10">
        <h3>Awesome Products</h3>
        <h1 className="font-bold text-2xl text-center">Get Up to 15% Off Vegetables</h1>
        <h2 className="text-xl text-center">We supply hight quality organic product</h2>
        <div className="flex justify-center gap-4">
          <Link href={"/ourProductese"} className=" border-2 px-4 py-2 rounded-md hover:bg-white hover:text-[#609E45]">
            Shop Now
          </Link>
          <Link href={"/contactUs"} className="border-2 px-4 py-2 rounded-md hover:bg-white hover:text-[#609E45]">
            Contact Us
          </Link>
        </div>
      </div>
      <Image src={b2} alt="" className="absolute bottom-0 right-0 w-[25%] z-0 opacity-60" />
    </div>
  );
};

export default Banner;
