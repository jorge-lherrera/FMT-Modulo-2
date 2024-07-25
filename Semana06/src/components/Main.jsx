import { useState } from "react";
import "./Main.css";
import {
  HiLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";

function Main() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário a ser enviado: ", form);
  };

  return (
    <main>
      <div className="titulo-bg">
        <div className="titulo container">
          <p className="font-2-l-b cor-5">Respostas em até 24h</p>
          <h1 className="font-1-xxl cor-0">
            nosso contato<span className="cor-p1">.</span>
          </h1>
        </div>
      </div>
      <div className="contato container">
        <section className="contato-dados" aria-label="Endereço">
          <h2 className="font-1-m cor-0">Loja Online</h2>
          <div className="contato-endereco font-2-s cor-4">
            <div className="contact_icon">
              <HiLocationMarker />
              <div>
                <p>Rua Ali Perto, 35</p>
                <p>Rio de Janeiro - RJ</p>
                <p>Brasil - Terra - Vita Láctea</p>
              </div>
            </div>
          </div>
          <address className="contato-meios font-2-s cor-4">
            <div className="contact_icon">
              <HiOutlineMail />
              <div>
                <a href="mailto:contato@bikcraft.com">contato@bikcraft.com</a>
                <a href="mailto:assistencia@bikcraft.com">
                  assistencia@bikcraft.com
                </a>
              </div>
            </div>
            <div className="contact_icon">
              <HiOutlinePhone />
              <div>
                <a href="tel:+552199999999">+55 21 9999-9999</a>
              </div>
            </div>
          </address>
          <div className="contato-redes">
            <a href="./">
              <img src="/src/img/redes/instagram-p.svg" alt="Instagram" />
            </a>
            <a href="./">
              <img src="/src/img/redes/facebook-p.svg" alt="Facebook" />
            </a>
            <a href="./">
              <img src="/src/img/redes/youtube-p.svg" alt="Youtube" />
            </a>
          </div>
        </section>
        <section className="contato-formulario" aria-label="Formulário">
          <form
            className="form"
            action="./contato.html"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Seu nome"
                value={form.nome}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="telefone">Telefone</label>
              <input
                type="text"
                id="telefone"
                name="telefone"
                placeholder="(21) 9999-9999"
              />
            </div>
            <div className="col-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="contato@email.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="col-2">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                rows={5}
                id="mensagem"
                name="mensagem"
                placeholder="O que você precisa?"
                value={form.mensagem}
                onChange={handleChange}
              />
            </div>
            <button className="botao col-2">Enviar Mensagem</button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default Main;
