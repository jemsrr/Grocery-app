"use client";
import React from "react";
import ProductMenu from "./ProductMenu";
import { useState } from "react";

const Items = () => {
  const [item, setItem] = useState("All Products");
  return (
    <div className="font-Poppins px-[10%] py-20 bg-[url('../../public/fp.png')] bg-pink-50 bg-no-repeat bg-cover">
      <div className="grid place-items-center gap-2">
        <h2 className="text-white bg-[#609E45] w-fit px-4 py-1 rounded-md ">
          Awesome Products
        </h2>
        <h1 className="font-bold text-3xl md:text-6xl text-[#EF682E] text-center">
          Featured Products
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 py-10">
          <button onClick={()=>setItem("All Products")} className="px-8 py-4 bg-[#EF682E20] rounded-md text-xl hover:bg-[#EF682E] hover:text-white">
            All Products
          </button>
          <button onClick={()=>setItem("Best Sellers")} className="px-8 py-4 bg-[#EF682E20] rounded-md text-xl hover:bg-[#EF682E] hover:text-white">
            Best Sellers
          </button>
          <button onClick={()=>setItem("New Arrivals")} className="px-8 py-4 bg-[#EF682E20] rounded-md text-xl hover:bg-[#EF682E] hover:text-white">
            New Arrivals
          </button>
          <button onClick={()=>setItem("Top Rated")} className="px-8 py-4 bg-[#EF682E20] rounded-md text-xl hover:bg-[#EF682E] hover:text-white">
            Top Rated
          </button>
        </div>
      </div>
      <ProductMenu item={item}/>
    </div>
  );
};

export default Items;
