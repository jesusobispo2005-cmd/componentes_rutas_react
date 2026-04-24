import React from 'react';
import './form.css'



function Form({nombre}: {nombre: any}) {
  return (
    <>
    <div className='formulario'>
        <h2>{nombre}</h2>
        <form action="">
            <input type="text" />
            <input type="text" />
            <input type="submit" value="submit"/>
        </form>
    </div>
    </>
  );
}

export default Form;