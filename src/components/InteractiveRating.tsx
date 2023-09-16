// import React from "react";
import { useState } from "react";
import "./InteractiveRating.css";
import Star from "../assets/images/icon-star.svg";
<style>@import url('https://fonts.google.com/specimen/Overpass');</style>;

const InteractiveRating = () => {
  const [rating, setRating] = useState(-1);
  const [stars, setStars] = useState(["*"]);

  const setStarsArray = (rating: number) => {
    console.log("setting stars " + rating);
    setRating(rating);
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push("*");
    }
    console.log(stars);
    setStars(stars);
  };

  return (
    <>
      <div className="interactive-rating-component">
        <div className="rating-panel">
          <div className="stars">
            {stars.map((star, i) => {
              return (
                <>
                  <div className="star">
                    <img src={Star} />
                  </div>
                </>
              );
            })}
            {/* <div className="star">
              <img src={Star} />
            </div>
            <div className="star">
              <img src={Star} />
            </div>
            <div className="star">
              <img src={Star} />
            </div>
            <div className="star">
              <img src={Star} />
            </div>
            <div className="star">
              <img src={Star} />
            </div> */}
          </div>
          <h1>How did we do?</h1>
          <p className="copy">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div className="ratings">
          <div className="rating" onClick={() => setStarsArray(1)}>
            1
          </div>
          <div className="rating" onClick={() => setStarsArray(2)}>
            2
          </div>
          <div className="rating" onClick={() => setStarsArray(3)}>
            3
          </div>
          <div className="rating" onClick={() => setStarsArray(4)}>
            4
          </div>
          <div className="rating" onClick={() => setStarsArray(5)}>
            5
          </div>
        </div>
        <button className="submit">SUBMIT</button>
        <div className="thank-you-panel">THANK YOU</div>
      </div>
    </>
  );
};

export default InteractiveRating;
