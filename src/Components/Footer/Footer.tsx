import "./Footer.css";
/* import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png"; */
import instagram from "../../assets/instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <p>© ACT Code. Todos os direitos reservados.</p>
      <div className="socials">
        {/* <a href="">
          <img src={linkedin} alt="" />
        </a>
        <a href="">
          <img src={twitter} alt="" />
        </a> */}
        <a href="https://www.instagram.com/act_code">
          <img src={instagram} alt="" />
        </a>
      </div>
      <ul>
        <li>Termos de Serviço</li>
        <li>Política de Privacidade</li>
      </ul>
    </div>
  );
};

export default Footer;
