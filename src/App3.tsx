import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//
import {react} from 'react'
import './App.css'


function App() {
   
       return (
<>

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
        type="password", // Establece el tipo a "password"
	id="password",
        name="password",
	value={password},
	onChange={handleChange},
        color: 'black',        // Color del texto (front)
        backgroundColor: 'white', // Color de fondo (back)
        padding: '10px 20px',
        fontSize: '1.2em', padding: '8px',
	fontWeight: 'bold',
        border: 'none',
        borderRadius: '10px',
      }}
        />
      <br />
      <br />

      <button style={{
        color: 'white',        // Color del texto (front)
        backgroundColor: 'green', // Color de fondo (back)
        padding: '10px 20px',
	fontWeight: 'bold',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }} type="submit">Entrar</button>
</div>
</>

   )
}

export default App
