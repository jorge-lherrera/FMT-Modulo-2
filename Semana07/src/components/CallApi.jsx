import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./CallApi.module.css";

function CallApi() {
  const [titulo, setTitulo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release"
        );
        const primeiraNoticia = response.data.items[0];
        setTitulo(primeiraNoticia.titulo);
      } catch (error) {
        console.error("Erro ao buscar os dados da API:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      <h1>Destaque do Dia</h1>
      {titulo ? <p>{titulo}</p> : <p>Carregando...</p>}
    </div>
  );
}

export default CallApi;
