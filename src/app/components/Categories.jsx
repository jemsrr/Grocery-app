"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import c1 from "@/app/assets/Categories/c1.png";
import c2 from "@/app/assets/Categories/c2.png";
import c3 from "@/app/assets/Categories/c3.png";
import c4 from "@/app/assets/Categories/c4.png";
import c5 from "@/app/assets/Categories/c5.png";
import c6 from "@/app/assets/Categories/c6.png";
import ci from "@/app/assets/Categories/ci.png";

const Categories = () => {
  const router = useRouter();
  return (
    <div className="font-Poppins relative px-[10%] py-20 bg-[url('../../public/layer.png')] bg-no-repeat bg-cover">
      <div className="grid sm:flex sm:justify-between items-center sm:px-[10%]">
        <div className=" flex flex-col gap-4">
          <h2 className="text-white bg-[#609E45] w-fit px-4 py-1 rounded-md ">
            Hot Categories
          </h2>
          <h1 className="sm:w-[70%] font-semibold text-5xl text-[#EF682E]">
            Browse Our Categories
          </h1>
        </div>
        <p className="sm:w-[50%]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 pt-20 sm:py-20 ">
        <div
          onClick={() => router.push("/ourProductese")}
          className="group relative bg-white border-2 border-[#EF682E50] rounded-lg p-4 place-items-center grid hover:border-[#609E45]"
        >
          <Image src={c1} alt="" className="w-full h-24" />
          <h2 className="font-bold text-[20px] text-center">Vegetable</h2>
          <h3>25+ Products</h3>
          <div className="absolute top-[100%] translate-y-[-50%] hidden p-2 bg-[#EF682E] rounded-full text-white group-hover:block">
            <FaArrowRightLong />
          </div>
        </div>
        <div
          // onClick={() => setData(Data.fruits)}
          className="group relative bg-white border-2 border-[#EF682E50] rounded-lg p-4 place-items-center grid hover:border-[#609E45]"
        >
          <Image src={c2} alt="" className="w-full h-24" />
          <h2 className="font-bold text-[20px] text-center">Fresh Fruits</h2>
          <h3>85+ Products</h3>
          <div className="absolute top-[100%] translate-y-[-50%] hidden p-2 bg-[#EF682E] rounded-full text-white group-hover:block">
            <FaArrowRightLong />
          </div>
        </div>
        <div
          // onClick={() => setData(Data.beverages)}
          className="group relative bg-white border-2 border-[#EF682E50] rounded-lg p-4 place-items-center grid hover:border-[#609E45]"
        >
          <Image src={c3} alt="" className="w-full h-24" />
          <h2 className="font-bold text-[20px] text-center">Beverages</h2>
          <h3>68+ Products</h3>
          <div className="absolute top-[100%] translate-y-[-50%] hidden p-2 bg-[#EF682E] rounded-full text-white group-hover:block">
            <FaArrowRightLong />
          </div>
        </div>
        <div
          // onClick={() => setData(Data.seafood)}
          className="group relative bg-white border-2 border-[#EF682E50] rounded-lg p-4 place-items-center grid hover:border-[#609E45]"
        >
          <Image src={c4} alt="" className="w-full h-24" />
          <h2 className="font-bold text-[20px] text-center">Sea Food</h2>
          <h3>29+ Products</h3>
          <div className="absolute top-[100%] translate-y-[-50%] hidden p-2 bg-[#EF682E] rounded-full text-white group-hover:block">
            <FaArrowRightLong />
          </div>
        </div>
        <div
          // onClick={() => setData(Data.packaged_food)}
          className="group relative bg-white border-2 border-[#EF682E50] rounded-lg p-4 place-items-center grid hover:border-[#609E45]"
        >
          <Image src={c5} alt="" className="w-full h-24" />
          <h2 className="font-bold text-[20px] text-center">Package Food</h2>
          <h3>68+ Products</h3>
          <div className="absolute top-[100%] translate-y-[-50%] hidden p-2 bg-[#EF682E] rounded-full text-white group-hover:block">
            <FaArrowRightLong />
          </div>
        </div>
        <div
          // onClick={() => setData(Data.bakery_items)}
          className="group relative bg-white border-2 border-[#EF682E50] rounded-lg p-4 place-items-center grid hover:border-[#609E45]"
        >
          <Image src={c6} alt="" className="w-full h-24" />
          <h2 className="font-bold text-[20px] text-center">Backery Items</h2>
          <h3>68+ Products</h3>
          <div className="absolute top-[100%] translate-y-[-50%] hidden p-2 bg-[#EF682E] rounded-full text-white group-hover:block">
            <FaArrowRightLong />
          </div>
        </div>
      </div>
      <Image src={ci} alt="" className="absolute bottom-0 right-[1%] -z-10 w-[15%] opacity-80" />
    </div>
  );
};

export default Categories;
