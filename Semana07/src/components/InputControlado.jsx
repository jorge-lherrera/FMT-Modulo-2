import { Component } from "react";
import styles from "./InputControlado.module.css";

class InputControlado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: "",
    };
  }

  handleChange = (e) => {
    this.setState({ texto: e.target.value });
  };

  render() {
    return (
      <div className={styles.container}>
        <input
          type="text"
          value={this.state.texto}
          onChange={this.handleChange}
        />
        <p>{this.state.texto}</p>
      </div>
    );
  }
}

export default InputControlado;
