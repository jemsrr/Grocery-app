import Image from "next/image";
import Link from "next/link";
import gd from "@/app/assets/grocery/gd.png";
import { main, btn } from "@/app/components/productmenu.module.css";
import tm1 from "@/app/assets/ourTeam/tm1.png";
import tm2 from "@/app/assets/ourTeam/tm2.png";
import tm3 from "@/app/assets/ourTeam/tm3.png";
import tm4 from "@/app/assets/ourTeam/tm4.png";
import tm5 from "@/app/assets/ourTeam/tm5.png";
import tm6 from "@/app/assets/ourTeam/tm6.png";

import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";

const OurTeam = () => {
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
            Meet our team member
          </h1>
          <h4>
            <Link href={"/"}>Home</Link> -{" "}
            <span className="text-[#EF682E]">Our Team</span>
          </h4>
        </div>
      </div>
      <div className="px-[10%] py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
        <div
          id={main}
          className="relative p-4 border-2 hover:border-[#609E45] rounded-xl"
        >
          <Image src={tm1} alt="" className="w-full" />
          <h2 className="font-semibold text-xl">Sasha White</h2>
          <p>CEO and Founder</p>
          <div
            id={btn}
            className="absolute bottom-20 left-[50%] translate-x-[-50%] px-6 py-2 rounded-lg hidden justify-center items-center text-white bg-[#609E45]  gap-2 text-xl font-bold"
          >
            <div className="border-2 rounded-full p-1 hover:bg-[#EF682E] hover:border-none">
              <BiLogoFacebook />
            </div>
            <div className="border-2 rounded-full p-1 hover:bg-[#EF682E] hover:border-none">
              <BiLogoInstagram />
            </div>
            <div className="border-2 rounded-full p-1 hover:bg-[#EF682E] hover:border-none">
              <BiLogoLinkedin />
            </div>
            <div className="border-2 rounded-full p-1 hover:bg-[#EF682E] hover:border-none">
              <BiLogoTwitter />
            </div>
          </div>
        </div>
        <div
          id={main}
          className="relative p-4 border-2 hover:border-[#609E45] rounded-xl"
        >
          <Image src={tm2} alt="" className="w-full" />
          <h2 className="font-semibold text-xl">Vilma Jarvi</h2>
          <p>Co-Founder</p>
          <div
            id={btn}
            className="absolute bottom-20 left-[50%] translate-x-[-50%] px-6 py-2 rounded-lg hidden justify-center items-center text-white bg-[#609E45]  gap-2 text-xl font-bold"
          >
            <div className="border-2 rounded-full p-1 hover:bg-[#EF682E] hover:border-none">
              <BiLogoFacebook />
            </div>
            <div className="border-2 rounded-full p-1 hover:bg-[#EF682E] hover:border-none">
              <BiLogoInstagram />
            </div>
            <div className="border-2 rounded-full p-1 hover:bg-[#EF682E] hover:border-none">
              <BiLogoLinkedin />
            </div>
            <div className="border-2 rounded-full p-1 hover:bg-[#EF682E] hover:border-none">
              <BiLogoTwitter />
            </div>
          </div>
        </div>
        <div
          id={main}
          className="relative p-4 border-2 hover:border-[#609E45] rounded-xl"
        >
          <Image src={tm3} alt="" className="w-full" />
          <h2 className="font-semibold text-xl">Rhys Hawkins</h2>
          <p>Manager</p>
          <div
            id={btn}
            className="absolute bottom-20 left-[50%] translate-x-[-50%] px-6 py-2 rounded-lg hidden justify-center items-center text-white bg-[#609E45]  gap-2 text-xl font-bold"
          >
            <div className="border-2 rounded-full p-1 hover:bg-[#EF682E] hover:border-none">
              <BiLogoFacebook />
            </div>
            <div className="border-2 rounded-full p-1 hover:bg-[#EF682E] hover:border-none">
              <BiLogoInstagram />
            </div>
            <div className="border-2 rounded-full p-1 hover:bg-[#EF682E] hover:border-none">
              <BiLogoLinkedin />
            </div>
            <div className="border-2 rounded-full p-1 hover:bg-[#EF682E] hover:border-none">
              <BiLogoTwitter />
            </div>
          </div>
        </div>
        <div
          id={main}
          className="relative p-4 border-2 hover:border-[#609E45] rounded-xl"
        >
          <Image src={tm4} alt="" className="w-full" />
          <h2 className="font-semibold text-xl">Victoria Roach</h2>
          <p>Accountant</p>
          <div
            id={btn}
            className="absolute bottom-20 left-[50%] translate-x-[-50%] px-6 py-2 rounded-lg hidden justify-center items-center text-white bg-[#609E45]  gap-2 text-xl font-bold"
          >
            <div className="border-2 rounded-full p-1 hover:bg-[#EF682E] hover:border-none">
              <BiLogoFacebook />
            </div>
            <div className="border-2 rounded-full p-1 hover:bg-[#EF682E] hover:border-none">
              <BiLogoInstagram />
            </div>
            <div className="border-2 rounded-full p-1 hover:bg-[#EF682E] hover:border-none">
              <BiLogoLinkedin />
            </div>
            <div className="border-2 rounded-full p-1 hover:bg-[#EF682E] hover:border-none">
              <BiLogoTwitter />
            </div>
          </div>
        </div>
        <div
          id={main}
          className="relative p-4 border-2 hover:border-[#609E45] rounded-xl"
        >
          <Image src={tm5} alt="" className="w-full" />
          <h2 className="font-semibold text-xl">Danial White</h2>
          <p>Store Keeper</p>
          <div
            id={btn}
            className="absolute bottom-20 left-[50%] translate-x-[-50%] px-6 py-2 rounded-lg hidden justify-center items-center text-white bg-[#609E45]  gap-2 text-xl font-bold"
          >
            <div className="border-2 rounded-full p-1 hover:bg-[#EF682E] hover:border-none">
              <BiLogoFacebook />
            </div>
            <div className="border-2 rounded-full p-1 hover:bg-[#EF682E] hover:border-none">
              <BiLogoInstagram />
            </div>
            <div className="border-2 rounded-full p-1 hover:bg-[#EF682E] hover:border-none">
              <BiLogoLinkedin />
            </div>
            <div className="border-2 rounded-full p-1 hover:bg-[#EF682E] hover:border-none">
              <BiLogoTwitter />
            </div>
          </div>
        </div>
        <div
          id={main}
          className="relative p-4 border-2 hover:border-[#609E45] rounded-xl"
        >
          <Image src={tm6} alt="" className="w-full" />
          <h2 className="font-semibold text-xl">Joshua Wilson</h2>
          <p>Store Keeper</p>
          <div
            id={btn}
            className="absolute bottom-20 left-[50%] translate-x-[-50%] px-6 py-2 rounded-lg hidden justify-center items-center text-white bg-[#609E45]  gap-2 text-xl font-bold"
          >
            <div className="border-2 rounded-full p-1 hover:bg-[#EF682E] hover:border-none">
              <BiLogoFacebook />
            </div>
            <div className="border-2 rounded-full p-1 hover:bg-[#EF682E] hover:border-none">
              <BiLogoInstagram />
            </div>
            <div className="border-2 rounded-full p-1 hover:bg-[#EF682E] hover:border-none">
              <BiLogoLinkedin />
            </div>
            <div className="border-2 rounded-full p-1 hover:bg-[#EF682E] hover:border-none">
              <BiLogoTwitter />
            </div>
          </div>
        </div>
      </div>
      <div className="font-bold text-xl flex justify-center items-center pb-20">
        <h1 className="text-center bg-[#609E4520] w-[90%] sm:w-[60%] md:w-[30%] px-10 py-4 rounded-full">
          Want join our team? Call Us on{" "}
          <span className="text-[#609E45]">+44 123 456 7890</span>
        </h1>
      </div>
    </div>
  );
};

export default OurTeam;
