import React, { useContext, useEffect } from 'react'
import { GlobalState } from '../../../GlobalState'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import './quienessomos.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Footer from '../footer/Footer'
import Carousel from 'react-bootstrap/Carousel';

let imgs = [
    'https://res.cloudinary.com/dlh-98daniel/image/upload/v1626589927/UCA-CDMYPE/WhatsApp_Image_2021-07-18_at_12.28.37_AM_xg8fhh.jpg',
    'https://res.cloudinary.com/dlh-98daniel/image/upload/v1626586673/UCA-CDMYPE/Carrusel1_xsivwl.jpg',
    'https://res.cloudinary.com/dlh-98daniel/image/upload/v1626586676/UCA-CDMYPE/Carrusel2_ktldwq.jpg',
    'https://res.cloudinary.com/dlh-98daniel/image/upload/v1626586688/UCA-CDMYPE/Carrusel_3_e5iwff.gif',
    'https://res.cloudinary.com/dlh-98daniel/image/upload/v1626589942/UCA-CDMYPE/366d5745-e741-4d35-ada9-d5ab5d1fcaea_m00r7n.jpg'
];


function SaludBeneficios() {
    return (
        <div className="qSomos-page">
            <br></br>
            <p>
                <div class="separator"><h2>SALUD Y BENEFICIOS</h2></div>
            </p>
            <Card>
                <div class="container-lg" id="descripcionId">
                    <div class="row">
                        <div class="col-sm-4 align-self-center justify-content-md-center">
                            <CardDeck>
                                <Card>
                                    <Card.Img variant="top" src={imgs[4]} style={{ maxWidth:'20em', maxHeight:'40em'}}/>
                                </Card>

                            </CardDeck>
                        </div>
                        <div class="col-sm-8 align-self-center">
                            <Card style={{ justifyContent: 'center', padding: '2em' }}>
                                <Card.Body>
                                    <Card.Text style={{ textAlign: 'justify' }}>
                                        Cada vez cobra mayor popularidad la utilizaci??n de aceites esenciales y la pr??ctica de la aromaterapia para cuidar la salud humana. Es por ello que debemos hablar sobre qu?? son los aceites esenciales.
                                    </Card.Text>
                                    <Card.Text style={{ textAlign: 'justify' }}>
                                        Los aceites esenciales son principalmente l??quidos aceitosos extra??dos normalmente de tejidos de plantas. Este l??quido contiene compuestos vol??tiles que otorgan el aroma caracter??stico del tejido del que fueron extra??dos. Es decir, pueden obtenerse aceites esenciales de las hojas del or??gano, canela, rosas, lavanda, y en este caso en espec??fico de coco.
                                    </Card.Text>
                                    <Card.Text style={{ textAlign: 'justify' }}>
                                        Anteriormente se mencionaba, que los aceites esenciales ayudan a la salud y la sanaci??n hol??stica por lo que puede ser seguro para mejorar el bienestar y compartir un estilo de vida m??s saludable.
                                    </Card.Text>
                                    <Card.Text style={{ textAlign: 'justify' }}>
                                        <b>??C??mo ayudan los aceites esenciales para su salud?</b>
                                    </Card.Text>
                                    <Card.Text style={{ textAlign: 'justify' }}>
                                        Se ha averiguado que varios aceites esenciales tienen distintos grados de actividad antimicrobiana y se cree que tienen propiedades antivirales, nematicidas, antif??ngicas, insecticidas y antioxidantes.
                                    </Card.Text>
                                    <Card.Text style={{ textAlign: 'justify' }}>
                                        Una de las recomendaciones que brinda ???Scent House??? son las aplicaciones de la aromaterapia, que incluyen los masajes, las aplicaciones t??picas y la inhalaci??n. Adem??s, los aceites esenciales se pueden utilizar dentro de las rutinas del cuidado del rostro, el cuidado del cuero cabelludo y el cabello, por sus propiedades antibacterianas, antif??ngicas, antioxidantes, anticancer??genas, antivirales, relajantes, anest??sicas y antiinflamatorias, entre otras.
                                    </Card.Text>
                                    <Card.Text style={{ textAlign: 'justify' }}>
                                        Los aceites esenciales tambi??n se pueden mezclar con sales de ba??o y lociones o se pueden aplicar en gasas, asimismo, se recomienda que al utilizar los aceites esenciales directamente sobre la piel, deben ser diluidos esto se recomienda como una prueba antial??rgica, antes de colocar cierta cantidad de producto.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </Card>
            <br></br>
            <div className="qSomosPt2">
                <CardDeck>
                    <Carousel style={{ whiteSpace: 'pre-wrap', textAlign: 'center', fontFamily: '"Book Antiqua", Palatino, "Palatino Linotype", "Palatino LT STD", Georgia, serif' }}>
                        <Carousel.Item interval={1000}>
                            <Card.Img variant="top" src={imgs[1]} />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <Card.Img variant="top" src={imgs[2]} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card.Img variant="top" src={imgs[3]} />
                        </Carousel.Item>
                    </Carousel>
                </CardDeck>
            </div>
            <br></br>
            <Card>
                <div class="container-lg">
                    <div class="row">
                        <div class="col-sm-8 align-self-center">
                            <div class="containerucalogtext">
                                <Card style={{  padding: '2em' }}>
                                    <Card.Body>
                                        <Card.Text style={{ textAlign: 'justify' }}>
                                            Los aceites esenciales suelen utilizarse como complemento de los tratamientos tradicionales, gracias a sus notables propiedades antiinflamatorias, anti infecciosas (antibacterianas y antivirales) y fungicidas. Algunos casos en los que se emplean son:
                                        </Card.Text>
                                        <Card.Text style={{ textAlign: 'justify' }}>
                                            <ol class="list-unstyled">
                                                <li>??? <b>Infecciones dermatol??gicas:</b> tales como los eczemas, la psoriasis, acn?? o en procesos de cicatrizaci??n.</li>
                                                <li>??? <b>Desequilibrios del sistema inmunitario:</b> infecciones y enfermedades relacionadas, principalmente, con las v??as respiratorias.</li>
                                                <li>??? <b>Alteraciones en el sistema nervioso: </b> como la depresi??n, ansiedad, desequilibrios emocionales o taquicardias.</li>
                                            </ol>
                                        </Card.Text>
                                        <Card.Text style={{ textAlign: 'justify' }}>
                                            Algunos de los beneficios que ???Scent House???, ha observado por el uso de los aceites esenciales, son los siguientes:
                                        </Card.Text>
                                        <Card.Text style={{ textAlign: 'justify' }}>
                                            <ol class="list-unstyled">
                                                <li>??? El alivio del dolor, gracias a sus efectos analg??sicos.</li>
                                                <li>??? Act??a como antihistam??nico y potenciador de las defensas.</li>
                                                <li>??? Ayuda a la reducci??n del estr??s, por medio de masajes o aromaterapias.</li>
                                                <li>??? Ayuda a contrarrestar la depresi??n, la ansiedad y el insomnio.</li>
                                                <li>??? Ayuda a evitar el envejecimiento de las c??lulas, debido a las propiedades antioxidantes de las plantas.</li>
                                            </ol>
                                        </Card.Text>
                                        <Card.Text style={{ textAlign: 'justify' }}>
                                            Los aceites esenciales pueden ser un gran complemento en su rutina de salud y belleza, como hemos comentado anteriormente, las propiedades y usos que puedan presentar los aceites esenciales de coco son variados, por lo que es recomendable siempre comentar su uso al m??dico de cabecera, para as?? tomar las debidas precauciones, seg??n sea su condici??n.
                                        </Card.Text>
                                        <Card.Text style={{ textAlign: 'center' }}>
                                            <b><i>???Nada hace a una mujer m??s hermosa que su propia convicci??n de que es hermosa???</i></b>
                                        </Card.Text>
                                        <Card.Text style={{ textAlign: 'center' }}>
                                            Sophia Loren.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div class="col-sm-4 align-self-center">
                            <CardDeck>
                                <Card>
                                    <Card.Img variant="top" src={imgs[0]} style={{ maxWidth:'20em', maxHeight:'40em'}}/>
                                </Card>

                            </CardDeck>
                        </div>
                    </div>
                </div>
            </Card>
            <Footer></Footer>
        </div>
    )
}

export default SaludBeneficios