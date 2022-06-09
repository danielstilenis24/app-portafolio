import "./info.scss";

export default function Info() {
  return (
    <div className='info' id='info'>
      <section class='py-5 text-center container'>
        <div class='row py-lg-5'>
          <div class='col-lg-9 col-lg-6 mx-auto'>
            <header>
              <h1 class='fw-light'>SOBRE MI</h1>
            </header>
            <p class='lead text-black mb-4 info__text'>
              <em>
                Soy desarrollador, la codificación es mi pasión y mi enfoque de
                mi carrera profesional. El desarrollo de aplicaciones para la
                web se ha convertido en mi impulso y motivación. Actualmente soy
                estudiante de la Universidad de Manizales de decimo semestre del
                programa Ingenieria de sistemas y telecomunicaciones.
                Actualmente me encuentro laborando para una empresa llamada
                Isoptimo la cual me impulsa a aprender mas del desarrollo web,
                tanto en el frontend como en el backend. Me describo como una
                persona honesta, responsable, respetuosa, organizada,
                emprendedora, colaboradora, con liderazgo y habilidades para
                trabajar en equipo, creativa y proactiva con la disposición para
                aplicar los conocimientos adquiridos, así mismo fortalecerlos y
                hacer de ellos una gran utilidad para la empresa.
              </em>
            </p>
            <p>
              <a
                href='assets/CV.pdf'
                class='btn btn-outline-dark'
                target='_blank'>
                Descargar CV
              </a>
            </p>
          </div>
          <ul className="social-icons margin-bottom-20">
								<a className="btn btn-social-min btn-white-bordered btn-rounded-full btn-lg" href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a>
								<a className="btn btn-social-min btn-white-bordered btn-rounded-full btn-lg" href="https://twitter.com" target="_blank"><i className="fa fa-twitter"></i></a>
								<a className="btn btn-social-min btn-white-bordered btn-rounded-full btn-lg" href="https://www.instagram.com" target="_blank"><i className="fa fa-instagram"></i></a>
								<a className="btn btn-social-min btn-white-bordered btn-rounded-full btn-lg" href="https://github.com/danielstilenis24" target="_blank"><i className="fa fa-github"></i></a>
								<a className="btn btn-social-min btn-white-bordered btn-rounded-full btn-lg" href="https://www.linkedin.com/in/daniel-steven-lenis-salgado-bb021922b/" target="_blank"><i className="fa fa-linkedin"></i></a>
							</ul>
        </div>
      </section>
    </div>
  );
}
