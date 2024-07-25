import "./Article.css";

function Article() {
  return (
    <article className="lojas container">
      <h2 className="font-1-xxl">
        lojas locais<span className="cor-p1">.</span>
      </h2>
      <div className="lojas-item">
        <img
          src="/src/img/lojas/rj.jpg"
          alt="mapa marcando o endereço em Rua Ali Perto, 25 - Rio de Janeiro - RJ"
        />
        <div className="lojas-conteudo">
          <h3 className="font-1-xl">Rio de Janeiro</h3>
          <div className="lojas-dados font-2-s cor-8">
            <p>Rua Ali Perto, 25</p>
            <p>Rio de Janeiro - RJ</p>
          </div>
          <div className="lojas-dados font-2-s cor-8">
            <a href="mailto:rj@bikcraft.com">rj@bikcraft.com</a>
            <a href="tel:+552199999999">+55 21 9999-9999</a>
          </div>
          <p className="lojas-tempo font-1-s">
            <img src="src/img/icones/horario.svg" alt="" />
            08-18h de seg à dom
          </p>
        </div>
      </div>
      <div className="lojas-item">
        <img
          src="/src/img/lojas/sp.jpg"
          alt="mapa marcando o endereço em Rua Ali Perto, 25 - São Paulo - SP"
        />
        <div className="lojas-conteudo">
          <h3 className="font-1-xl">São Paulo</h3>
          <div className="lojas-dados font-2-s cor-8">
            <p>Rua Ali Perto, 25</p>
            <p>São Paulo - SP</p>
          </div>
          <div className="lojas-dados font-2-s cor-8">
            <a href="mailto:sp@bikcraft.com">sp@bikcraft.com</a>
            <a href="tel:+551199999999">+55 11 9999-9999</a>
          </div>
          <p className="lojas-tempo font-1-s">
            <img src="src/img/icones/horario.svg" alt="" />
            08-18h de seg à dom
          </p>
        </div>
      </div>
    </article>
  );
}

export default Article;
