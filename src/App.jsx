import { useState } from 'react'
import React from 'react'
import './App.css'

import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'

import characters from './data'

function App() {
  
  
  return (
    <div className="App">
     <Header />
     <Hero 
      characters={characters}
     />
     <Footer />
    </div>
  )
}

export default App
