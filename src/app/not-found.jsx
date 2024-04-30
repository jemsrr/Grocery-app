// "use client";
// import { usePathname, useRouter } from "next/navigation";
import NotFound from "./components/NotFound";
const Not_Found = () => {
  // const path = usePathname();
  // const route = useRouter();
  // if (path !== "/404") {
  //   route.replace("/404");
  // }
  // if (path === "/404") {
  return <NotFound />;
  // }
};

export default Not_Found;
