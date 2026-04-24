import React from 'react';

interface HermanoProps{
    numeros: number;
    titulo: string;
    setNumero: React.Dispatch<React.SetStateAction<number>>;
}

function Hermano({ numeros, titulo, setNumero }: HermanoProps) {
  return (
    <>
    <h3>hola {titulo}</h3>

     <button onClick={() => setNumero(numeros + 1)}>Contador +1</button>
    </>
  );
}

export default Hermano;