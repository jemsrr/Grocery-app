"use client";
import Image from "next/image";
import Link from "next/link";
import gd from "@/app/assets/grocery/gd.png";
import { FiShoppingBag, FiShoppingCart } from "react-icons/fi";
import { IoBagCheckOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "@/lib/reducer/productReducer";

const CheckOut = () => {
  const cart = useSelector((state) => state.productReducer.cart);
  const cartvalue = useSelector((state) => state.productReducer.cartvalue);
  const dispatch = useDispatch();
  return (
    <div className="font-Poppins">
      <div className="relative min-h-64 grid place-content-center content-center text-center px-[5%] h-full bg-[url('../../public/main.png')] bg-pink-50 bg-no-repeat bg-cover">
        <Image
          src={gd}
          alt=""
          className="absolute w-[20%] bottom-0 left-0 z-0"
        />
        <div className="py-[35%]">
          <h1 className="text-3xl font-bold text-[#609E45]">Checkout page</h1>
          <h4>
            <Link href={"/"}>Home</Link> -{" "}
            <span className="text-[#EF682E]">Checkout</span>
          </h4>
        </div>
      </div>
      <div className="bg-[url('../../public/tybg.png')] bg-no-repeat bg-cover px-[5%] md:px-[10%] py-20">
        <div className="  flex justify-between items-center bg-[#609E4520] px-2 md:px-20 py-6 rounded-xl">
          <Link
            href={"/ourProductese"}
            className="grid place-items-center gap-2"
          >
            <FiShoppingBag className="bg-[#EF682E] rounded-full font-bold text-6xl border-2 py-2 px-4 outline outline-2 outline-[#EF682E50]" />
            <h2 className="font-semibold">Shop Page</h2>
          </Link>
          <Link href={"/cart"} className="grid place-items-center gap-2">
            <FiShoppingCart className="bg-[#EF682E] rounded-full font-bold text-6xl border-2 py-2 px-4 outline outline-2 outline-[#609E4550]" />
            <h2 className="font-semibold">My Cart</h2>
          </Link>
          <Link href={"/checkout"} className="grid place-items-center gap-2">
            <IoBagCheckOutline className="bg-[#609E45] rounded-full font-bold text-6xl border-2 py-2 px-4 outline outline-2 outline-[#EF682E50]" />
            <h2 className="font-semibold">Checkout</h2>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-10 my-10 ">
          <div className="md:col-span-2 rounded-xl p-10 h-fit grid gap-2 bg-[#609E4520]">
            <h1 className="font-bold text-xl">Billing details</h1>
            <hr className="h-1 bg-[#609E4550]" />
            <form className="grid md:grid-cols-2 gap-4 py-4">
              <div className="grid gap-2">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-2 rounded-lg border-2 hover:border-[#609E45]"
                />
              </div>
              <div className="grid gap-2">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-2 rounded-lg border-2 hover:border-[#609E45]"
                />
              </div>
              <div className="grid gap-2">
                <label>Phone Number</label>
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="p-2 rounded-lg border-2 hover:border-[#609E45]"
                />
              </div>
              <div className="grid gap-2">
                <label>Email Address</label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="p-2 rounded-lg border-2 hover:border-[#609E45]"
                />
              </div>
              <div className="grid gap-2">
                <label>Country / Region</label>
                <input
                  type="text"
                  placeholder="Country / Region"
                  className="p-2 rounded-lg border-2 hover:border-[#609E45]"
                />
              </div>
              <div className="grid gap-2">
                <label>Street address</label>
                <input
                  type="text"
                  placeholder="Street address"
                  className="p-2 rounded-lg border-2 hover:border-[#609E45]"
                />
              </div>
              <div className="grid gap-2">
                <label>Town / City</label>
                <input
                  type="text"
                  placeholder="Town / City"
                  className="p-2 rounded-lg border-2 hover:border-[#609E45]"
                />
              </div>
              <div className="grid gap-2">
                <label>State</label>
                <input
                  type="text"
                  placeholder="State"
                  className="p-2 rounded-lg border-2 hover:border-[#609E45]"
                />
              </div>
              <div className="grid gap-2">
                <label>ZIP Code</label>
                <input
                  type="number"
                  placeholder="ZIP Code"
                  className="p-2 rounded-lg border-2 hover:border-[#609E45]"
                />
              </div>
              <div className="grid gap-2">
                <label>Company Name (optional)</label>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="p-2 rounded-lg border-2 hover:border-[#609E45]"
                />
              </div>
              <div className="md:col-span-2 grid gap-2">
                <label>Order notes (optional)</label>
                <textarea
                  rows="5"
                  placeholder="Order notes"
                  className="p-2 rounded-lg border-2 hover:border-[#609E45]"
                />
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  className="p-2 w-4 rounded-lg border-2 hover:border-[#609E45]"
                />
                <label>Ship to a different address?</label>
              </div>
            </form>
          </div>
          <div className="md:col-span-1 rounded-xl bg-[#609E4520] p-4 h-fit">
            <div className="p-2 grid gap-2">
              <h1 className="font-bold text-xl">Your order</h1>
              <hr className="h-1 bg-[#609E4550]" />
              <div className="px-2 grid gap-6">
                <div>
                  <h1>Product</h1>
                  {cart.map((i) => (
                    <div
                      key={i.item.id}
                      className=" flex justify-between items-center py-2"
                    >
                      <h1>
                        {i.item.name} X {i.count}
                      </h1>
                      <h1>${i.item.price}</h1>
                    </div>
                  ))}
                  <div className=" flex justify-between items-center">
                    <h1>Subtotal</h1>
                    <h1>${cartvalue}</h1>
                  </div>
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
                <div>
                  <div className="flex gap-2 items-center">
                    <input type="radio" name="pay" />
                    <label className="font-bold">Direct bank transfer</label>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input type="radio" name="pay" />
                    <label className="font-bold">Check payments</label>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input type="radio" name="pay" />
                    <label className="font-bold">Cash on delivery</label>
                  </div>
                </div>
                <Link
                  href={"/thankYou"}
                  onClick={() => dispatch(resetCart())}
                  className="text-white text-center font-bold bg-[#609E45] p-4 rounded-md"
                >
                  Place Order
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
