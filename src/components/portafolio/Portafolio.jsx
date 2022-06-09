import "./portafolio.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Portafolio() {
  return (
    <div className='portafolio' id='portafolio'>
      <header>
      <h1>PORTAFOLIO</h1>
      </header>
      <section className='container'>
        <div className='portafolio__container'>
          <article className='portafolio__item'>
            <div className='portafolio__item-image'>
              <img src='assets/portafolio.jpg' alt='' />
            </div>
            <h3>Proyecto 1</h3>
            <div className='portafolio__item-cta'>
              <a
                href='https://github.com/danielstilenis24/app-portafolio'
                className='btn btn-light'
                target='_blank'>
                GitHub
              </a>
            </div>
          </article>
          <article className='portafolio__item'>
            <div className='portafolio__item-image'>
              <img src='assets/portafolio2.jpg' alt='' />
            </div>
            <h3>Proyecto 2</h3>
            <div className='portafolio__item-cta'>
              <a
                href='https://github.com/danielstilenis24/app-portafolio'
                className='btn btn-light'
                target='_blank'>
                GitHub
              </a>
            </div>
          </article>
          <article className='portafolio__item'>
            <div className='portafolio__item-image'>
              <img src='assets/portafolio3.png' alt='' />
            </div>
            <h3>Proyecto 3</h3>
            <div className='portafolio__item-cta'>
              <a
                href='https://github.com/danielstilenis24/app-portafolio'
                className='btn btn-light'
                target='_blank'>
                GitHub
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
