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
import Footer from '../footer/Footer'

function MainPage() {
    return (
        <div className="qSomos-page">
            <h2>

            </h2>
            <Carousel  style={{ whiteSpace: 'pre-wrap', textAlign:'center', fontFamily: '"Book Antiqua", Palatino, "Palatino Linotype", "Palatino LT STD", Georgia, serif'}}>
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
            <CardDeck style={{ whiteSpace: 'pre-wrap', textAlign:'justify', fontFamily: '"Book Antiqua", Palatino, "Palatino Linotype", "Palatino LT STD", Georgia, serif'}}>
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
                        
                    </Card.Footer>
                </Card>
            </CardDeck>
            <br></br>
            <br></br>
            <Footer></Footer>
            <br></br>





        </div>
    )
}

export default MainPage