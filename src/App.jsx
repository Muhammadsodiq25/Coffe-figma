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
