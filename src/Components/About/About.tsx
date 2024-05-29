import "./About.css";
import about_img from "../../assets/startup.jpg";
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
        <h2>A Jornada da ACT: De Inovação a Liderança no Setor</h2>
        <p>
          A ACT foi fundada em 2010 com a missão de revolucionar a forma como as
          empresas abordam a inovação e a tecnologia. Desde o início, nossos
          fundadores acreditaram que o sucesso empresarial dependia de soluções
          personalizadas e estratégias bem planejadas. Com uma pequena equipe de
          visionários, a ACT começou a oferecer serviços de consultoria e
          implementação de tecnologias avançadas, rapidamente conquistando a
          confiança de diversas empresas. Ao longo dos anos, a ACT expandiu suas
          operações, mantendo-se sempre na vanguarda das inovações tecnológicas.
        </p>
        <p>
          Hoje, a ACT é reconhecida como uma líder no setor, atendendo a uma
          vasta gama de indústrias e empresas de todos os tamanhos. Nossa
          equipe, composta por especialistas altamente qualificados, continua a
          desenvolver soluções inovadoras que ajudam nossos clientes a enfrentar
          desafios complexos e a alcançar seus objetivos de negócios. Com um
          compromisso inabalável com a excelência e a satisfação do cliente, a
          ACT continua a crescer e a prosperar, guiando empresas rumo a um
          futuro mais eficiente e bem-sucedido.
        </p>
      </div>
    </div>
  );
};

export default About;
