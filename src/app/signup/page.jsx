import React from "react";

const signUp = () => {
  return (
    <div className="font-Poppins min-h-screen px-[5%] md:px-[10%] py-20 bg-[#609E4520] flex justify-between gap-10 bg-[url('../../public/sbg.png')] bg-cover bg-no-repeat">
      <div className="hidden md:inline bg-[url('../../public/signup.png')] bg-cover bg-no-repeat w-[30%] lg:w-[50%]"></div>
      <div className="w-full md:w-[70%] lg:w-[50%] p-2 md:p-10 grid gap-2 bg-white">
        <div>
          <h1 className="text-3xl font-bold">Welcome to TRoo Grocery</h1>
          <p>Create your account by filling the form below</p>
        </div>
        <hr className="bg-[#609E45] h-1 w-[10%]" />
        <form className="grid gap-2">
          <label htmlFor="">Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 rounded-lg border-2 hover:border-[#609E45]"
          />
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Email"
            className="p-2 rounded-lg border-2 hover:border-[#609E45]"
          />
          <label htmlFor="">Password</label>
          <input
            type="text"
            placeholder="Password"
            className="p-2 rounded-lg border-2 hover:border-[#609E45]"
          />
          <label htmlFor="">Conform Password</label>
          <input
            type="text"
            placeholder="Conform Password"
            className="p-2 rounded-lg border-2 hover:border-[#609E45]"
          />
          <div className="flex justify-start gap-2">
            <input type="checkbox"/>
            <label htmlFor="">I agree to the terms and conditions</label>
          </div>
          <button className="text-white font-bold bg-[#609E45] p-4 rounded-md">Sign Up Now</button>
        </form>
      </div>
    </div>
  );
};

export default signUp;
