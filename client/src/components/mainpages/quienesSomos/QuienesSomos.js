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
import Footer from '../footer/Footer'




function QuienesSomos() {
    return (
        <div className="qSomos-page">
            <br></br>
            <p>
                <div class="separator"><h2>EMPRENDIMIENTO</h2></div>
            </p>
            <Card>
                <div class="container-lg" id="descripcionId">
                    <div class="row">
                        <div class="col-sm-8 align-self-center">
                            <Card style={{ justifyContent: 'center', backgroundColor:'#EEBD67', padding:'2em' }}>
                                <Card.Body>
                                    <Card.Text style={{textAlign:'justify'}}>
                                        <b>“Scent House”</b> es una empresa especializada en la elaboración de aceites esenciales,
                                        especialmente de la fruta del coco. Se mantiene la idea de un concepto innovador y con diseño,
                                        volviendo al negocio con una  presencia de adaptabilidad a las necesidades del consumidor,
                                        para ello se presenta un producto natural.
                                    </Card.Text>
                                    <Card.Text style={{textAlign:'justify' }}>
                                        El concepto de esta empresa es diseñar, crear y producir aceites provenientes del coco tras pasar por
                                        cierto proceso que busca ser amigable con el medio ambiente, sin perder de vista el régimen natural del producto.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col-sm-4 align-self-center justify-content-md-center">
                            <CardDeck>
                                <Card>
                                    <Card.Img className="cardsImg" variant="top" src={img1} />
                                </Card>

                            </CardDeck>
                        </div>
                    </div>
                </div>
            </Card>
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
            <Card>
                <div class="container-lg">
                    <div class="row">
                        <div class="col-sm-4 align-self-center">
                            <CardDeck>
                                <Card>
                                    <Card.Img className="cardsImg" variant="top" src={ucaLogo} />
                                </Card>

                            </CardDeck>
                        </div>
                        <div class="col-sm-8 align-self-center">
                            <div class="containerucalogtext">
                                <Card style={{ justifyContent: 'center', backgroundColor:'#D98A8B', padding:'2em' }}>
                                    <Card.Body>
                                        <Card.Text style={{textAlign:'justify'}}>
                                            La idea de este negocio nace de un grupo de emprendedores jóvenes,
                                            de la Universidad Centroamericana José Simeón Cañas - UCA,
                                            dichos emprendedores son de diferentes facultades que ponen
                                            a su servicio su conocimiento para poder desarrollar el producto estrella,
                                            que es el aceite escencial de coco, en diferentes presentaciones.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>

                    </div>
                </div>
            </Card>
            <Footer></Footer>
        </div>
    )
}

export default QuienesSomos