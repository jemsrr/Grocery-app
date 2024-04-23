import React from "react";
import Image from "next/image";
import d1 from "@/app/assets/dlmobile/image.png";
import playstore from "@/app/assets/download/playstore.png";
import appstore from "@/app/assets/download/appstore.png";

const DlMobile = () => {
  return (
    <div className="relative flex mx-[10%] my-20 justify-between font-Poppins w-[80%] rounded-xl  bg-[url('../../public/dlm.png')] bg-[#609E45] bg-no-repeat bg-cover">
      <div className="text-black sm:text-white sm:w-[70%] p-10 grid place-content-center gap-4 z-10">
        <h3 className="text-2xl">
          Shopping for vegetables & fruit is easier with
        </h3>
        <h1 className="text-3xl font-extrabold">TRoo Grocery App</h1>
        <h5 className="text-xl">Available on Both Android and ios</h5>
        <div className="grid sm:flex justify-start gap-4">
            <Image src={playstore} alt="" className="w-24 h-10 rounded-lg" />
            <Image src={appstore} alt="" className="w-24 h-10 rounded-lg" />
        </div>
      </div>
      <Image src={d1} alt="" className="absolute h-full w-auto p-5 z-0 opacity-20 left-[50%] translate-x-[-50%] sm:w-[30%] sm:top-[50%] sm:translate-y-[-50%]  sm:right-0 sm:translate-x-[50%] sm:opacity-100" />
    </div>
  );
};

export default DlMobile;
