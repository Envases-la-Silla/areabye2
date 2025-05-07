import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

// my random comment

function App() {
     
       return (

<div>
  <h1 style={{ color: 'white', fontWeight: 'bold' }}>

  Bienvenido a Envases La Silla, S.A. de C.V.
  lakjsshflkjhdslfkjhalksjflkjhlkjhlakjsdflkj
  ljahddsflakjhalkjsfhlkajshdflkjhsdlkjhladsfjhl
  lajsdhljhlkjadsflkjhljlasdfljhalskjdlasdjfhlja

  </h1> 


      <label htmlFor="mi-campo" style={{ color: 'white', fontWeight: 'bold' }} >Favor de teclear su Usuario:</label>
      <br />

      <input style={{
        color: 'black',        // Color del texto (front)
        backgroundColor: 'white', // Color de fondo (back)
        padding: '10px 20px',
        fontSize: '1.2em', padding: '8px',
        border: 'none',
        borderRadius: '10px',
      }}
      type="text"  id="user-id" name="user-id" />
      <br />
      <br />

      <button style={{
        color: 'white',        // Color del texto (front)
        backgroundColor: 'green', // Color de fondo (back)
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }} type="submit">Entrar</button>
</div>

   )
}

export default App
