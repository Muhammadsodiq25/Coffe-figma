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

import floorLeftImg from "./assets/Abdulbosit-floor-left-img.avif";
const floorLeftBoxH2 = "Check out our coffee shop";
const floorLeftBoxP = "Boost your productivity and build";
const floorLeftBoxH3 = "FIND US";
import floorRightImg1 from "./assets/Abdulbosit-floor-right-img1.png";

import discoverImg from "./assets/Abdulbosit-discover-img.jpeg";

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

      <Floor
        leftImg={floorLeftImg}
        floorLeftBoxH2={floorLeftBoxH2}
        floorLeftBoxP={floorLeftBoxP}
        floorLeftBoxH3={floorLeftBoxH3}
        floorRightTextH2={"Try new floor first"}
        floorRightTextP={"Boost your productivity and build morning"}
        floorRightTextH3={"CONTACT US"}
        floorRightImg1={floorRightImg1}
      />
      <Discover
        discoverImg={discoverImg}
        discoverH2={"Discover the best coffee"}
        discoverP={
          "We are a company that makes and distributes delicious drinks. our main product is made with a secret recipe and available in stores worldwide."
        }
        discoverBtn={"Learn More"}
      />

      <Base />
      <Different />

      <Explore />
      <Blog />

      <Feedback
        feedbackTextH2={"Our coffee perfection feedback"}
        feedbackTextP={"We don't just make your coffee, we make your day!"}
        feedbackBoxP1={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset....."
        }
        feedbackBoxH3={"Jonny Thomas"}
        feedbackBoxP2={"Project Manager"}
      />

      <Book />
      <Footer />
    </div>
  );
};

export default App;
