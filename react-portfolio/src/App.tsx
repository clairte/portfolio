import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Home from './sections/Home';
import About from './sections/About';
import SWE from './sections/SWE';
import Music from './sections/Music';
import LivingThings from './sections/LivingThings';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="font-sans">
      <NavBar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="swe"><SWE /></section>
      <section id="music"><Music /></section>
      <section id="living-things"><LivingThings /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;
