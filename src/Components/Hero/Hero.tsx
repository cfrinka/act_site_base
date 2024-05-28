import "./Hero.css";
import darkArrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container" id="hero">
      <div className="hero-text">
        <h1>
          Dolor officia qui pariatur tempor nulla est in officia ex ex aliqua.
        </h1>
        <p>
          Minim aliquip commodo in qui commodo occaecat quis eu aute
          adipisicing. Irure laborum consequat laborum consectetur ipsum est
          consequat aute cupidatat sit et. Eu irure aute irure occaecat ullamco
          consectetur labore duis nostrud excepteur esse elit dolor mollit.
          Laborum esse mollit laboris quis consequat pariatur nostrud ullamco
          irure. Culpa laboris nulla cupidatat quis deserunt est magna sit.
          Voluptate minim cupidatat sint anim occaecat officia sit do in minim
          velit aliqua.
        </p>
        <button className="btn">
          Explore more <img src={darkArrow} alt="button" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
