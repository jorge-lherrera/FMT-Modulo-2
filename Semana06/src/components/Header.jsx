function Header() {
  return (
    <>
      <div className="flex h-32 flex-wrap justify-between gap-[2rem] bg-black px-[2rem] align-bottom">
        <div>
          <a href="./" className="decoration-none text-inherit">
            <img
              src="../public/bikcraft.svg"
              alt="bikcraft"
              className="block h-auto max-w-full"
            />
          </a>
        </div>
        <nav>
          <ul className="justify-star m-0 flex gap-3 p-0 text-[5rem] text-white">
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
    </>
  );
}

export default Header;
