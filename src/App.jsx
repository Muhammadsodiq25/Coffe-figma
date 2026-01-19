import Header from "./componenets/muhammadsodiq/header/Header";
import Banner from "./componenets/muhammadsodiq/banner/Banner";
import Floor from "./componenets/abdulbosit/floor/Floor";
import Discover from "./componenets/abdulbosit/discover/Discover";
import Base from "./componenets/akbarshox/base/Base";
import Different from "./componenets/akbarshox/different/Different";
import Explore from "./componenets/abdulaziz/explore/Explore";
import Blog from "./componenets/abdulaziz/blog/Blog";
import Feedback from "./componenets/abdulbosit/feedback/Feedback";
import Book from "./componenets/rahmatullo/book/Book";
import Footer from "./componenets/rahmatullo/footer/Footer";
import Popular from "./componenets/muhammadsodiq/popular/Popular";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import bannerImg from "./assets/muhammadsodiq-banner-img.jpg";

import headerImg from "./assets/muhammadsodiq-header-img.png";
const nav__links = ["About us", "Our Product", "Delivery"];

import popularImg from "./assets/muhammadsodiq-popular-cart-img1.png";
import popularImg2 from "./assets/muhammadsodiq-popular-cart-img2.jpg";
import popularImg3 from "./assets/muhammadsodiq-popular-cart-img3.png";

const popular__cart = [
  {
    name: "Espresso",
    img: popularImg,
  },

  {
    name: "Vanilla Latte",
    img: popularImg2,
  },

  {
    name: "Hazelnut Latte",
    img: popularImg3,
  },
];

const App = () => {
  return (
    <div className="container">
      <Header
        logo={headerImg}
        nav={nav__links}
        search__btn={<CiSearch />}
        input={"Cappuccino"}
        shopping__cart={<FiShoppingCart />}
      />
      <Banner btn1={`Order now 🛒`} btn2={"More menu"} img={bannerImg} />
      <Popular cart={popular__cart} />

      <Floor />
      <Discover />

      <Base />
      <Different />

      <Explore />
      <Blog />

      <Feedback />

      <Book />
      <Footer />
    </div>
  );
};

export default App;
