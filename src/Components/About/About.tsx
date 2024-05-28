import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

interface AboutProps {
  setPlayerState: React.Dispatch<React.SetStateAction<boolean>>;
}
const About = ({ setPlayerState }: AboutProps) => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => setPlayerState(true)}
        />
      </div>
      <div className="about-right">
        <h3>Enim enim</h3>
        <h2>Ea aute do enim aliqua consequat.</h2>
        <p>
          Amet exercitation reprehenderit id officia sint. Exercitation elit non
          aute exercitation duis in mollit proident voluptate est. Enim mollit
          tempor laboris aliqua voluptate sint adipisicing. Qui ea dolore est
          adipisicing sint in.
        </p>
        <p>
          Id ex id nisi nulla sint dolore aute incididunt reprehenderit aute
          amet ut. Incididunt tempor occaecat deserunt anim id enim ad est
          incididunt esse reprehenderit exercitation. Reprehenderit commodo
          aliqua.
        </p>
        <p>
          Laborum occaecat aute voluptate do occaecat ullamco. Qui magna velit
          anim veniam aute aute sit minim est duis. Cupidatat dolore laborum
          culpa sint est do eiusmod ipsum labore sunt officia aute ad irure.
        </p>
      </div>
    </div>
  );
};

export default About;
