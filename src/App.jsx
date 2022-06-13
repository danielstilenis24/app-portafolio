import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./app.scss";

import BarraSuperior from "./components/barraSuperior/BarraSuperior";
import Intro from "./components/intro/Intro";
import Info from "./components/info/Info";
import Portafolio from "./components/portafolio/Portafolio";
import Skills from "./components/skills/Skills";
import Certificados from "./components/certificados/Certificados";
import Contact from "./components/contacto/Contacto";
import Menu from "./components/menu/Menu";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='app'>
      <BarraSuperior menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className='sections'>
        <Intro />
        <Info />
        <Portafolio />
        <Skills />
        <Certificados />
        <Contact />
      </div>
    </div>
  );
};

export default App;
