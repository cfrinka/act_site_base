import "./Hero.css";
import { Link } from "react-scroll";
import darkArrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container" id="hero">
      <div className="hero-text">
        <h1>Tecnologia de Outro Mundo para Transformar seu Negócio</h1>
        <p>
          Bem-vindo à ACT Soluções, onde transformamos os desafios de negócios
          em soluções galácticas. Nossa missão é impulsionar o crescimento e a
          eficiência das empresas por meio de inovações tecnológicas avançadas.
          Assim como as estrelas iluminam o universo, nossas soluções iluminam o
          caminho para o sucesso empresarial, oferecendo ferramentas
          personalizadas e estratégias de ponta. Explore novos horizontes com a
          ACT Soluções e descubra como podemos levar seu negócio a novas alturas
          no universo digital.
        </p>
        <Link to="contact" smooth offset={0} duration={500}>
          <button className="btn">
            Explore mais <img src={darkArrow} alt="button" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
