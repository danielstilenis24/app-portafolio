import Typical from "react-typical";
import "./intro.scss";
import { RiMessengerLine,RiGithubFill } from "react-icons/ri";
import { BsGithub, BsLinkedin } from "react-icons/bs";


export default function Intro() {
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='assets/man.png' alt='' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hola!, yo soy</h2>
          <h1>Daniel Lenis</h1>
          <h3>
            Desarrollador{" "}
            <span>
              <Typical
                loop={Infinity}
                wrapper='b'
                steps={[2000, "Junior", 2000, "Estudiante", 2000]}
              />
            </span>
          </h3>
          <div className="Icons">
          <BsGithub/><span>Danielstilenis</span>
          <BsLinkedin/>
          
          </div>
        </div>
        <a href='#portafolio'>
          <img src='assets/down.png' alt='' />
        </a>
      </div>
    </div>
  );
}
