import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from '../assets/images/2.png';
const About = () => {
  return (
    <div>
<Container>
      <Row>
        <Col><h2>About Us</h2></Col>
      </Row>
      <Row>
        <Col xs={6} md={4}>
        <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Our Mission</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col xs={6} md={4}>
        <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Our Vision</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col xs={6} md={4}>
        <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Our Aim</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>

     
    </Container>


    </div>
  )
}

export default About;