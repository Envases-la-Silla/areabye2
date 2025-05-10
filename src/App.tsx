import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';

function App() {

    return (
    <>
      <h1 style={{ color:'white', position: 'fixed', top: '0', left: '0', width: '100%', textAlign: 'left', zIndex: 100 }}>
      Envases la Silla, S. A. de C.V.
      </h1>
      <div >
	   <label htmlFor="label1" style={{color:'white', fontweight:'bold'}}>Usuario:</label>
	   <br />
           <input type="password" id="user_id" name="user_id" />
	   <br />
	   <br />
	   <button
              style={{
              backgroundColor: 'green',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1.5em',
	      fontweight:'bold',
                    }}  >  Entrar
           </button>
      </div>
   </>
  )
}

export default App
