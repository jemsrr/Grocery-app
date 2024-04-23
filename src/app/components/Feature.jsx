import React from "react";
import { CiDeliveryTruck, CiWallet } from "react-icons/ci";
import { GrRefresh } from "react-icons/gr";

import { GiFruitBowl } from "react-icons/gi";

const Feature = () => {
  return (
    <div className="font-Poppins px-[10%] grid gap-4 grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-4 my-20">
      <div className=" relative flex w-fit gap-2 items-center">
        <CiDeliveryTruck className="text-white text-2xl font-bold bg-[#609E45] rounded-full p-1 h-[40px] w-[40px] absolute left-[10%] translate-x-[-95%]" />
        <div className="border-solid border-2 border-[#609E45] px-6 py-2 rounded-xl hover:border-[#EF682E]">
          <h2 className="font-bold">Free Shipping.</h2>
          <h2 className="text-[16px]">No one rejects, dislikes.</h2>
        </div>
      </div>
      <div className=" relative flex w-fit gap-2 items-center ">
        <GiFruitBowl className="text-white text-2xl font-bold bg-[#609E45] rounded-full p-1 h-[40px] w-[40px] absolute left-[10%] translate-x-[-95%]" />
        <div className="border-solid border-2 border-[#609E45] px-6 py-2 rounded-xl hover:border-[#EF682E]">
          <h2 className="font-bold">100% Netural</h2>
          <h2 className="text-[16px]">No one rejects, dislikes.</h2>
        </div>
      </div>
      <div className=" relative flex w-fit gap-2 items-center ">
        <GrRefresh className="text-white text-2xl font-bold bg-[#609E45] rounded-full p-1 h-[40px] w-[40px] absolute left-[10%] translate-x-[-95%]" />
        <div className="border-solid border-2 border-[#609E45] px-6 py-2 rounded-xl hover:border-[#EF682E]">
          <h2 className="font-bold">Easy Free Returns</h2>
          <h2 className="text-[16px]">No one rejects, dislikes.</h2>
        </div>
      </div>
      <div className=" relative flex w-fit gap-2 items-center ">
        <CiWallet className="text-white text-2xl font-bold bg-[#609E45] rounded-full p-1 h-[40px] w-[40px] absolute left-[10%] translate-x-[-95%]" />
        <div className="border-solid border-2 border-[#609E45] px-6 py-2 rounded-xl hover:border-[#EF682E]">
          <h2 className="font-bold">100% Payment Secure</h2>
          <h2 className="text-[16px]">No one rejects, dislikes.</h2>
        </div>
      </div>
    </div>
  );
};

export default Feature;
