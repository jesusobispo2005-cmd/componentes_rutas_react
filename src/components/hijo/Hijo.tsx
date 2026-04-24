import { useState } from "react";
import Form from "../forms/Form";
import Hermano from "../hermano/Hermano";


function Hijo() {
  const [numero, setNumero] = useState<number>(0);
  const titulo = "Jesus";
  return (
    <div>
      <h1>Titulo</h1>
      <Form nombre={titulo} />
      <button>Enviar</button>
      <h1>contador: {numero}</h1>
      <Hermano numeros={numero} titulo={titulo} setNumero={setNumero} />
    </div>
  );
}

export default Hijo;