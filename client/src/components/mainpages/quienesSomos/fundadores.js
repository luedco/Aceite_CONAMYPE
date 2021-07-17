import React, { useContext, useEffect } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import './quienessomos.css';
import Footer from '../footer/Footer'


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

function fundadores() {
    return (
        <div className="containerFundadores" id="fundadoresId">
            <div class="separator"><h2>Fundadores</h2></div>
            <CardDeck className="rowE">
                <Row className="colE">
                    <Col>
                        <Row className="rowE">
                            <Card className="cardF">
                                <Card.Img variant="top" src={imgs[0]} style={{ width: '15em', height: '15em', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', marginTop: 'auto' }} />
                            </Card>
                            <Card className="cardFeGreen">
                                <Card.Body>
                                    <Card.Title>Ing. Grace Flores</Card.Title>
                                    <Card.Text>
                                        Me gustó mucho que pude aplicar los conocimientos sobre mi carrera y adquirir nuevos sobre otros rubros. Además, conocí muy buena gente.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Card className="cardF">
                                <Card.Img variant="top" src={imgs[1]} style={{ width: '15em', height: '15em', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', marginTop: 'auto' }} />
                            </Card>
                            <Card className="cardFeBrown">
                                <Card.Body>
                                    <Card.Title>Ing. Sugeidi Pérez</Card.Title>
                                    <Card.Text>
                                        La parte que más me ha gustado del emprendimiento es que he podido poner a prueba mis habilidades y lo aprendido hasta el día de hoy, aprendiendo siempre también de los demás y del trabajo en equipo.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                        </Row>

                    </Col>
                </Row>
                <br></br><br></br>
                <Row className="colE">
                    <Col>
                        <Row>
                            <Card className="cardF">
                                <Card.Img variant="top" src={imgs[4]} style={{ width: '15em', height: '15em', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', marginTop: 'auto' }} />
                            </Card>
                            <Card className="cardFeBrown">
                                <Card.Body>
                                    <Card.Title>Ing. Luis Cortez</Card.Title>
                                    <Card.Text>
                                        Me gustó mucho que pude aplicar los conocimientos sobre mi carrera y adquirir nuevos sobre otros rubros. Además, conocí muy buena gente.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Card className="cardF">
                                <Card.Img variant="top" src={imgs[5]} style={{ width: '15em', height: '15em', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', marginTop: 'auto' }} />
                            </Card>
                            <Card className="cardFeGreen">
                                <Card.Body>
                                    <Card.Title>Ing. Daniel Hernández</Card.Title>
                                    <Card.Text>
                                        La parte que más me ha gustado del emprendimiento es que he podido poner a prueba mis habilidades y lo aprendido hasta el día de hoy, aprendiendo siempre también de los demás y del trabajo en equipo.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                        </Row>
                    </Col>
                </Row>
                <br></br><br></br>
                <Row className="colE">
                    <Col>
                        <Row>
                            <Card className="cardF">
                                <Card.Img variant="top" src={imgs[6]} style={{ width: '15em', height: '15em', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', marginTop: 'auto' }} />
                            </Card>
                            <Card className="cardFeGreen">
                                <Card.Body>
                                    <Card.Title>Lic. Marielos Najarro</Card.Title>
                                    <Card.Text>
                                        El proyecto resultó ser una puerta de aprendizaje y de retroalimentación, de los aspectos que ya conozco de mi carrera. Asimismo, me gusto compartir mis conocimientos con otras áreas que se complementan, con el fin de concretar y crear un emprendimiento exitoso.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Card className="cardF">
                                <Card.Img variant="top" src={imgs[7]} style={{ width: '15em', height: '15em', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', marginTop: 'auto' }} />
                            </Card>
                            <Card className="cardFeYellow">
                                <Card.Body>
                                    <Card.Title>Lic. Ivannia Urquilla</Card.Title>
                                    <Card.Text>
                                        En el desarrollo del emprendimiento me ha gustado llevar a la práctica todos los conocimientos adquiridos a lo largo de la carrera, y el adquirir conocimientos de otras áreas como lo son la ingeniería. Siempre soy del pensamiento que nunca dejamos de aprender.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                        </Row>
                        <br></br>
                    </Col>
                </Row>
                <br></br><br></br>
                <Row className="colE">
                    <Col>
                        <Row>
                            <Card className="cardF">
                                <Card.Img variant="top" src={imgs[8]} style={{ width: '15em', height: '15em', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', marginTop: 'auto' }} />
                            </Card>
                            <Card className="cardFeYellow">
                                <Card.Body>
                                    <Card.Title>Ing. Mario Martinez</Card.Title>
                                    <Card.Text>
                                        Me resultó un proyecto interesante ya que me permitió aplicar las diferentes herramientas que gracias al estudio de mi carrera he ido aprendiendo.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                        </Row>
                    </Col>
                </Row>
                <br></br><br></br>

            </CardDeck>
            <br></br><br></br>
            <Footer></Footer>
        </div>
    )
}

export default fundadores