import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="left-about">
        <img
          className="about-image"
          src="https://marketplace.canva.com/EAEjoDgdDHA/1/0/1600w/canva-weekend-sale-facebook-banner-ihfN9hc7WgM.jpg"
          alt="about-img"
        />
        <p className="about-title">Prices</p>
        <p className="about-cat">Best Prices</p>
        <p className="about-desc">
          In our store, you would find the best prices in the city. Every month
          we provide our customers with discounts and sales on certain
          categories of goods.
        </p>
      </div>
      <div className="center-about">
        <img
          className="about-image"
          src="https://thestreetvibe.com/wp-content/uploads/2019/04/@heyhegia-1-e1556050221915.jpg "
          alt="about-img"
        />
        <p className="about-title">Trends</p>
        <p className="about-cat">Newest Trends</p>
        <p className="about-desc">
          We always follow trends and try to collect the latest and most
          fashionable clothes in our shop. We have magazines, in which you can
          check out styles and colors.
        </p>
      </div>
      <div className="right-about">
        <img
          className="about-image"
          src="https://i0.wp.com/polishedimageandstyle.com/wp-content/uploads/2021/02/Avoid-Wasted-Time-by-Getting-Dressed-with-Your-Personal-Style-Strategy.png?fit=744%2C400&ssl=1"
          alt="about-img"
        />
        <p className="about-title">Collections</p>
        <p className="about-cat">Previous collections</p>
        <p className="about-desc">
          It's possible to buy the best pieces of clothes from previous
          collections with huge discounts. Every Saturday we provide our
          customers with sales.
        </p>
      </div>
    </div>
  );
};

export default About;
