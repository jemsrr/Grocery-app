"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const defaultValue = {
  fullname: "",
  email: "",
  password: "",
  conformPassword: "",
  check: false,
};
const SignUp = () => {
  const router = useRouter();
  const [data, setData] = useState(defaultValue);
  const onValueChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value, // Update checkbox value directly
    }));
  };

  const onSignup = async (e) => {
    e.preventDefault();
    if (!data.check) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    if (
      !data.fullname ||
      !data.email ||
      !data.password ||
      !data.conformPassword
    ) {
      alert("please fill all mandatory fields");
      return;
    }

    if (data.password !== data.conformPassword) {
      alert("your password and conformPassword is not same");
      return;
    }
    try {
      const res = await axios.post("api/user/signUp", data);
      setData(defaultValue);
      if (res.status === 200) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
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
            name="fullname"
            type="text"
            value={data.fullname}
            placeholder="Full Name"
            onChange={onValueChange}
            className="p-2 rounded-lg border-2 hover:border-[#609E45]"
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="text"
            value={data.email}
            placeholder="Email"
            onChange={onValueChange}
            className="p-2 rounded-lg border-2 hover:border-[#609E45]"
          />
          <label htmlFor="">Password</label>
          <input
            name="password"
            type="text"
            value={data.password}
            placeholder="Password"
            onChange={onValueChange}
            className="p-2 rounded-lg border-2 hover:border-[#609E45]"
          />
          <label htmlFor="">Conform Password</label>
          <input
            name="conformPassword"
            type="text"
            value={data.conformPassword}
            placeholder="Conform Password"
            onChange={onValueChange}
            className="p-2 rounded-lg border-2 hover:border-[#609E45]"
          />
          <div className="flex justify-start gap-2">
            <input
              name="check"
              checked={data.check}
              onChange={onValueChange}
              type="checkbox"
            />
            <label htmlFor="">I agree to the terms and conditions</label>
          </div>
          <button
            onClick={onSignup}
            className="text-white font-bold bg-[#609E45] p-4 rounded-md"
          >
            Sign Up Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
