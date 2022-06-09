import Typical from "react-typical";
import "./intro.scss";

export default function Intro() {
  return (
    <section className='intro' id='intro'>
      <div className='intro__left'>
        <div className='intro__left__imgContainer'>
          <img src='assets/man.png' alt='' />
        </div>
      </div>
      <div className='intro__right'>
        <div className='intro__right__wrapper'>
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
        </div>
        <a href='#portafolio'>
          <img src='assets/down.png' alt='' />
        </a>
      </div>
      <ul className="social-icons margin-bottom-20">
								<li><a className="btn btn-social-min btn-white-bordered btn-rounded-full btn-lg" href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a></li>
								<li><a className="btn btn-social-min btn-white-bordered btn-rounded-full btn-lg" href="https://twitter.com" target="_blank"><i className="fa fa-twitter"></i></a></li>
                <li>	<a className="btn btn-social-min btn-white-bordered btn-rounded-full btn-lg" href="https://www.instagram.com" target="_blank"><i className="fa fa-instagram"></i></a></li>
                <li>	<a className="btn btn-social-min btn-white-bordered btn-rounded-full btn-lg" href="https://github.com/danielstilenis24" target="_blank"><i className="fa fa-github"></i></a></li>
                <li>	<a className="btn btn-social-min btn-white-bordered btn-rounded-full btn-lg" href="https://www.linkedin.com/in/daniel-steven-lenis-salgado-bb021922b/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
							</ul>
    </section>
  );
}
