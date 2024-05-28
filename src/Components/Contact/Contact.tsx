/* eslint-disable @typescript-eslint/no-explicit-any */
import "./Contact.css";
import message_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "715bef11-d70d-48e4-bdf5-0e10be8fc7bd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={message_icon} alt="" />
        </h3>
        <p>
          Nisi aliquip ipsum mollit ullamco nisi do amet nostrud culpa mollit.
          Enim qui velit nostrud commodo id enim sint deserunt. Id nulla laborum
          enim et ad eiusmod consectetur eiusmod sit ipsum sit velit mollit in.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            e-mail@email.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +55 11 99888-4556
          </li>
          <li>
            <img src={location_icon} alt="" />
            Rua dos Amores, 123 Bairro dos Sonhos <br /> São Paulo - SP CEP
            01000-000
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
          <label>Write your message</label>
          <textarea
            name="message"
            rows={6}
            placeholder="Enter your message"
            required
          />
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
