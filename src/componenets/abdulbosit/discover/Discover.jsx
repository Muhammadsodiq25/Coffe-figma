import "./Discover.css";

const Discover = ({ discoverImg, discoverH2, discoverP, discoverBtn }) => {
  return (
    <div className="container">
      <section className="discover">
        <div className="discover__img">
          <img src={discoverImg} alt="" />
        </div>
        <div className="discover__text">
          <h2>{discoverH2}</h2>
          <p>{discoverP}</p>
          <button>{discoverBtn}</button>
        </div>
      </section>
    </div>
  );
};

export default Discover;
