import React from 'react';
import { Footer, Blog, Feature, Header, Possibility, WhatGPT3 } from './containers';
import { Brand, CTA, Navbar } from './componentes';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
