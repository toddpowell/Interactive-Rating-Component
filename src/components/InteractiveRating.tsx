// import React from "react";
import "./InteractiveRating.css";
<style>@import url('https://fonts.google.com/specimen/Overpass');</style>;

const InteractiveRating = () => {
  return (
    <>
      <div className="interactive-rating-component">
        <div className="rating-panel">
          <div className="stars">*</div>
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div className="ratings">
          <div className="rating">1</div>
          <div className="rating">2</div>
          <div className="rating">3</div>
          <div className="rating">4</div>
          <div className="rating">5</div>
        </div>
        <button className="submit">SUBMIT</button>
        <div className="thank-you-panel"></div>
      </div>
    </>
  );
};

export default InteractiveRating;
