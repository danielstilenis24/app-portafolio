import { Container } from "react-bootstrap";
import "./skills.scss";

const Skills = () => {
  return (
    <div className='skills' id='skills'>
      <header>
        <h1 className='h1'>SKILLS</h1>
      </header>
      <Container>
        <div className='d-flex justify-content-center d-flex flex-wrap'>
          <div>
            <img className='w-20 mx-auto' src='assets/html.png' alt='' />
            <p className='my-4 text-center'>HTML</p>
          </div>
          <div>
            <img
              className='w-20 mx-auto'
              src='assets/css.png'
              alt='HTML icon'
            />
            <p className='my-4 text-center'>CSS</p>
          </div>
          <div>
            <img
              className='w-20 mx-auto'
              src='assets/javascript.png'
              alt='HTML icon'
            />
            <p className='my-4 text-center'>JAVASCRIPT</p>
          </div>
          <div>
            <img
              className='w-20 mx-auto'
              src='assets/react.png'
              alt='HTML icon'
            />
            <p className='my-4 text-center'>REACT</p>
          </div>
          <div>
            <img
              className='w-20 mx-auto'
              src='assets/github.png'
              alt='HTML icon'
            />
            <p className='my-4 text-center'>GITHUB</p>
          </div>
          <div>
            <img
              className='w-20 mx-auto'
              src='assets/node.png'
              alt='HTML icon'
            />
            <p className='my-4 text-center'>NODE JS</p>
          </div>
          <div>
            <img
              className='w-20 mx-auto'
              src='assets/mongo.png'
              alt='HTML icon'
            />
            <p className='my-4 text-center'>MONGO DB</p>
          </div>
          <div>
            <img
              className='w-20 mx-auto'
              src='assets/git.png'
              alt='HTML icon'
            />
            <p className='my-4 text-center'>GIT</p>
          </div>
          <div>
            <img
              className='w-20 mx-auto'
              src='assets/angular.png'
              alt='HTML icon'
            />
            <p className='my-4 text-center'>ANGULAR</p>
          </div>
          <div>
            <img
              className='w-20 mx-auto'
              src='assets/sql.png'
              alt='HTML icon'
            />
            <p className='my-4 text-center'>SQL</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
