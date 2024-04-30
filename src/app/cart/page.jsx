"use client";
import Image from "next/image";
import Link from "next/link";
import gd from "@/app/assets/grocery/gd.png";
import { FiShoppingBag, FiShoppingCart } from "react-icons/fi";
import { IoBagCheckOutline, IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { removeTocart } from "@/lib/reducer/productReducer";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.productReducer.cart);
  const cartvalue = useSelector((state) => state.productReducer.cartvalue);
  return (
    <div className="font-Poppins">
      <div className="relative min-h-80 grid place-content-center content-center text-center px-[5%] h-full bg-[url('../../public/main.png')] bg-pink-50 bg-no-repeat bg-cover">
        <Image
          src={gd}
          alt=""
          className="absolute w-[20%] bottom-0 left-0 z-0"
        />
        <div className="py-[35%]">
          <h1 className="text-3xl font-bold text-[#609E45]">Shopping cart</h1>
          <h4>
            <Link href={"/"}>Home</Link> -{" "}
            <span className="text-[#EF682E]">cart</span>
          </h4>
        </div>
      </div>
      <div className="bg-[url('../../public/tybg.png')] bg-no-repeat bg-cover px-[5%] md:px-[10%] py-20">
        <div className="  flex justify-between items-center bg-[#609E4520] px-2 md:px-20 py-6 rounded-xl">
          <Link
            href={"/ourProductese"}
            className="grid place-items-center gap-2"
          >
            <FiShoppingBag className="bg-[#EF682E] rounded-full font-bold text-3xl md:text-6xl border-2 py-1 px-2 md:py-2 md:px-4 outline outline-2 outline-[#EF682E50]" />
            <h2 className="font-semibold">Shop Page</h2>
          </Link>
          <div className="grid place-items-center gap-2">
            <FiShoppingCart className="bg-[#609E45] rounded-full font-bold text-3xl md:text-6xl border-2 py-1 px-2 md:py-2 md:px-4 outline outline-2 outline-[#609E4550]" />
            <h2 className="font-semibold">My Cart</h2>
          </div>
          <Link href={"/checkout"} className="grid place-items-center gap-2">
            <IoBagCheckOutline className="bg-[#EF682E] rounded-full font-bold text-3xl md:text-6xl border-2 py-1 px-2 md:py-2 md:px-4 outline outline-2 outline-[#EF682E50]" />
            <h2 className="font-semibold">Checkout</h2>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-10 my-10">
          <div className="md:col-span-2 rounded-xl  md:p-4 h-fit">
            <div className="bg-[#609E4520]">
              <div className="grid grid-cols-4 md:grid-cols-5 md:gap-4 py-4 border-2 rounded-lg border-[#609E4520] mb-2">
                <h2 className="col-span-1 md:col-span-2 text-center">Product Name</h2>
                <h2 className="col-span-1 text-center">Price</h2>
                <h2 className="col-span-1 text-center">Quantity</h2>
                <h2 className="col-span-1 text-center">Subtotal</h2>
              </div>
              {cart.map((i) => (
                <div
                  key={i.item.id}
                  className="grid grid-cols-4 md:grid-cols-5 md:gap-4 content-center p-2 py-4 border-2 rounded-lg border-[#609E4520] "
                >
                  <div className="col-span-1 md:col-span-2 flex items-center md:gap-10">
                    <IoClose
                      onClick={() => dispatch(removeTocart(i))}
                      className="font-extrabold text-xl md:text-2xl"
                    />
                    <div className="flex gap-1 md:gap-10 items-center ">
                      <img
                        src={i.item.photo_url}
                        alt=""
                        onError={(e) => (e.target.src = "/logo.png")}
                        className="w-10 h-10 bg-[#609E4520] rounded-lg"
                      />
                      <h2 className=" ">{i.item.name}</h2>
                    </div>
                  </div>
                  <h2 className="col-span-1 text-center">${i.item.price}</h2>
                  <h2 className="col-span-1 text-center">{i.count}</h2>
                  <h2 className="col-span-1 text-center">
                    ${i.item.price * i.count}
                  </h2>
                </div>
              ))}
            </div>
            <div className="flex justify-start gap-1 md:gap-6 mt-10">
              <input
                type="text"
                placeholder="Coupon Code"
                className="p-2 border-2 rounded-lg"
              />
              <button className="text-white text-center font-bold bg-[#609E45] p-2 rounded-md">
                Apply Now
              </button>
            </div>
          </div>
          <div className="md:col-span-1 rounded-xl bg-[#609E4520] p-2 md:p-4 h-fit">
            <div className="p-2 grid gap-2">
              <h1 className="font-bold text-xl">Cart totals</h1>
              <hr className="h-2 " />
              <div className="px-2 flex justify-between items-center">
                <h1>Subtotal</h1>
                <h1>${cartvalue}</h1>
              </div>
              <div className="bg-white p-2 rounded-lg">
                <h1 className="font-medium text-xl">Shipping</h1>
                <hr className="h-2 " />
                <div className="flex justify-between items-center">
                  <h1>Flat rate</h1>
                  <h1>${cartvalue}</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>Shipping to</h1>
                  <h1>Mumbai</h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>Shipping Charge</h1>
                  <h1>$10</h1>
                </div>
              </div>
              <div className="px-2 flex justify-between items-center">
                <h1>Grand Total</h1>
                <h1>{cartvalue !== 0 ? `$${cartvalue + 10}` : `$0`}</h1>
              </div>
              {cartvalue !== 0 ? (
                <Link
                  href={"/checkout"}
                  className="text-white text-center font-bold bg-[#609E45] p-4 rounded-md"
                >
                  Proceed to checkout
                </Link>
              ) : (
                <button
                  onClick={()=>alert("your cart is Empty")}
                  className="text-white text-center font-bold bg-[#609E45] p-4 rounded-md"
                >
                  Proceed to checkout
                </button>
              )}

              <Link
                href={"/ourProductese"}
                className="text-white text-center font-bold bg-black p-4 rounded-md"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
