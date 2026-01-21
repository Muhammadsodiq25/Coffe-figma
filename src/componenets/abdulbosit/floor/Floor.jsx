import "./Floor.css";

const Floor = ({ leftImg, floorLeftBoxH2, floorLeftBoxP, floorLeftBoxH3, floorRightTextH2, floorRightTextP, floorRightTextH3, floorRightImg1, floorRightImg2 }) => {
  return (
    <div className="container">
      <section className="floor">
        <div className="floor__left">
          <div className="floor__left--img">
            <img src={leftImg} alt="" />
          </div>
          <div className="floor__left--box">
            <h2>{floorLeftBoxH2}</h2>
            <p>{floorLeftBoxP}</p>
            <h3>{floorLeftBoxH3}  </h3>
          </div>
        </div>
        <div className="floor__right">
          <div className="floor__right--text">
            <h2>{floorRightTextH2}</h2>
            <p>{floorRightTextP}</p>
            <h3>{floorRightTextH3}</h3>
          </div>
          <div className="floor__right--img">
            <img className="right__img1" src={floorRightImg1} alt="" />
            <img className="right__img2" src={floorRightImg2} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Floor;
