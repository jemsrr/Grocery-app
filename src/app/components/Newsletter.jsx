import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-[url('../../public/newSletter.png')] py-20 flex justify-center bg-[#EF682E20] bg-no-repeat bg-cover">
      <div className=" w-[90%] md:w-[50%] text-center grid gap-4">
        <h1 className="font-bold text-3xl">Subscribe to newsletter</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry{"\u0027"}s standard dummy tex
        </p>
        <form className="grid sm:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 rounded-md border-2 border-[#EF682E50]"
          />
          <input
            type="text"
            placeholder="Your Name"
            className="sm:col-span-2 px-4 rounded-md border-2 border-[#EF682E50]"
          />
          <button className="text-white bg-[#609E45] px-4 py-2 w-fit rounded-md">
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
