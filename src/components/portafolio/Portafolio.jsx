import "./portafolio.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function Portafolio() {
  return (
    <div className='portafolio' id='portafolio'>
      <h1>Portafolio</h1>
      <Container className="container d-flex align-items-center">
      <CardGroup>
        <Card>
          <Card.Img variant='top' src='assets/git.jpg' />
          <Card.Body>
            <Card.Title>Trabajo 1</Card.Title>
            <Card.Text>Descripción</Card.Text>
            <Button variant='primary'>Ir al repositorio</Button>{" "}
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant='top' src='assets/git.jpg' />
          <Card.Body>
            <Card.Title>Trabajo 2</Card.Title>
            <Card.Text>Descripción</Card.Text>
            <Button variant='primary'>Ir al repositorio</Button>{" "}
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant='top' src='assets/git.jpg' />
          <Card.Body>
            <Card.Title>Trabajo 3</Card.Title>
            <Card.Text>Descripción</Card.Text>
            <Button variant='primary'>Ir al repositorio</Button>{" "}
          </Card.Body>
        </Card>
      </CardGroup>

      
      </Container>
    </div>
  );
}
