import React, { useContext, useEffect } from 'react'
import './quienessomos.css';
import Footer from '../footer/Footer'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

let imgsMyV = [
    'https://res.cloudinary.com/dwwgiwtgh/image/upload/v1624249204/quienesSomos/Emprendimiento___logo__1_-removebg-preview_gxaz6f.png',
    'https://res.cloudinary.com/dwwgiwtgh/image/upload/v1624249203/quienesSomos/1_bzyanm.png'
];
function MisonVision() {
    return (
        <div>
            <br></br>
            <div class="separator"><h2>MISIÓN Y VISIÓN</h2></div>
            <div className="containerMisionVision">
                <div class="colTMision">
                    <h3 class="colT" style={{color:'white', fontFamily: 'Alfa Slab One, cursive'}}>MISIÓN</h3>
                    <Card className="colTMision">
                        <Card.Body>
                            <Card.Text style={{wordSpacing:'0.5em', lineHeight:'2em', textAlign:'justify', padding:'2em'}}>
                                Ser una empresa dedicada a la elaboración y distribución de aceites esenciales de coco,
                                con el fin de satisfacer las necesidades y expectativas de nuestros clientes, contribuyendo
                                a la salud y bienestar de las personas. Se desea ofrecer un producto de calidad para todo tipo
                                de gustos y necesidades, trabajando con responsabilidad y dedicación, caracterizandonos por ser un negocio con esencia a coco.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>
                <div class="colI">
                    <img src={imgsMyV[0]} className="colImg"></img>
                </div>
                <div class="colI">
                    <img src={imgsMyV[1]} className="colImg"></img>
                </div>
                <div class="colTVision">
                    <h3 class="colT" style={{color:'white', fontFamily: 'Alfa Slab One, cursive'}}>VISIÓN</h3>
                    <Card className="colTVision">
                        <Card.Body>
                            <Card.Text className="colTVision" style={{wordSpacing:'0.5em', lineHeight:'2em', textAlign:'justify', padding:'2em'}}>
                                Consolidarnos como una empresa de mayor sostenibilidad dentro del mercado de aceites esenciales,
                                permitiéndonos desarrollar una eficiente red de operaciones que permitan a la empresa expandirse
                                a nivel nacional e incluso internacionalmente, con un excelente equipo de trabajo, que está
                                comprometido a brindar la mejor calidad y servicio para la satisfacción de nuestros clientes.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default MisonVision