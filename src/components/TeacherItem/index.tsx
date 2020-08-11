import React from "react";
import "./styles.css";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/29630079?s=460&u=cef9ecdd078c87f059deb2c789500b31364d0c7e&v=4"
          alt="Cesar Escobar"
        />
        <div>
          <strong>Cesar Escobar</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada.
    <br />
        <br />
    Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas
    através de experiências. Mais de 200.000 pessoas já passaram por uma das
    minhas explosões.
  </p>
      <footer>
        <p>
          Preço/Hora
      <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
      Entrar em contato
    </button>
      </footer>
    </article>
  );
}

export default TeacherItem;