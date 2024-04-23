"use client";
import Link from "next/link";
const NotFound = () => {
  return (
    <div className="h-screen w-screen grid place-content-center place-items-center bg-[url('../../public/nfbg.png')] bg-[#EF682E20] bg-no-repeat bg-cover">
      <div className="grid place-items-center text-center w-[90%] sm:w-[60%] gap-4">
        <h2 className="font-extrabold text-3xl text-[#609E45]">Oops!</h2>
        <p className="text-xl">The page you looking for is dosen’t exit.</p>
        <div className="p-2 font-black text-9xl bg-[url('../../public/nf.png')] bg-clip-text text-transparent bg-no-repeat bg-cover">
          404
        </div>
        <p>
          The page you look for does not exist or another error occured pls
          kindly refreash or retun to{" "}
          <Link href={"/"} className="text-[#EF682E]">
            home page.
          </Link>
        </p>
        <div className="grid sm:flex justify-center gap-4">
          <Link
            href={"/"}
            className="font-bold text-[#609E45] border-2 border-[#609E45] px-4 py-2 rounded-md hover:text-white hover:bg-[#609E45]"
          >
            Go to Homepage
          </Link>
          <button className="font-bold text-[#609E45] border-2 border-[#609E45] px-4 py-2 rounded-md hover:text-white hover:bg-[#609E45]">
            Help Center
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
