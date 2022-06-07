import "./portafolio.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Portafolio() {
  return (
    <div className='portafolio' id='portafolio'>
      <h1>Portafolio</h1>
      <div className='container'>
        <div className='portafolio__container'>
          <article className='portafolio__item'>
            <div className='portafolio__item-image'>
              <img src='assets/git.jpg' alt='' />
            </div>
            <h3>Titulo</h3>
            <div className='portafolio__item-cta'>
              <a
                href='https://github.com'
                className='btn btn-primary'
                target='_blank'>
                GitHub
              </a>
            </div>
          </article>
          <article className='portafolio__item'>
            <div className='portafolio__item-image'>
              <img src='assets/git2.jpg' alt='' />
            </div>
            <h3>Titulo</h3>
            <div className='portafolio__item-cta'>
              <a
                href='https://github.com'
                className='btn btn-primary'
                target='_blank'>
                GitHub
              </a>
            </div>
          </article>
          <article className='portafolio__item'>
            <div className='portafolio__item-image'>
              <img src='assets/git.jpg' alt='' />
            </div>
            <h3>Titulo</h3>
            <div className='portafolio__item-cta'>
              <a
                href='https://github.com'
                className='btn btn-primary'
                target='_blank'>
                GitHub
              </a>
            </div>
          </article>
         
        </div>
      </div>
    </div>
  );
}
