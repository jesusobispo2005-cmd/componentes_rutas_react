import { useState } from 'react'
import Form from './components/forms/Form';
import Hermano from "./components/hermano/hermano"

function App() {
  const [numero, setNumero] = useState<number>(0)
  const titulo = "Jesus"

  return (
    <>
    <h1>Titulo</h1>
    <Form nombre = {titulo} />
     <button>Enviar</button>
     <h1>contador: {numero}</h1>
     <Hermano numeros={numero} titulo={titulo} setNumero={setNumero}/>
    </>
  )
}

export default App
