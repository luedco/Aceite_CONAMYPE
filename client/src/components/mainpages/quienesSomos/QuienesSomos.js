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
    'https://res.cloudinary.com/dwwgiwtgh/image/upload/v1624248410/fundadores/Gabriela_itslea.jpg',
    'https://res.cloudinary.com/dwwgiwtgh/image/upload/v1624311484/fundadores/IMG_20200104_093611_czmjfd.jpg',
    'https://res.cloudinary.com/dwwgiwtgh/image/upload/v1624311481/fundadores/WhatsApp_Image_2021-06-21_at_3.30.56_PM_k8eyo8.jpg',
    'https://res.cloudinary.com/dwwgiwtgh/image/upload/v1624248410/fundadores/Marielos_Najarro_kqljkq.jpg',
    'https://res.cloudinary.com/dwwgiwtgh/image/upload/v1624248410/fundadores/Ivannia_a6oor6.jpg',
    'https://res.cloudinary.com/dwwgiwtgh/image/upload/v1624248410/fundadores/Mario_qbh4ru.jpg'
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

            <div class="container-lg" id="descripcionId">
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
            <div className="containerFundadores" id="fundadoresId">
                <div class="separator"><h2>Fundadores</h2></div>
                <CardDeck>
                    <Row>
                        <Col>
                            <Row>
                                <Card>
                                    <Card.Img variant="top" src={imgs[0]} className="cardImg" />
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Ing. Grace Flores</Card.Title>
                                        <Card.Text>
                                            Me gustó mucho que pude aplicar los conocimientos sobre mi carrera y adquirir nuevos sobre otros rubros. Además, conocí muy buena gente.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Card>
                                    <Card.Img variant="top" src={imgs[1]} className="cardImg" />
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Ing. Sugeidi Pérez</Card.Title>
                                        <Card.Text>
                                            La parte que más me ha gustado del emprendimiento es que he podido poner a prueba mis habilidades y lo aprendido hasta el día de hoy, aprendiendo siempre también de los demás y del trabajo en equipo.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Row>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <Card>
                                    <Card.Img variant="top" src={imgs[2]} className="cardImg" />
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Ing. Clery Giron</Card.Title>
                                        <Card.Text>
                                            El emprendimiento me ha gustado porque me ayuda a superarme a través de mis conocimientos y todo lo que puedo aportar para sacarlo adelante y se que entre todos nos hemos llegado a visualizar hasta dónde podemos llegar si trabajamos juntos.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Card>
                                    <Card.Img variant="top" src={imgs[3]} className="cardImg" />
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Ing. Gabriela Cierra</Card.Title>
                                        <Card.Text>
                                            Lo que más me ha gustado es poder poner en práctica todo lo aprendido durante la carrera y saber que esto que estamos haciendo al final les pueda servir a  otras personas.                                         </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Row>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <Card>
                                    <Card.Img variant="top" src={imgs[4]} className="cardImg" />
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Ing. Luis Cortez</Card.Title>
                                        <Card.Text>
                                            Me gustó mucho que pude aplicar los conocimientos sobre mi carrera y adquirir nuevos sobre otros rubros. Además, conocí muy buena gente.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Card>
                                    <Card.Img variant="top" src={imgs[5]} className="cardImg" />
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Ing. Daniel Hernández</Card.Title>
                                        <Card.Text>
                                            La parte que más me ha gustado del emprendimiento es que he podido poner a prueba mis habilidades y lo aprendido hasta el día de hoy, aprendiendo siempre también de los demás y del trabajo en equipo.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Row>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <Card>
                                    <Card.Img variant="top" src={imgs[6]} className="cardImg" />
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Lic. Marielos Najarro</Card.Title>
                                        <Card.Text>
                                            El proyecto resultó ser una puerta de aprendizaje y de retroalimentación, de los aspectos que ya conozco de mi carrera. Asimismo, me gusto compartir mis conocimientos con otras áreas que se complementan, con el fin de concretar y crear un emprendimiento exitoso.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Card>
                                    <Card.Img variant="top" src={imgs[7]} className="cardImg" />
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Lic. Ivannia Urquilla</Card.Title>
                                        <Card.Text>
                                            En el desarrollo del emprendimiento me ha gustado llevar a la práctica todos los conocimientos adquiridos a lo largo de la carrera, y el adquirir conocimientos de otras áreas como lo son la ingeniería. Siempre soy del pensamiento que nunca dejamos de aprender.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Row>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <Card>
                                    <Card.Img variant="top" src={imgs[8]} className="cardImg" />
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Ing. Mario Martinez</Card.Title>
                                        <Card.Text>
                                            Me resultó un proyecto interesante ya que me permitió aplicar las diferentes herramientas que gracias al estudio de mi carrera he ido aprendiendo, y como al poder comunicarme con los diferentes compañeros, se facilitó el trabajo ya que me permiten mejorar lo aprendido y aprender cosas nuevas.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Row>
                        </Col>
                        <Col>


                        </Col>
                    </Row>
                    <br></br><br></br>

                </CardDeck>
            </div>
            <div className="containerMisionVision">
                <div class="colT">
                Un producto ideal para compartirlo con la familia o con tu pareja,
                        así juntos podrán mantener un mejor cuidado en su salud y belleza.    
                </div>
                <div class="colI">
                    <img src={imgsMyV[0]} className="colImg"></img>
                </div>
            </div>
{/*        <div className="containerMisionVison">
                <div class="colI">
                    <img src={imgsMyV[1]} className="colImg"></img>
                </div>
                <div class="colT">
                    <p className="colText">Un producto ideal para compartirlo con la familia o con tu pareja,
                        así juntos podrán mantener un mejor cuidado en su salud y belleza.</p>
                </div>
    </div> */}

        </div>
    )
}

export default QuienesSomos