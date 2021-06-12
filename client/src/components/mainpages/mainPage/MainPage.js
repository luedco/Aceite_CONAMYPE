import React, { useContext, useEffect } from 'react'
import { GlobalState } from '../../../GlobalState'
import { Link } from 'react-router-dom'
import axios from 'axios'
import img1 from './img1.jpg'
import img2 from './img2.gif';
import img3 from './img3.jpg';
import ml10 from './10ml.jpg';
import ml20 from './20ml.jpg';
import ml30 from './30ml.jpg';
import './mainPage.css';
import './social.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

function MainPage() {
    return (
        <div className="qSomos-page">
            <h2>

            </h2>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <br></br>
            <p>
                <div class="separator"><h2>COCONUT LINE</h2></div>
            </p>
            <br></br>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={ml10} />
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
                <Card>
                    <Card.Img variant="top" src={ml20} />
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
                <Card>
                    <Card.Img variant="top" src={ml30} />
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
            </CardDeck>
            <br></br>
            <br></br>

            <div className="container">
                <ul class="social-icons" id="l2">
                    <li><a href="" class="social-icon"> <i class="fa fa-facebook"></i></a></li>
                    <li><a href="" class="social-icon"> <i class="fa fa-twitter"></i></a></li>
                    <li><a href="" class="social-icon"> <i class="fa fa-rss"></i></a></li>
                    <li><a href="" class="social-icon"> <i class="fa fa-youtube"></i></a></li>
                    <li><a href="" class="social-icon"> <i class="fa fa-google-plus"></i></a></li>
                </ul>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <footer className="container">
                <p className="float-right"><a href="#">Subir</a></p>
                <p>&copy; {(new Date().getFullYear())} Scent House, Inc. &middot; <a href="#">Política de Privacidad</a> &middot; <a href="#">Términos</a></p>
            </footer>





        </div>
    )
}

export default MainPage