import React from "react";
import Banner from "./Banner";
import ProductMenu from "./ProductMenu";

const TopSaver = () => {
  return (
    <div className="font-Poppins">
      <Banner />
      <div className="grid place-items-center gap-2 px-[10%] py-20 bg-[url('../../public/fp.png')] bg-pink-50 bg-no-repeat bg-cover">
        <h2 className="text-white bg-[#609E45] w-fit px-4 py-1 rounded-md ">
          Awesome Products
        </h2>
        <h1 className="font-bold text-3xl md:text-6xl text-[#EF682E] text-center">Top Savers Today</h1>
        <ProductMenu item={"New Arrivals"}/>
      </div>
    </div>
  );
};

export default TopSaver;
