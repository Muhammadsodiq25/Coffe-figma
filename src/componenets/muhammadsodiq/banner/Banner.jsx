import "./Banner.css";

const Banner = ({ btn1, btn2, img }) => {
  return (
    <div className="banner">
      <div className="banner__text">
        <h1 className="banner--title">
          Enjoy your coffee <br />before your activity
        </h1>
        <p className="banner--subtitle">
          Boost your productivity and build your <br />
          mood with a glass of coffee in the morning
        </p>
        <div className="banner__btns">
          <button className="banner--btn1">{btn1}</button>
          <button className="banner--btn2">{btn2}</button>
        </div>
      </div>
      <div className="banner__images">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Banner;
