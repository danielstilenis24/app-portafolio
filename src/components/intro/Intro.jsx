import { useEffect, useRef } from "react";
import { init } from 'ityped'
import "./intro.scss";

export default function Intro() {
  const textRef = useRef();
  useEffect(()=>{
    init(textRef.current, { 
      showCursor: false, 
      strings: ['Desarrollador', 'Junior' ]
     });
  },[])

  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='assets/man.png' alt='' />
        </div>
      </div>
      <div className='right'>
        <div className="wrapper">
          <h2>Hola!, yo soy</h2>
          <h1>Daniel Lenis</h1>
          <h3>.<span ref={textRef}></span></h3>
        </div>
        <a href="#portafolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
