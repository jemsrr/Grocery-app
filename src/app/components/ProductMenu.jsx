"use client";

import Image from "next/image";
import { AiOutlineCarryOut } from "react-icons/ai";
import { btn, main } from "./productmenu.module.css";
import ReactStars from "react-stars";
// import Data from "@/lib/MOCK_DATA.json";
import Data from "@/lib/BLOG.json";
import p1 from "@/app/assets/product/p1.png";
import p2 from "@/app/assets/product/p2.png";
import p3 from "@/app/assets/product/p3.png";
import p4 from "@/app/assets/product/p4.png";
import p5 from "@/app/assets/product/p5.png";
import p6 from "@/app/assets/product/p6.png";
import p7 from "@/app/assets/product/p7.png";
import p8 from "@/app/assets/product/p8.png";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTocart } from "@/lib/reducer/productReducer";

const ProductMenu = ({ item }) => {
  const dispatch = useDispatch();

  const [data, setData] = useState(Data);
  useEffect(() => {
    switch (item) {
      case "All Products":
        setData(Data);
        break;
      case "Best Sellers":
        setData(Data.filter((i) => i.price > 20));
        break;
      case "New Arrivals":
        setData(Data.filter((i) => i.price < 20));
        break;
      case "Top Rated":
        setData(Data.filter((i) => (i.rating = 5)));
        break;
      default:
        break;
    }
  }, [item]);
  const cartHandler = (i) => {
    dispatch(addTocart(i));
  };

  return (
    <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-10 w-full">
      {data.slice(0, 8).map((item) => (
        <div
          key={item.id}
          id={main}
          className="relative grid place-items-center gap-2px-2 pb-8 rounded-md border-[#609E4570] hover:border-2 "
        >
          <img
            src={item.photo_url}
            alt=""
            onError={(e) => (e.target.src = "/logo.png")}
            className="p-4 w-full h-48 bg-[#609E4520] rounded-lg"
          />
          <h1 className=" text-[#EF682E] text-2xl font-bold">{item.name}</h1>
          <div className="flex justify-center gap-3">
            <del>${item.price + 5}</del>
            <h4>${item.price}</h4>
          </div>
          <ReactStars
            count={5}
            value={item.rating}
            edit={false}
            size={24}
            color2={"#ffd700"}
          />

          <button
            id={btn}
            className="hidden absolute bottom-[-10px] justify-center items-center rounded-md gap-2 px-6 py-1 text-white bg-[#EF682E]"
            onClick={() => cartHandler(item)}
          >
            <AiOutlineCarryOut />
            <h1>Add to Cart</h1>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductMenu;
