import BarraSuperior from "./components/barraSuperior/BarraSuperior";
import Intro from "./components/intro/Intro"
import Portafolio from "./components/portafolio/Portafolio"
import Trabajos from "./components/trabajos/Trabajos"
import Certificados from "./components/certificados/Certificados"
import Contact from "./components/contacto/Contacto"
import "./app.scss"
import { useState } from "react";

function App() {
  const [menuOpen,setMenuOpen]= useState(false)
  return (
    <div className="app">
    <BarraSuperior menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">
      
      <Intro/>
      <Portafolio/>
      <Trabajos/>
      <Certificados/>
      <Contact/>

    </div>
    </div>
  );
}

export default App;
