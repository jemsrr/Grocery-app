import Categories from "./components/Categories";
import DlMobile from "./components/DlMobile";
import Feature from "./components/Feature";
import MainHome from "./components/MainHome";
import Items from "./components/Item";
import Testimonial from "./components/Testimonial";
import TopSaver from "./components/TopSaver";
import Products from "./components/Products";
import BlogandPartner from "./components/BlogandPartner";

export default function Home() {
  return (
    <div>
      <MainHome />
      <Feature />
      <Categories />
      <Items />
      <TopSaver />
      <Testimonial />
      <DlMobile />
      <Products />
      <BlogandPartner />
    </div>
  );
}
