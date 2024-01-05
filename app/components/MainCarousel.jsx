import React from "react";
import GlassMorphCard from "./GlassMorphCard";
import CarouselCard from "./CarouselCard";

const MainCarousel = () => {
  return (
    <div className="cards">
  <div className="outer">
    <div className="card" style={{'--delay': 1}}>
      <div className="header">
        <div className="profile">
          <div className="img">
            <CarouselCard
              img="/assets/crown-blue.png"
              title="Trading Evaluation at its best"
              text="Our evaluation account allows traders to prove their skill in order to trade our live funds."
            />
          </div>
        </div>
      </div>
    </div>
    <div className="card" style={{'--delay': 2}}>
      <div className="header">
        <div className="profile">
          <div className="img">
            <CarouselCard
              img="/assets/crown-blue.png"
              title="Trading Evaluation at its best"
              text="Our evaluation account allows traders to prove their skill in order to trade our live funds."
            />
          </div>
        </div>
      </div>
    </div>
    <div className="card" style={{'--delay': 3}}>
      <div className="header">
        <div className="profile">
          <div className="img">
            <CarouselCard
              img="/assets/crown-blue.png"
              title="Trading Evaluation at its best"
              text="Our evaluation account allows traders to prove their skill in order to trade our live funds."
            />
          </div>
        </div>
      </div>
    </div>
    <div className="card" style={{'--delay': 2}}>
      <div className="header">
        <div className="profile">
          <div className="img">
            <CarouselCard
              img="/assets/crown-blue.png"
              title="Trading Evaluation at its best"
              text="Our evaluation account allows traders to prove their skill in order to trade our live funds."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default MainCarousel;
