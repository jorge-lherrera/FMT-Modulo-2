import { useState, useEffect } from "react";
import styles from "./Formulario.module.css";

const Formulario = () => {
  const [formValues, setFormValues] = useState({
    nome: "",
    email: "",
    idade: "",
  });

  const [formCompleted, setFormCompleted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleClear = () => {
    setFormValues({
      nome: "",
      email: "",
      idade: "",
    });
  };

  useEffect(() => {
    const allFieldsFilled = Object.values(formValues).reduce((count, value) => {
      return value !== "" ? count + 1 : count;
    }, 0);

    if (allFieldsFilled === 3) {
      setFormCompleted(true);
    } else {
      setFormCompleted(false);
    }
  }, [formValues]);

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.inputs}>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formValues.nome}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputs}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputs}>
          <label>Idade:</label>
          <input
            type="number"
            name="idade"
            value={formValues.idade}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={handleClear}>
          Limpar
        </button>
      </form>
      {formCompleted && <p>Formulário totalmente preenchido!</p>}
    </div>
  );
};

export default Formulario;
