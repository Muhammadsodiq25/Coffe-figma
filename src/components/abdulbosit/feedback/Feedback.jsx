import "./Feedback.css";

const Feedback = ({ feedbackTextH2, feedbackTextP, feedbackBoxP1, feedbackBoxH3, feedbackBoxP2 }) => {
  return (
    <div className="feedback">
      <section className="feedback">
        <div className="feedback__text">
          <h2>{feedbackTextH2}</h2>
          <p>{feedbackTextP}</p>
        </div>
        <div className="feedback__box">
          <p className="feedback__box--p1">{feedbackBoxP1}</p>
          <h3>{feedbackBoxH3}</h3>
          <p className="feedback__box--p2">{feedbackBoxP2}</p>
        </div>
      </section>
    </div>
  );
};

export default Feedback;
