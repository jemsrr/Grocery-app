import Image from "next/image";
import Link from "next/link";
import gd from "@/app/assets/grocery/gd.png";
import map from "@/app/assets/map.png"
import { BiPhoneCall, BiMap } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

const ContactUs = () => {
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
            Contact with us any time
          </h1>
          <h4>
            <Link href={"/"}>Home</Link> -{" "}
            <span className="text-[#EF682E]">Contact Us</span>
          </h4>
        </div>
      </div>
      <div className="px-[5%] lg:px-[10%] py-20 grid md:grid-cols-3 place-content-between">
        <div className="flex gap-4 items-center ">
          <BiPhoneCall className=" text-2xl font-bold text-[#609E45] bg-[#609E4520] rounded-xl p-2 h-[49px] w-[49px]" />
          <div>
            <h2 className="text-[16px]">Call Us on</h2>
            <h2 className="text-[16px] font-semibold ">+44 123 456 7890</h2>
            <h2 className="text-[16px] font-semibold ">+44 987 654 3210</h2>
          </div>
        </div>
        <div className="flex gap-4 items-center ">
          <AiOutlineMail className=" text-2xl font-bold text-[#609E45] bg-[#609E4520] rounded-xl p-2 h-[49px] w-[49px]" />
          <div>
            <h2 className="text-[16px]">Email Us</h2>
            <h2 className="text-[16px] font-semibold ">
              contact@troothemes.com
            </h2>
            <h2 className="text-[16px] font-semibold ">info@troothemes.com</h2>
          </div>
        </div>
        <div className="flex gap-4 items-center ">
          <BiMap className=" text-2xl font-bold text-[#609E45] bg-[#609E4520] rounded-xl p-2 h-[49px] w-[49px]" />
          <div>
            <h2 className="text-[16px]">Email Us</h2>
            <h2 className="text-[16px] font-semibold ">
              4516 School Street, Danbury, CT, Canada, 458068
            </h2>
          </div>
        </div>
      </div>
      <div className=" px-[10%] py-20  bg-[#EF682E20]">
        <div className="grid md:flex justify-between items-center">
          <div className="md:w-[45%]">
            <h2 className="text-white bg-[#609E45] w-fit px-4 py-1 rounded-md ">
              Leave A Message
            </h2>
            <h1 className="font-bold text-4xl text-[#EF682E]">
              Don’t hasitate to contact us if you need more help
            </h1>
          </div>
          <p className="md:w-[45%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy abd
            text ever since. dummy text.
          </p>
        </div>
        <form className="grid md:grid-cols-2 gap-10 bg-white p-2 md:p-10 my-10">
          <div className="grid gap-2">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="p-2 rounded-lg border-2 hover:border-[#609E45]"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="p-2 rounded-lg border-2 hover:border-[#609E45]"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="">Phone Number</label>
            <input
              type="text"
              placeholder="Phone Number"
              className="p-2 rounded-lg border-2 hover:border-[#609E45]"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="">Email Address</label>
            <input
              type="text"
              placeholder="Email Address"
              className="p-2 rounded-lg border-2 hover:border-[#609E45]"
            />
          </div>
          <div className="md:col-span-2 grid gap-2">
            <label htmlFor="">Write a Message ...</label>
            <textarea
              placeholder="Write a Message "
              className="p-2 rounded-lg border-2 hover:border-[#609E45]"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <button className="text-white text-xl w-fit font-bold bg-[#609E45] px-8 py-4 rounded-md">
            Submit Now
          </button>
        </form>
      </div>
      <Image src={map} alt="" className=" w-full"/>
    </div>
  );
};

export default ContactUs;
