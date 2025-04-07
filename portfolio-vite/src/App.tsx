import NavBar from './components/NavBar.tsx';
import Home from './sections/Home.tsx';
import About from './sections/About.tsx';
import SWE from './sections/SWE.tsx';
import Music from './sections/Music.tsx';
import LivingThings from './sections/LivingThings.tsx';
import Contact from './sections/Contact.tsx';

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
