import React, { useContext, useEffect } from 'react'
import { GlobalState } from '../../../GlobalState'
import { Link } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from '../footer/Footer'


function Contacto() {
    return (
        <div className="qSomos-page">
            <br></br>
            <Container fluid="md">
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Row className="justify-content-md-center">
                    <Col xs={3} md = "4">
                        <Container>
                            <h3>
                                <Badge bg="secondary">Llámanos</Badge>
                            </h3></Container>
                        <Container>
                            <h5>
                                <Badge bg="secondary">Oficinas Centrales Sonsonate: 2240-0046</Badge>
                            </h5></Container>
                        <Container>
                            <h5>
                                <Badge bg="secondary">Oficinas Secundarias: 2240-0047</Badge>
                            </h5></Container>

                    </Col>
                    <Col xs={3} md = "4">
                        <Container><h3>
                            <Badge bg="secondary">Horario:</Badge>
                        </h3></Container>
                        <Container><h5>
                            <Badge bg="secondary">Horarios de lunes a viernes:</Badge>
                        </h5></Container>
                        <Container><h5>
                            <Badge bg="secondary">8:00 a.m - 5:00 p.m</Badge>
                        </h5></Container>
                        <Container><h5>
                            <Badge bg="secondary">Horarios de sabado:</Badge>
                        </h5></Container>
                        <Container><h5>
                            <Badge bg="secondary">8:00 a.m - 12:00 p.m</Badge>
                        </h5></Container>
                    </Col>
                    <Col xs={3} md = "4">
                        <Container><Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><Badge bg="secondary">Nombre:</Badge></Form.Label>
                                <Form.Control type="text" placeholder="Ingresa tu nombre" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><Badge bg="secondary">Email:</Badge></Form.Label>
                                <Form.Control type="email" placeholder="nombre@ejemplo.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label><Badge bg="secondary">Comentario:</Badge></Form.Label>
                                <Form.Control as="textarea" rows={2} />
                                <br></br>
                                <Button variant="primary" type="submit">
                                    Enviar
                                </Button>
                            </Form.Group>
                        </Form></Container>
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <Col xs={6}>
                        <Container>
                            <h3>
                                <Badge bg="secondary">Ubicación Oficinas Centrales Sonsonate:</Badge>
                            </h3></Container>
                        <Container>
                            <h5>
                                <Badge bg="secondary"> Departamento de Sonsonate, colonia El Balsamar, pasaje 2</Badge>
                            </h5></Container>
                    </Col>
                    <Col xs={6}>
                        <Container><h3>
                            <Badge bg="secondary">Ubicación Oficinas Secundarias:</Badge>
                        </h3></Container>
                        <Container><h5>
                            <Badge bg="secondary">Colonia Roma 67 Av. Sur 13-B, San Salvador, El Salvador</Badge>
                        </h5></Container>
                    </Col>
                </Row>

                {/* Columns are always 50% wide, on mobile and desktop */}
                <Row className="justify-content-md">
                    <Col xs={6}>
                        <Container><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9494.657707429744!2d-89.71509361178546!3d13.716381546707085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62b7edf2822a2f%3A0x23e8211df1c6a9a5!2sPasaje%202%2C%20Sonsonate!5e0!3m2!1ses!2ssv!4v1626402655943!5m2!1ses!2ssv" width="100%" height="225px" allowfullscreen="" loading="lazy"></iframe></Container>
                    </Col>
                    <Col xs={6}>
                        <Container><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.2954369632007!2d-89.22672078534634!3d13.700548190380651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6330413ca1b54b%3A0x25fe4f3a30547156!2s67%20Avenida%20Sur%2013%2C%20San%20Salvador!5e0!3m2!1ses!2ssv!4v1626415805189!5m2!1ses!2ssv" width="100%" height="225px" allowfullscreen="" loading="lazy"></iframe></Container>
                    </Col>
                </Row>
            </Container>
            <br></br><br></br>
            <Footer></Footer>
        </div>
    )
}

export default Contacto