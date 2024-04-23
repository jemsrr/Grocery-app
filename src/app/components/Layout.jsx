"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const path = usePathname();
  if (path === "/signup" || path === "/login" || path === "/404" || path === "/comingSoon") {
    return (
      <>
        <main>{children}</main>
      </>
    );
  }
  if (path === "/checkout") {
    return (
      <>
        <Navbar />
        <main>{children}</main>
        <Newsletter />
        <div className="bg-[#609E45] h-10"></div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Layout;
