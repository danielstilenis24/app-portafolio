import BarraSuperior from "./components/barraSuperior/BarraSuperior";
import Intro from "./components/intro/Intro"
import Portafolio from "./components/portafolio/Portafolio"
import Skills from "./components/skills/Skills"
import Certificados from "./components/certificados/Certificados"
import Contact from "./components/contacto/Contacto"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";


function App() {
  const [menuOpen,setMenuOpen]= useState(false)
  return (
    <div className="app">
    <BarraSuperior menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">
      
      <Intro/>
      <Portafolio/>
      <Skills/>
      <Certificados/>
      <Contact/>

    </div>
    </div>
  );
}

export default App;
