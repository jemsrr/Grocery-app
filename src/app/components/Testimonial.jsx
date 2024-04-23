import { BiSolidQuoteAltLeft, BiPerso } from "react-icons/bi";

const Testimonial = () => {
  return (
    <div className="font-Poppins mx-[5%] px-[5%] pt-20 bg-[url('../../public/Testimonial.png')] bg-no-repeat bg-cover">
      <div className="grid md:flex md:justify-between items-center sm:px-[10%]">
        <div className=" flex flex-col gap-4 ">
          <h2 className="text-white bg-[#609E45] w-fit px-4 py-1 rounded-md">
            Our Testimonial
          </h2>
          <h1 className="md:w-[90%] font-semibold text-5xl text-[#EF682E] ">
            Our customers love what we do.
          </h1>
        </div>
        <p className="md:w-[90%]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some and form, by injected
          humor, or randomized words.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-10 pt-20 ">
        <div className=" grid w-full place-items-center gap-10 px-6 py-2 border-[14px] rounded-2xl  hover:border-[#609E45] hover:text-[#609E45] hover:bg-black hover:bg-opacity-10 ">
          <BiSolidQuoteAltLeft className="p-1 text-4xl rounded-full" />
          <p className=" text-center text-black">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humor, or randomized.
          </p>
          <div className="grid place-items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-red-100   "></div>
            <h2 className="font-bold text-xl">Vilma Hawkins</h2>
            <h4 className="text-black">Customer</h4>
          </div>
        </div>
        <div className=" grid w-full place-items-center gap-10 px-6 py-2 border-[14px] rounded-2xl  hover:border-[#609E45] hover:text-[#609E45] hover:bg-black hover:bg-opacity-10 ">
          <BiSolidQuoteAltLeft className="p-1 text-4xl rounded-full" />
          <p className=" text-center text-black">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humor, or randomized.
          </p>
          <div className="grid place-items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-red-100   "></div>
            <h2 className="font-bold text-xl">Tonny Hensley</h2>
            <h4 className="text-black">Customer</h4>
          </div>
        </div>
        <div className=" grid w-full place-items-center gap-10 px-6 py-2 border-[14px] rounded-2xl  hover:border-[#609E45] hover:text-[#609E45] hover:bg-black hover:bg-opacity-10 ">
          <BiSolidQuoteAltLeft className="p-1 text-4xl rounded-full" />
          <p className=" text-center text-black">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humor, or randomized.
          </p>
          <div className="grid place-items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-red-100   "></div>
            <h2 className="font-bold text-xl">Victoria Roach</h2>
            <h4 className="text-black">Customer</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
