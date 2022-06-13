import { Carousel, Container } from "react-bootstrap";
import "./skills.scss";

const Skills = () => {
  return (
    <div className='skills' id='skills'>
      <header>
        <h1 className='h1'>SKILLS</h1>
      </header>

      
        <div class='row'>
          <div class='col'>
            <Carousel>
              <Carousel.Item>
                <img
                  className='d-block w-100 img-fluid container__carrucel__img'
                  src='https://cdn.uarizonabootcamp.com/wp-content/uploads/sites/56/2020/05/front-end-developer-skills.jpg'
                  alt='First slide'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100 img-fluid container__carrucel__img'
                  src='https://media.bitdegree.org/storage/media/images/2018/10/front-end-vs-back-end-developer-back-end-toolbox.png'
                  alt='Second slide'
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div class='col'>
            <Container>
              <div className='d-flex justify-content-center d-flex flex-wrap'>
                <div>
                  <img className='w-20 mx-auto img__icons' src='assets/html.png' alt='' />
                  <p className='my-4 text-center'>HTML</p>
                </div>
                <div>
                  <img
                    className='w-20 mx-auto img__icons'
                    src='assets/css.png'
                    alt='HTML icon'
                  />
                  <p className='my-4 text-center'>CSS</p>
                </div>
                <div>
                  <img
                    className='w-20 mx-auto img__icons'
                    src='assets/javascript.png'
                    alt='HTML icon'
                  />
                  <p className='my-4 text-center'>JAVASCRIPT</p>
                </div>
                <div>
                  <img
                    className='w-20 mx-auto img__icons'
                    src='assets/react.png'
                    alt='HTML icon'
                  />
                  <p className='my-4 text-center'>REACT</p>
                </div>
                <div>
                  <img
                    className='w-20 mx-auto img__icons'
                    src='assets/github.png'
                    alt='HTML icon'
                  />
                  <p className='my-4 text-center'>GITHUB</p>
                </div>
                <div>
                  <img
                    className='w-20 mx-auto img__icons'
                    src='assets/node.png'
                    alt='HTML icon'
                  />
                  <p className='my-4 text-center'>NODE JS</p>
                </div>
                <div>
                  <img
                    className='w-20 mx-auto img__icons'
                    src='assets/mongo.png'
                    alt='HTML icon'
                  />
                  <p className='my-4 text-center'>MONGO DB</p>
                </div>
                <div>
                  <img
                    className='w-20 mx-auto img__icons'
                    src='assets/git.png'
                    alt='HTML icon'
                  />
                  <p className='my-4 text-center'>GIT</p>
                </div>
                <div>
                  <img
                    className='w-20 mx-auto img__icons'
                    src='assets/angular.png'
                    alt='HTML icon'
                  />
                  <p className='my-4 text-center'>ANGULAR</p>
                </div>
                <div>
                  <img
                    className='w-20 mx-auto img__icons'
                    src='assets/sql.png'
                    alt='HTML icon'
                  />
                  <p className='my-4 text-center'>SQL</p>
                </div>
              </div>
            </Container>
          </div>
        </div>
    </div>
  );
};

export default Skills;
