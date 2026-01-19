import "./Popular.css";

const Popular = ({ cart }) => {
  return (
    <div className="popular">
      <h3 className="popular--title">Popular Now</h3>
      <div className="popular__cont">
        {cart.map((item) => {
          return (
            <div className="popular__cart">
              <div className="popular__cart__images">
                <img src={item.img} alt="" className="popular--img" />
              </div>
              <div className="popular__text">
                <h1 className="popular__cart--title">{item.name}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
