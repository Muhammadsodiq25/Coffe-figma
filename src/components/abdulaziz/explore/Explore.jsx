import "./Explore.css";
import cart1 from "../../../assets/explore__cart1--img.png";
import cart2 from "../../../assets/explore__cart2--img.png";
import cart3 from "../../../assets/explore__cart3--img.png";
import cart4 from "../../../assets/explore__cart4--img.png";
import cart5 from "../../../assets/explore__cart5--img.png";
import cart6 from "../../../assets/explore__cart6--img.png";

const Explore = () => {
  return (
    <div className="explore">
      <h1 className="explore__title">Explore Products</h1>
      <div className="carts">
        <div className="cart1">
          <h2 className="cart1__title">Monthy Deals</h2>
          <button className="carts__shop--btn">Shop Now!</button>
          <img src={cart1} alt="Sale" />
        </div>
        <div className="cart2">
          <h2 className="cart2__title">Whole Beans</h2>
          <button className="carts__shop--btn">Shop Now!</button>
          <img src={cart2} alt="beans" />
        </div>
        <div className="cart3">
          <h2 className="cart3__title">Ground Beans</h2>
          <button className="carts__shop--btn">Shop Now!</button>
          <img src={cart3} alt="ground__beans" />
        </div>
        <div className="cart4">
          <h2 className="cart4__title">Coffee Machines</h2>
          <button className="carts__shop--btn">Shop Now!</button>
          <img src={cart4} alt="machines" />
        </div>
        <div className="cart5">
          <h2 className="cart5__title">Accessories</h2>
          <button className="carts__shop--btn">Shop Now!</button>
          <img src={cart5} alt="Accessories" />
        </div>
        <div className="cart6">
          <h2 className="cart6__title">Coffee Capsules</h2>
          <button className="carts__shop--btn">Shop Now!</button>
          <img src={cart6} alt="Capsules" />
        </div>
      </div>
      <div className="explore__footer">
        <button className="loyalty">Loyalty program</button>
        <span>&rarr;</span>
        <p>Earn points and get product discounts</p>
      </div>
    </div>
  );
};

export default Explore;
