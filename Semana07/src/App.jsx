import CallApi from "./components/CallApi";
import Contador from "./components/Contador";
import Formulario from "./components/Formulario";
import InputControlado from "./components/InputControlado";
import InputList from "./components/InputList";

function App() {
  return (
    <div>
      <Contador />
      <InputList />
      <Formulario />
      <InputControlado />
      <CallApi />
    </div>
  );
}

export default App;
