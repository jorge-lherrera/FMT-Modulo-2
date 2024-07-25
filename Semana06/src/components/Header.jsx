import "./Header.css";

function Header() {
  return (
    <header className="header-bg">
      <div className="header container">
        <a href="https://www.origamid.com/projetos/bikcraft/">
          <img src="/src/img/bikcraft.svg" alt="Bikcraft" />
        </a>
        <nav aria-label="primaria">
          <ul className="header-menu font-1-m cor-0">
            <li>
              <a href="https://www.origamid.com/projetos/bikcraft/bicicletas.html">
                Bicicletas
              </a>
            </li>
            <li>
              <a href="https://www.origamid.com/projetos/bikcraft/seguros.html">
                Seguros
              </a>
            </li>
            <li>
              <a href="https://www.origamid.com/projetos/bikcraft/contato.html">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
