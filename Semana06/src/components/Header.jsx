function Header() {
  return (
    <div className="mx-auto flex h-[9.62rem] max-w-[120rem] flex-wrap items-center justify-between gap-5 px-[2rem] py-5">
      <a href="https://www.origamid.com/projetos/bikcraft/">
        <img src="../../public/bikcraft.svg" alt="bikcraft logo" />
      </a>
      <nav>
        <ul className="flex flex-wrap gap-10 text-[5.25rem] font-normal text-white transition after:mt-1 after:block after:h-1 after:w-0">
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
  );
}

export default Header;
