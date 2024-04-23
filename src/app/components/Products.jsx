"use client";
import Image from "next/image";
import { AiFillStar, AiOutlineCarryOut } from "react-icons/ai";
import t1 from "@/app/assets/productes/t1.png";
import pd from "@/app/assets/productes/pd.png";
import { useState } from "react";

const Products = () => {
  const [isHover, setIsHover] = useState(0);

  return (
      <div className="px-[10%] grid sm:grid-cols-2 md:grid-cols-4 gap-6 my-10 py-10">
        <div className="grid gap-10">
          <div>
            <h2 className="font-bold text-xl">Top Sells</h2>
            <hr className="w-[30%] h-1 bg-[#EF682E] my-1" />
          </div>
          <div
            onMouseEnter={() => setIsHover(1)}
            onMouseLeave={() => setIsHover(0)}
            className="flex justify-between"
          >
            <div className="relative w-[30%]">
              <Image
                src={t1}
                alt=""
                className={
                  isHover === 1
                    ? "w-full h-full bg-black bg-opacity-50 rounded-lg"
                    : "w-full h-full bg-purple-50 rounded-lg"
                }
              />
              {isHover === 1 && (
                <AiOutlineCarryOut className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#EF682E] text-white text-4xl p-1 rounded-lg" />
              )}
            </div>

            <div>
              <h1 className="text-xl font-bold">
                Fresh Apple <span className="text-xl font-normal">(5 kg)</span>
              </h1>
              <div className="flex gap-3">
                <del>$25.00</del>
                <h4>$20.00</h4>
              </div>
              <div className="flex gap-[2px] text-xl text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div
            onMouseEnter={() => setIsHover(2)}
            onMouseLeave={() => setIsHover(0)}
            className="flex justify-between"
          >
            <div className="relative w-[30%]">
              <Image
                src={t1}
                alt=""
                className={
                  isHover === 2
                    ? "w-full h-full bg-black bg-opacity-50 rounded-lg"
                    : "w-full h-full bg-purple-50 rounded-lg"
                }
              />
              {isHover === 2 && (
                <AiOutlineCarryOut className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#EF682E] text-white text-4xl p-1 rounded-lg" />
              )}
            </div>

            <div>
              <h1 className="text-xl font-bold">
                Fresh Apple <span className="text-xl font-normal">(5 kg)</span>
              </h1>
              <div className="flex gap-3">
                <del>$25.00</del>
                <h4>$20.00</h4>
              </div>
              <div className="flex gap-[2px] text-xl text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div
            onMouseEnter={() => setIsHover(3)}
            onMouseLeave={() => setIsHover(0)}
            className="flex justify-between"
          >
            <div className="relative w-[30%]">
              <Image
                src={t1}
                alt=""
                className={
                  isHover === 3
                    ? "w-full h-full bg-black bg-opacity-50 rounded-lg"
                    : "w-full h-full bg-purple-50 rounded-lg"
                }
              />
              {isHover === 3 && (
                <AiOutlineCarryOut className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#EF682E] text-white text-4xl p-1 rounded-lg" />
              )}
            </div>

            <div>
              <h1 className="text-xl font-bold">
                Fresh Apple <span className="text-xl font-normal">(5 kg)</span>
              </h1>
              <div className="flex gap-3">
                <del>$25.00</del>
                <h4>$20.00</h4>
              </div>
              <div className="flex gap-[2px] text-xl text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div
            onMouseEnter={() => setIsHover(4)}
            onMouseLeave={() => setIsHover(0)}
            className="flex justify-between"
          >
            <div className="relative w-[30%]">
              <Image
                src={t1}
                alt=""
                className={
                  isHover === 4
                    ? "w-full h-full bg-black bg-opacity-50 rounded-lg"
                    : "w-full h-full bg-purple-50 rounded-lg"
                }
              />
              {isHover === 4 && (
                <AiOutlineCarryOut className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#EF682E] text-white text-4xl p-1 rounded-lg" />
              )}
            </div>

            <div>
              <h1 className="text-xl font-bold">
                Fresh Apple <span className="text-xl font-normal">(5 kg)</span>
              </h1>
              <div className="flex gap-3">
                <del>$25.00</del>
                <h4>$20.00</h4>
              </div>
              <div className="flex gap-[2px] text-xl text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <a href="" className="hover:text-[#EF682E] hover:underline">
            View All Produds
          </a>
        </div>
        <div className="grid gap-10">
          <div>
            <h2 className="font-bold text-2xl">Recently Added</h2>
            <hr className="w-[30%] h-1 bg-[#EF682E] my-1" />
          </div>
          <div
            onMouseEnter={() => setIsHover(5)}
            onMouseLeave={() => setIsHover(0)}
            className="flex justify-between"
          >
            <div className="relative w-[30%]">
              <Image
                src={t1}
                alt=""
                className={
                  isHover === 5
                    ? "w-full h-full bg-black bg-opacity-50 rounded-lg"
                    : "w-full h-full bg-purple-50 rounded-lg"
                }
              />
              {isHover === 5 && (
                <AiOutlineCarryOut className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#EF682E] text-white text-4xl p-1 rounded-lg" />
              )}
            </div>

            <div>
              <h1 className="text-xl font-bold">
                Fresh Apple <span className="text-xl font-normal">(5 kg)</span>
              </h1>
              <div className="flex gap-3">
                <del>$25.00</del>
                <h4>$20.00</h4>
              </div>
              <div className="flex gap-[2px] text-xl text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div
            onMouseEnter={() => setIsHover(6)}
            onMouseLeave={() => setIsHover(0)}
            className="flex justify-between"
          >
            <div className="relative w-[30%]">
              <Image
                src={t1}
                alt=""
                className={
                  isHover === 6
                    ? "w-full h-full bg-black bg-opacity-50 rounded-lg"
                    : "w-full h-full bg-purple-50 rounded-lg"
                }
              />
              {isHover === 6 && (
                <AiOutlineCarryOut className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#EF682E] text-white text-4xl p-1 rounded-lg" />
              )}
            </div>

            <div>
              <h1 className="text-xl font-bold">
                Fresh Apple <span className="text-xl font-normal">(5 kg)</span>
              </h1>
              <div className="flex gap-3">
                <del>$25.00</del>
                <h4>$20.00</h4>
              </div>
              <div className="flex gap-[2px] text-xl text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div
            onMouseEnter={() => setIsHover(7)}
            onMouseLeave={() => setIsHover(0)}
            className="flex justify-between"
          >
            <div className="relative w-[30%]">
              <Image
                src={t1}
                alt=""
                className={
                  isHover === 7
                    ? "w-full h-full bg-black bg-opacity-50 rounded-lg"
                    : "w-full h-full bg-purple-50 rounded-lg"
                }
              />
              {isHover === 7 && (
                <AiOutlineCarryOut className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#EF682E] text-white text-4xl p-1 rounded-lg" />
              )}
            </div>

            <div>
              <h1 className="text-xl font-bold">
                Fresh Apple <span className="text-xl font-normal">(5 kg)</span>
              </h1>
              <div className="flex gap-3">
                <del>$25.00</del>
                <h4>$20.00</h4>
              </div>
              <div className="flex gap-[2px] text-xl text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div
            onMouseEnter={() => setIsHover(8)}
            onMouseLeave={() => setIsHover(0)}
            className="flex justify-between"
          >
            <div className="relative w-[30%]">
              <Image
                src={t1}
                alt=""
                className={
                  isHover === 8
                    ? "w-full h-full bg-black bg-opacity-50 rounded-lg"
                    : "w-full h-full bg-purple-50 rounded-lg"
                }
              />
              {isHover === 8 && (
                <AiOutlineCarryOut className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#EF682E] text-white text-4xl p-1 rounded-lg" />
              )}
            </div>

            <div>
              <h1 className="text-xl font-bold">
                Fresh Apple <span className="text-xl font-normal">(5 kg)</span>
              </h1>
              <div className="flex gap-3">
                <del>$25.00</del>
                <h4>$20.00</h4>
              </div>
              <div className="flex gap-[2px] text-xl text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <a href="" className="hover:text-[#EF682E] hover:underline">
            View All Produds
          </a>
        </div>
        <div className="grid gap-10">
          <div>
            <h2 className="font-bold text-2xl">Top Rated</h2>
            <hr className="w-[30%] h-1 bg-[#EF682E] my-1" />
          </div>
          <div
            onMouseEnter={() => setIsHover(9)}
            onMouseLeave={() => setIsHover(0)}
            className="flex justify-between"
          >
            <div className="relative w-[30%]">
              <Image
                src={t1}
                alt=""
                className={
                  isHover === 9
                    ? "w-full h-full bg-black bg-opacity-50 rounded-lg"
                    : "w-full h-full bg-purple-50 rounded-lg"
                }
              />
              {isHover === 9 && (
                <AiOutlineCarryOut className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#EF682E] text-white text-4xl p-1 rounded-lg" />
              )}
            </div>

            <div>
              <h1 className="text-xl font-bold">
                Fresh Apple <span className="text-xl font-normal">(5 kg)</span>
              </h1>
              <div className="flex gap-3">
                <del>$25.00</del>
                <h4>$20.00</h4>
              </div>
              <div className="flex gap-[2px] text-xl text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div
            onMouseEnter={() => setIsHover(10)}
            onMouseLeave={() => setIsHover(0)}
            className="flex justify-between"
          >
            <div className="relative w-[30%]">
              <Image
                src={t1}
                alt=""
                className={
                  isHover === 10
                    ? "w-full h-full bg-black bg-opacity-50 rounded-lg"
                    : "w-full h-full bg-purple-50 rounded-lg"
                }
              />
              {isHover === 10 && (
                <AiOutlineCarryOut className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#EF682E] text-white text-4xl p-1 rounded-lg" />
              )}
            </div>

            <div>
              <h1 className="text-xl font-bold">
                Fresh Apple <span className="text-xl font-normal">(5 kg)</span>
              </h1>
              <div className="flex gap-3">
                <del>$25.00</del>
                <h4>$20.00</h4>
              </div>
              <div className="flex gap-[2px] text-xl text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div
            onMouseEnter={() => setIsHover(11)}
            onMouseLeave={() => setIsHover(0)}
            className="flex justify-between"
          >
            <div className="relative w-[30%]">
              <Image
                src={t1}
                alt=""
                className={
                  isHover === 11
                    ? "w-full h-full bg-black bg-opacity-50 rounded-lg"
                    : "w-full h-full bg-purple-50 rounded-lg"
                }
              />
              {isHover === 11 && (
                <AiOutlineCarryOut className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#EF682E] text-white text-4xl p-1 rounded-lg" />
              )}
            </div>

            <div>
              <h1 className="text-xl font-bold">
                Fresh Apple <span className="text-xl font-normal">(5 kg)</span>
              </h1>
              <div className="flex gap-3">
                <del>$25.00</del>
                <h4>$20.00</h4>
              </div>
              <div className="flex gap-[2px] text-xl text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div
            onMouseEnter={() => setIsHover(12)}
            onMouseLeave={() => setIsHover(0)}
            className="flex justify-between"
          >
            <div className="relative w-[30%]">
              <Image
                src={t1}
                alt=""
                className={
                  isHover === 12
                    ? "w-full h-full bg-black bg-opacity-50 rounded-lg"
                    : "w-full h-full bg-purple-50 rounded-lg"
                }
              />
              {isHover === 12 && (
                <AiOutlineCarryOut className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#EF682E] text-white text-4xl p-1 rounded-lg" />
              )}
            </div>

            <div>
              <h1 className="text-xl font-bold">
                Fresh Apple <span className="text-xl font-normal">(5 kg)</span>
              </h1>
              <div className="flex gap-3">
                <del>$25.00</del>
                <h4>$20.00</h4>
              </div>
              <div className="flex gap-[2px] text-xl text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <a href="" className="hover:text-[#EF682E] hover:underline">
            View All Produds
          </a>
        </div>
        <div className=" relative bg-[url('../../public/pd.png')] min-h-[500px] bg-no-repeat bg-cover bg-[#609E45] text-white">
          <div className="grid gap-2 place-items-center p-2 ">
            <h2 className="font-bold text-xl">Free Delivery Over $50.00</h2>
            <p className="text-xs">
              Shop $50.00+ Producrs and Get Free Delivery Anywhere
            </p>
            <button className="border-2 px-4 py-2 font-bold text-xl rounded-md hover:bg-white hover:text-[#EF682E] z-10">
              Shop Now
            </button>
          </div>

          <Image src={pd} alt="" className="absolute bottom-0 z-0 opacity-30" />
        </div>
      </div>
  );
};

export default Products;
