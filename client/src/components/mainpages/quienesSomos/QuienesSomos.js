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

function QuienesSomos() {
    return (
        <div className="qSomos-page">
            <br></br>
            <p>
                <div class="separator"><h2>Emprendimiento</h2></div>
            </p>
            <br></br>

            <div class="container-lg">
                <div class="row">
                    <div class="col-sm-8">
                        <p class="texto">
                            “Scent House” es una empresa especializada en la elaboración de aceites esenciales,
                            especialmente de la fruta del coco. Se mantiene la idea de un concepto innovador y con diseño,
                            volviendo al negocio con una  presencia de adaptabilidad a las necesidades del consumidor,
                            para ello se presenta un producto natural.
                            <p></p>
                            <p class="texto">
                                El concepto de esta empresa es diseñar, crear y producir aceites provenientes del coco tras pasar por
                                cierto proceso que busca ser amigable con el medio ambiente, sin perder de vista el régimen natural del producto.
                            </p>

                        </p></div>
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
                                <Card.Img variant="top" src={imgs[0]} />
                                <Card.Body>
                                    <Card.Title>Aceite de Coco con Presentación Compacta</Card.Title>
                                    <Card.Text>
                                        Proporciona una facilidad al momento de su uso y acompañamiento,
                                        ya que puede estar presente en tu vanity o en tus viajes mas importantes.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={imgs[1]} />
                                <Card.Body>
                                    <Card.Title>Aceite de Coco con Presentación Media</Card.Title>
                                    <Card.Text>
                                        Puede estar presente después de un día largo de trabajo,
                                        ya que puede ayudarte a relajarte y ha disminuir los flujos de estrés.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={imgs[2]} />
                                <Card.Body>
                                    <Card.Title>Aceite de Coco con Presentación Plus</Card.Title>
                                    <Card.Text>
                                        Un producto ideal para compartirlo con la familia o con tu pareja,
                                        así juntos podrán mantener un mejor cuidado en su salud y belleza.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={imgs[3]} />
                                <Card.Body>
                                    <Card.Title>Aceite de Coco con Presentación Plus</Card.Title>
                                    <Card.Text>
                                        Un producto ideal para compartirlo con la familia o con tu pareja,
                                        así juntos podrán mantener un mejor cuidado en su salud y belleza.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>


                </CardDeck>
            </div>

        </div>
    )
}

export default QuienesSomos