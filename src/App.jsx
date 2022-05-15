import BarraSuperior from "./components/barraSuperior/BarraSuperior";
import Intro from "./components/intro/Intro"
import Portafolio from "./components/portafolio/Portafolio"
import Trabajos from "./components/trabajos/Trabajos"
import Certificados from "./components/certificados/Certificados"
import Contact from "./components/contacto/Contacto"
import "./app.scss"

function App() {
  return (
    <div className="app">
    <BarraSuperior/>
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
