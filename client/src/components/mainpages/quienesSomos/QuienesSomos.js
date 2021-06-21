import React, { useContext, useEffect } from 'react'
import { GlobalState } from '../../../GlobalState'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import './quienessomos.css';
import img1 from './Logo.jpg'
import qSomos1 from './imagenes/qsSomos1.jpg';
import qSomos2 from './imagenes/qsSomos2.jpg';
import qSomos3 from './imagenes/qsSomos3.jpeg';
import ucaLogo from './imagenes/ucaLogo.jpg';

let imgs = [
    'https://res.cloudinary.com/dwwgiwtgh/image/upload/v1624248410/fundadores/Grace_bzbga5.jpg',
    'https://res.cloudinary.com/dwwgiwtgh/image/upload/v1624248410/fundadores/Sugeidi_kj7av6.jpg',
    'https://res.cloudinary.com/dwwgiwtgh/image/upload/v1624248410/fundadores/Clery_i46sgc.jpg',
    'https://res.cloudinary.com/dwwgiwtgh/image/upload/v1624248410/fundadores/Gabriela_itslea.jpg'
];
let imgsMyV = [
    'https://res.cloudinary.com/dwwgiwtgh/image/upload/v1624249204/quienesSomos/Emprendimiento___logo__1_-removebg-preview_gxaz6f.png',
    'https://res.cloudinary.com/dwwgiwtgh/image/upload/v1624249203/quienesSomos/1_bzyanm.png'
];

function QuienesSomos() {
    return (
        <div className="qSomos-page">
            <br></br>
            <p>
                <div class="separator"><h2>Emprendimiento</h2></div>
            </p>

            <div class="container-lg">
                <div class="row">
                    <div class="col-sm-8">
                        <h5 class="texto">
                            “Scent House” es una empresa especializada en la elaboración de aceites esenciales,
                            especialmente de la fruta del coco. Se mantiene la idea de un concepto innovador y con diseño,
                            volviendo al negocio con una  presencia de adaptabilidad a las necesidades del consumidor,
                            para ello se presenta un producto natural.
                            <p></p>
                            <h5 class="texto">
                                El concepto de esta empresa es diseñar, crear y producir aceites provenientes del coco tras pasar por
                                cierto proceso que busca ser amigable con el medio ambiente, sin perder de vista el régimen natural del producto.
                            </h5>

                        </h5></div>
                    <div class="col-sm-4"><img src={img1} className="scentLogo"></img></div>
                </div>
            </div>
            <br></br>
            <div className="qSomosPt2">
                <CardDeck>
                    <Card>
                        <Card.Img className="cardsImg" variant="top" src={qSomos1} />
                    </Card>
                    <Card>
                        <Card.Img className="cardsImg" variant="top" src={qSomos2} />
                    </Card>
                    <Card>
                        <Card.Img className="cardsImg" variant="top" src={qSomos3} />
                    </Card>
                </CardDeck>
            </div>
            <br></br>
            <div class="container-lg">
                <div class="row">
                    <div class="col-sm-4">
                        <img src={ucaLogo} className="ucaLogo"></img>
                    </div>
                    <div class="col-sm-8">
                        <div class="containerucalogtext">
                            <h5 className="ucalogtext">
                                La idea de este negocio nace de un grupo de emprendedores jóvenes,
                                de la Universidad Centroamericana José Simeón Cañas - UCA,
                                dichos emprendedores son de diferentes facultades que ponen
                                a su servicio su conocimiento para poder desarrollar el producto estrella,
                                que es el aceite escencial de cooc, en diferentes presentaciones.
                            </h5>
                        </div>
                    </div>

                </div>
            </div>
            <div className="containerFundadores">
                <div class="separator"><h2>Fundadores</h2></div>
                <CardDeck>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={imgs[0]} style={{ height: 450, width: 300, margin: 'auto', display: 'block' }} />
                                <Card.Body>
                                    <Card.Title>Ing. Grace Flores</Card.Title>
                                    <Card.Text>
                                        Me gustó mucho que pude aplicar los conocimientos sobre mi carrera y adquirir nuevos sobre otros rubros. Además, conocí muy buena gente.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={imgs[1]} style={{ height: 450, width: 275, margin: 'auto', display: 'block' }} />
                                <Card.Body>
                                    <Card.Title>Ing. Sugeidi Pérez</Card.Title>
                                    <Card.Text>
                                        La parte que más me ha gustado del emprendimiento es que he podido poner a prueba mis habilidades y lo aprendido hasta el día de hoy, aprendiendo siempre también de los demás y del trabajo en equipo.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <br></br><br></br>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={imgs[2]} style={{ height: 450, width: 400, margin: 'auto', display: 'block' }} />
                                <Card.Body>
                                    <Card.Title>Ing. Clery Girón</Card.Title>
                                    <Card.Text>
                                        El emprendimiento me ha gustado porque me ayuda a superarme a través de mis conocimientos y todo lo que puedo aportar para sacarlo adelante y se que entre todos nos hemos llegado a visualizar hasta dónde podemos llegar si trabajamos juntos.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={imgs[3]} style={{ height: 450, width: 300, margin: 'auto', display: 'block' }} />
                                <Card.Body>
                                    <Card.Title>Ing. Gabriela Cierra</Card.Title>
                                    <Card.Text>
                                        Lo que más me ha gustado es poder poner en práctica todo lo aprendido durante la carrera y saber que esto que estamos haciendo al final les pueda servir a  otras personas.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>


                </CardDeck>
            </div>
            <div className="containerMisionVision">
                <div class="separator"><h2>Mision y Vision</h2></div>
                <CardDeck>
                    <Row>
                        <Card className="cardMision">
                            <Card.Body>
                                <Card.Title>Mision</Card.Title>
                                <Card.Text>
                                    Un producto ideal para compartirlo con la familia o con tu pareja,
                                    así juntos podrán mantener un mejor cuidado en su salud y belleza.
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="top" src={imgsMyV[0]} />
                        </Card>
                    </Row>
                    <Row>
                        <Card className="cardVision">
                            <Card.Img variant="top" src={imgsMyV[1]} />
                            <Card.Body>
                                <Card.Title>Vision</Card.Title>
                                <Card.Text>
                                    Un producto ideal para compartirlo con la familia o con tu pareja,
                                    así juntos podrán mantener un mejor cuidado en su salud y belleza.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </CardDeck>

            </div>

        </div>
    )
}

export default QuienesSomos