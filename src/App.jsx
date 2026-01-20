import Header from "./components/muhammadsodiq/header/Header";
import Banner from "./components/muhammadsodiq/banner/Banner";
import Floor from "./components/abdulbosit/floor/Floor";
import Discover from "./components/abdulbosit/discover/Discover";
import Base from "./components/akbarshox/base/Base";
import Different from "./components/akbarshox/different/Different";
import Explore from "./components/abdulaziz/explore/Explore";
import Blog from "./components/abdulaziz/blog/Blog";
import Feedback from "./components/abdulbosit/feedback/Feedback";
import Book from "./components/rahmatullo/book/Book";
import Footer from "./components/rahmatullo/footer/Footer";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Banner />

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
