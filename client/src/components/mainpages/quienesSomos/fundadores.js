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
    'https://res.cloudinary.com/dwwgiwtgh/image/upload/v1624248410/fundadores/Mario_qbh4ru.jpg',
    'https://res.cloudinary.com/dlh-98daniel/image/upload/v1626584946/UCA-CDMYPE/a02947f4-9f1f-4a72-9a4c-d67367f8a125_wrwnf9.jpg',
    'https://res.cloudinary.com/dlh-98daniel/image/upload/v1626585151/UCA-CDMYPE/WhatsApp_Image_2021-07-17_at_11.00.14_PM_qtbrlg.jpg'
];

function fundadores() {
    return (
        <div className="containerFundadores" id="fundadoresId">
            <div class="separator"><h2>FUNDADORES</h2></div>
            <br></br>
            <CardDeck className="rowE">
                <Row className="colE">
                    <Col>
                        <Row className="rowE">
                            <Card className="cardF">
                                <Card.Img variant="top" src={imgs[0]} style={{ width: '15em', height: '20em', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', marginTop: 'auto' }} />
                            </Card>
                            <Card className="cardFeGreen" style={{ textAlign: 'justify' }}>
                                <Card.Body>
                                    <Card.Title style={{ color: 'white', fontFamily: 'Alfa Slab One, cursive' }}>Ing. Grace Flores</Card.Title>
                                    <Card.Text>
                                        Me gust?? mucho que pude aplicar los conocimientos sobre mi carrera y adquirir nuevos sobre otros rubros. Adem??s, conoc?? muy buena gente.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                        </Row>
                    </Col>
                    <Col>
                        <Row className="rowE">
                            <Card className="cardF">
                                <Card.Img variant="top" src={imgs[1]} style={{ width: '15em', height: '20em', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', marginTop: 'auto' }} />
                            </Card>
                            <Card className="cardFeYellow" style={{ textAlign: 'justify' }}>
                                <Card.Body>
                                    <Card.Title style={{ color: 'white', fontFamily: 'Alfa Slab One, cursive' }}>Ing. Sugeidi P??rez</Card.Title>
                                    <Card.Text>
                                        La parte que m??s me ha gustado del emprendimiento es que he podido poner a prueba mis habilidades y lo aprendido hasta el d??a de hoy, aprendiendo siempre tambi??n de los dem??s y del trabajo en equipo.
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
                        <Row className="rowE">
                            <Card className="cardF">
                                <Card.Img variant="top" src={imgs[8]} style={{ width: '15em', height: '20em', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', marginTop: 'auto' }} />
                            </Card>
                            <Card className="cardFeYellow" style={{ textAlign: 'justify' }}>
                                <Card.Body>
                                    <Card.Title style={{ color: 'white', fontFamily: 'Alfa Slab One, cursive' }}>Ing. Mario Martinez</Card.Title>
                                    <Card.Text>
                                        Me result?? un proyecto interesante ya que me permiti?? aplicar las diferentes herramientas que gracias al estudio de mi carrera he ido aprendiendo.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                        </Row>
                    </Col>
                    <Col>
                        <Row className="rowE">
                            <Card className="cardF">
                                <Card.Img variant="top" src={imgs[3]} style={{ width: '15em', height: '20em', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', marginTop: 'auto' }} />
                            </Card>
                            <Card className="cardFeGreen" style={{ textAlign: 'justify' }}>
                                <Card.Body>
                                    <Card.Title style={{ color: 'white', fontFamily: 'Alfa Slab One, cursive' }}>Ing. Gabriela Cierra</Card.Title>
                                    <Card.Text>
                                        Lo que m??s me ha gustado es poder poner en pr??ctica todo lo aprendido durante la carrera y saber que esto que estamos haciendo al final les pueda servir a  otras personas.
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
                        <Row className="rowE">
                            <Card className="cardF">
                                <Card.Img variant="top" src={imgs[2]} style={{ width: '15em', height: '18em', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', marginTop: 'auto' }} />
                            </Card>
                            <Card className="cardFeGreen" style={{ textAlign: 'justify' }}>
                                <Card.Body>
                                    <Card.Title style={{ color: 'white', fontFamily: 'Alfa Slab One, cursive' }}>Ing. Clery Giron</Card.Title>
                                    <Card.Text>
                                        El emprendimiento me ha gustado porque me ayuda a superarme a trav??s de mis conocimientos y todo lo que puedo aportar para sacarlo adelante y se que entre todos hemos llegado a visualizar hasta d??nde podemos llegar si trabajamos juntos.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                        </Row>
                    </Col>
                    <Col>
                        <Row className="rowE">
                            <Card className="cardF">
                                <Card.Img variant="top" src={imgs[5]} style={{ width: '16em', height: '18em', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', marginTop: 'auto' }} />
                            </Card>
                            <Card className="cardFeYellow" style={{ textAlign: 'justify' }}>
                                <Card.Body>
                                    <Card.Title style={{ color: 'white', fontFamily: 'Alfa Slab One, cursive' }}>Ing. Daniel Hern??ndez</Card.Title>
                                    <Card.Text>
                                        La parte que m??s me ha gustado del emprendimiento es que he podido poner a prueba mis habilidades y lo aprendido hasta el d??a de hoy, aprendiendo siempre tambi??n de los dem??s y del trabajo en equipo.
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
                        <Row className="rowE">
                            <Card className="cardF">
                                <Card.Img variant="top" src={imgs[4]} style={{ width: '15em', height: '20em', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', marginTop: 'auto' }} />
                            </Card>
                            <Card className="cardFeGreen" style={{ textAlign: 'justify' }}>
                                <Card.Body>
                                    <Card.Title style={{ color: 'white', fontFamily: 'Alfa Slab One, cursive' }}>Ing. Luis Cortez</Card.Title>
                                    <Card.Text>
                                        Me gust?? mucho que pude aplicar los conocimientos sobre mi carrera y adquirir nuevos sobre otros rubros. Adem??s, conoc?? muy buena gente.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                        </Row>
                    </Col>
                    <Col>
                        <Row className="rowE">
                            <Card className="cardF">
                                <Card.Img variant="top" src={imgs[7]} style={{ width: '15em', height: '20em', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', marginTop: 'auto' }} />
                            </Card>
                            <Card className="cardFeGreen" style={{ textAlign: 'justify' }}>
                                <Card.Body>
                                    <Card.Title style={{ color: 'white', fontFamily: 'Alfa Slab One, cursive' }}>Lic. Ivannia Urquilla</Card.Title>
                                    <Card.Text>
                                        En el desarrollo del emprendimiento me ha gustado llevar a la pr??ctica todos los conocimientos adquiridos a lo largo de la carrera, y el adquirir conocimientos de otras ??reas como lo son la ingenier??a. Siempre soy del pensamiento que nunca dejamos de aprender.
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
                <Row className="colE">
                    <Col>
                        <Row className="rowE">
                            <Card className="cardF">
                                <Card.Img variant="top" src={imgs[9]} style={{ width: '15em', height: '20em', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', marginTop: 'auto' }} />
                            </Card>
                            <Card className="cardFeYellow" style={{ textAlign: 'justify' }}>
                                <Card.Body>
                                    <Card.Title style={{ color: 'white', fontFamily: 'Alfa Slab One, cursive' }}>Lic. Marielos Najarro</Card.Title>
                                    <Card.Text>
                                        El proyecto result?? ser una puerta de aprendizaje y de retroalimentaci??n, de los aspectos que ya conozco de mi carrera. Asimismo, me gusto compartir mis conocimientos con otras ??reas que se complementan, con el fin de concretar y crear un emprendimiento exitoso.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                        </Row>
                    </Col>
                    <Col>
                        <Row className="rowE">
                            <Card className="cardF">
                                <Card.Img variant="top" src={imgs[10]} style={{ width: '15em', height: '15em', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', marginTop: 'auto' }} />
                            </Card>
                            <Card className="cardFeGreen" style={{ textAlign: 'justify' }}>
                                <Card.Body>
                                    <Card.Title style={{ color: 'white', fontFamily: 'Alfa Slab One, cursive' }}>Lic. Jennifer Carballo</Card.Title>
                                    <Card.Text>
                                        Me gusto el conocer mas de cada detalle que una peque??a empresa necesita para funcionar. Ver como cada carrera/profesion, es importante para contruir el funcionamiento a detalle de una MYPE. Y que todo esto, este reflejado en una guia, que le ser?? de ayuda para un emprendimiento.
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
            </CardDeck>
            <Footer></Footer>
        </div>
    )
}

export default fundadores