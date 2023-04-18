import { useState } from 'react'
import React from 'react'
import './App.css'

import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'

import characters from './data'

function App() {
  
  function getRandomPassword() {
    let password = []
    for (let i=0; i<10; i++) {
        password.push(characters[getRandomNumber()])
    }

    return password.join('')
}

function getRandomNumber() {
    let randomNumber = ''
    return randomNumber = Math.floor(Math.random() * characters.length) 
}


  
  return (
    <div className="App">
     <Header />
     <Hero 
      password={getRandomPassword()}
     />
     <Footer />
    </div>
  )
}

export default App
