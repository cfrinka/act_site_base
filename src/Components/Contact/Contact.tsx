/* eslint-disable @typescript-eslint/no-explicit-any */
import "./Contact.css";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
/* import location_icon from "../../assets/location-icon.png"; */
import white_arrow from "../../assets/white-arrow.png";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Enviando....");
    const formData = new FormData(event.target);

    formData.append("access_key", "31b49593-515b-4023-9ec0-513e48caa8a1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Mensagem enviada com sucesso.");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-col">
        <h3>Descubra as Soluções da ACT: Envie Sua Mensagem Agora!</h3>
        <p>
          Você busca soluções inovadoras para transformar seu negócio? A ACT é a
          parceira ideal para levar sua empresa ao próximo nível. Com uma equipe
          de especialistas e tecnologia de ponta, oferecemos estratégias
          personalizadas para impulsionar seus resultados. Envie uma mensagem
          para nós e descubra como podemos ajudar seu negócio a crescer de forma
          sustentável e eficaz. Não perca tempo, fale com nossos especialistas e
          comece a transformar seu futuro hoje mesmo!
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            contato@actcode.com.br
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +55 34 99256-5825
          </li>
          {/* <li>
            <img src={location_icon} alt="" />
            Rua dos Amores, 123 Bairro dos Sonhos <br /> São Paulo - SP CEP
            01000-000
          </li> */}
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Nome</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            required
          />
          <label>Telefone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Digite seu telefone com DDD"
            required
          />
          <label>Mensagem</label>
          <textarea
            name="message"
            rows={6}
            placeholder="Escreva sua mensagem"
            required
          />
          <button type="submit" className="btn dark-btn">
            Enviar <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
