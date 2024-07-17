import { useState } from "react";
import styles from "./InputList.module.css";

const InputList = () => {
  const [inputValue, setInputValue] = useState("");

  const [list, setList] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue.trim() !== "") {
      setList([...list, inputValue]);
      setInputValue("");
    }
  };

  const handleClearButtonClick = () => {
    setList([]);
  };

  return (
    <div className={styles.container}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Adicionar</button>
      <button onClick={handleClearButtonClick}>Limpar</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default InputList;
