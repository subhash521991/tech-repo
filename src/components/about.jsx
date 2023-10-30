import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import image from '../assets/images/2.png';
import aboutimage1 from '../assets/images/IMG1.jpg';
import aboutimage2 from '../assets/images/IMG2.jpg';
import aboutimage3 from '../assets/images/IMG3.jpg';
const About = () => {
  return (
    <div>
<Container className='pt-5 pb-5'>
      <Row>
        <Col className='pb-5'><h2>About Us</h2></Col>
      </Row>
      <Row>
        <Col xs={6} md={4}>
        <Card>
      <Card.Img variant="top" src={aboutimage1} />
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
      <Card.Img variant="top" src={aboutimage2} />
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
      <Card.Img variant="top" src={aboutimage3} />
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