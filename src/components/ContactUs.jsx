import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import '../assets/css/ContactUs.css';
const ContactUs = () => {
    return (
        <div className='contact-section'>


            <Container className='contact-form pt-5 pb-5'>
                <Row>
                    <Col className='pb-5'><h2 className='section-title'>Contact Us</h2></Col>
                </Row>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom03">

                            <Form.Control type="text" placeholder="City" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom04">
                            <Form.Control type="text" placeholder="State" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid state.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12">
                            <Form.Control as="textarea" placeholder="Message" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a Message.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Button type="submit">Submit form</Button>
                </Form>
            </Container>


{ /*
            <Container>
                <Row>
                    <Col>
                    <h2 className='section-title'>Contact Us</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </Col>
                    <Col>

                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="First name"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom02">
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Last name"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationCustom03">

                                    <Form.Control type="text" placeholder="City" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid city.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom04">
                                    <Form.Control type="text" placeholder="State" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid state.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="12">
                                    <Form.Control as="textarea" placeholder="Message" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a Message.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Button type="submit">Submit form</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            */}
        </div>
    )
}

export default ContactUs
