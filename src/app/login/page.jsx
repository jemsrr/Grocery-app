"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const defaultValue = {
  email: "",
  password: "",
};
const Login = () => {
  const router = useRouter();
  const [data, setData] = useState(defaultValue);

  const onValueChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value, // Update checkbox value directly
    }));
  };

  const onLogin = async (e) => {
    e.preventDefault();

    if (!data.email || !data.password) {
      alert("please fill all mandatory fields");
      return;
    }
    try {
      const res = await axios.post("api/user/login", data);
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
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <p>A whole new online shopping journey start right here.</p>
        </div>
        <hr className="bg-[#609E45] h-1 w-[10%]" />
        <form className="grid gap-2">
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
          <div className="flex justify-between">
            <div className="flex justify-start gap-2">
              <input name="check" checked={data.check} type="checkbox" />
              <label htmlFor="">Remamber me</label>
            </div>

            <label htmlFor="">Forgot password</label>
          </div>
          <button
            onClick={onLogin}
            className="text-white font-bold bg-[#609E45] p-4 rounded-md"
          >
            Login Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
