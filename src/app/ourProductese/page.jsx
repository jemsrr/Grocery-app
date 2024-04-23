"use client";

import Image from "next/image";
import Link from "next/link";
import ReactStars from "react-stars";
// import Data from "@/lib/MOCK_DATA.json";
import Data from "@/lib/BLOG.json";
import gd from "@/app/assets/grocery/gd.png";
import c1 from "@/app/assets/Categories/c1.png";
import c2 from "@/app/assets/Categories/c2.png";
import c3 from "@/app/assets/Categories/c3.png";
import c4 from "@/app/assets/Categories/c4.png";
import c5 from "@/app/assets/Categories/c5.png";
import c6 from "@/app/assets/Categories/c6.png";
import { AiFillStar, AiOutlineCarryOut, AiOutlineDown } from "react-icons/ai";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { main, btn } from "@/app/components/productmenu.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "@/lib/reducer/productReducer";

const OurProductese = () => {
  const [data, setData] = useState(Data);
  const [currPage, setCurrPage] = useState(1);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.productReducer.cart);
  const cartvalue = useSelector((state) => state.productReducer.cartvalue);
  const rpp = 9;
  const li = currPage * rpp;
  const fi = li - rpp;
  const record = data.slice(fi, li);
  const npage = Math.ceil(data.length / rpp);
  const num = [...Array(npage + 1).keys()].slice(1);

  const changePage = (i) => {
    setCurrPage(i);
  };
  const prePage = () => {
    if (currPage !== 1) {
      setCurrPage(currPage - 1);
    }
  };
  const nextPage = () => {
    if (currPage !== npage) {
      setCurrPage(currPage + 1);
    }
  };
  const cartHandler = (i) => {
    dispatch(addTocart(i));
  };

  useEffect(() => {}, []);
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
            Our organic products
          </h1>
          <h4>
            <Link href={"/"}>Home</Link> -{" "}
            <span className="text-[#EF682E]">Shop</span>
          </h4>
        </div>
      </div>
      <div className="px-[10%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 pt-20 sm:py-20">
        <div
          onClick={() =>
            setData(Data.filter((i) => i.categories === "Vegetable"))
          }
          className="bg-white border-2 border-[#EF682E50] rounded-lg p-4 place-items-center grid hover:border-[#609E45]"
        >
          <Image src={c1} alt="" className="w-full h-24" />
          <h2 className="font-bold text-[20px] text-center">Vegetable</h2>
          <h3>25+ Products</h3>
        </div>
        <div
          onClick={() => setData(Data.filter((i) => i.categories === "fruits"))}
          className="bg-white border-2 border-[#EF682E50] rounded-lg p-4 place-items-center grid hover:border-[#609E45]"
        >
          <Image src={c2} alt="" className="w-full h-24" />
          <h2 className="font-bold text-[20px] text-center">Fresh Fruits</h2>
          <h3>85+ Products</h3>
        </div>
        <div
          onClick={() =>
            setData(Data.filter((i) => i.categories === "Beverages"))
          }
          className="bg-white border-2 border-[#EF682E50] rounded-lg p-4 place-items-center grid hover:border-[#609E45]"
        >
          <Image src={c3} alt="" className="w-full h-24" />
          <h2 className="font-bold text-[20px] text-center">Beverages</h2>
          <h3>68+ Products</h3>
        </div>
        <div
          onClick={() =>
            setData(Data.filter((i) => i.categories === "Sea_Food"))
          }
          className="bg-white border-2 border-[#EF682E50] rounded-lg p-4 place-items-center grid hover:border-[#609E45]"
        >
          <Image src={c4} alt="" className="w-full h-24" />
          <h2 className="font-bold text-[20px] text-center">Sea Food</h2>
          <h3>29+ Products</h3>
        </div>
        <div
          onClick={() => setData(Data.filter((i) => i.categories === "Dairy"))}
          className="bg-white border-2 border-[#EF682E50] rounded-lg p-4 place-items-center grid hover:border-[#609E45]"
        >
          <Image src={c5} alt="" className="w-full h-24" />
          <h2 className="font-bold text-[20px] text-center">Package Food</h2>
          <h3>68+ Products</h3>
        </div>
        <div
          onClick={() => setData(Data.filter((i) => i.categories === "Bakery"))}
          className="bg-white border-2 border-[#EF682E50] rounded-lg p-4 place-items-center grid hover:border-[#609E45]"
        >
          <Image src={c6} alt="" className="w-full h-24" />
          <h2 className="font-bold text-[20px] text-center">Backery Items</h2>
          <h3>68+ Products</h3>
        </div>
      </div>
      <div className="px-[10%] flex flex-col-reverse lg:grid lg:grid-cols-4 gap-10 py-20 ">
        <div className="lg:col-span-1 grid gap-4 h-fit">
          <div className="p-2 grid gap-2 w-full h-fit">
            <h1 className="font-bold text-xl text-[#609E45]">Cart</h1>
            <hr className="h-1 " />
            <div className="grid gap-6">
              {cart.slice(0, 3).map((item) => (
                <div key={item.item.id} className="flex justify-start gap-4">
                  <div className="relative w-[30%]">
                    <img
                      src={item.item.photo_url}
                      alt=""
                      onError={(e) => (e.target.src = "/logo.png")}
                      className="w-full h-full bg-[#609E4520] rounded-lg"
                    />
                  </div>
                  <div>
                    <div className="flex gap-[0.5px] text-xs text-yellow-400">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                    <h1 className="text-xl font-semibold">{item.item.name}</h1>
                    <div className="flex justify-between">
                      <h4>${item.item.price}</h4>
                      <h4> X{item.count}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <hr className="h-1 " />
            <div>Subtotal : ${cartvalue}</div>
          </div>
          <div className="p-2 grid gap-2">
            <h1 className="font-bold text-xl text-[#609E45]">
              Featured Product
            </h1>
            <hr className="h-2 " />
            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-6">
              {data.slice(0, 4).map((item) => (
                <div key={item.id} className="flex justify-start gap-4">
                  <div className="relative w-[30%]">
                    <img
                      src={item.photo_url}
                      alt=""
                      onError={(e) => (e.target.src = "/logo.png")}
                      className="w-full h-full bg-[#609E4520] rounded-lg"
                    />
                  </div>
                  <div>
                    <div className="flex gap-[0.5px] text-xs text-yellow-400">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                    <h1 className="text-xl font-semibold">{item.name}</h1>
                    <h4>${item.price}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 w-full">
          <div className="flex justify-between items-center p-4 bg-[#609E4520] rounded-lg">
            <input
              placeholder="Showing Products 1-9 Of 199 Result"
              className="p-2 rounded-lg w-full"
            />
            <button className="flex justify-end items-center w-full">
              <h1 className="w-fit">Sort-by</h1>
              <AiOutlineDown />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-10">
            {record.map((item) => (
              <div
                key={item.id}
                id={main}
                className="relative grid place-items-center gap-2 p-2 pb-10 rounded-md border-[#609E4570] hover:border-2 "
              >
                <img
                  src={item.photo_url}
                  alt=""
                  onError={(e) => (e.target.src = "/logo.png")}
                  className="p-4 w-full h-44 bg-[#609E4520] rounded-lg"
                />
                <h1 className=" text-[#609E45] text-2xl font-bold">
                  {item.name}
                </h1>
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
                  className="hidden absolute bottom-[-10px] justify-center items-center rounded-md gap-2 px-6 py-1 text-white bg-[#609E45]"
                  onClick={() => cartHandler(item)}
                >
                  <AiOutlineCarryOut />
                  <h1>Add to Cart</h1>
                </button>
              </div>
            ))}
          </div>
          <nav className=" flex justify-end items-center gap-2 rounded-md shadow-sm font-extrabold text-4xl p-2">
            <GrFormPrevious
              onClick={prePage}
              className="font-extrabold text-4xl h-full bg-[#609E4520] rounded-lg"
            />

            {num?.map((i) => (
              <div
                key={i}
                className="inline-flex items-center bg-[#609E4520]  px-4 py-2 text-sm font-semibold rounded-lg active:bg-[#609E45]"
                onClick={() => {
                  changePage(i);
                }}
              >
                {i}
              </div>
            ))}

            <GrFormNext
              onClick={nextPage}
              className="font-extrabold text-4xl h-full bg-[#609E4520] rounded-lg"
            />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default OurProductese;
