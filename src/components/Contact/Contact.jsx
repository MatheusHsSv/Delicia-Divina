import React, { useEffect } from "react";
import "./Contact.css";
import AOS from "aos";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="Contact" data-aos="fade-right" id="Contato">
      <div className="titleDiv">
        <h1>Contato</h1>
      </div>

      <div className="boxContact">
        <div className="box">
          
        </div>

        <div className="icon">
          <div>
            <a href="https://www.instagram.com/deliciadivinaa/" target="_blank">
              <img src="../icones/instagram.png" alt="" />
            </a>
            <h2>Nosso Instagram</h2>
          </div>
          <div>
            <a href="https://wa.me/5519997643065" target="_blank">
              <img src="../icones/whatsapp.png" alt="" />
            </a>
              <h2>Nosso Contato</h2>
          </div>
          <div className="icon-ifood">
            <a
              href="https://cardapiodigital.io/422100ef-469f-4700-a19d-94b93bcb00c6"
              target="_blank"
            >
              <img src="../icones/ifood.png" alt="" />
            </a>
              <h2>Cardapío Ifood</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
