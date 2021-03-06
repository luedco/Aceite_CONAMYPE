import React, { useContext, useEffect, useState } from 'react'
import { GlobalState } from '../../../GlobalState'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Footer from '../footer/Footer';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

let imgs = [
    'https://res.cloudinary.com/dlh-98daniel/image/upload/v1626748804/UCA-CDMYPE/2_lbbjgt.jpg',
    'https://res.cloudinary.com/dlh-98daniel/image/upload/v1626748806/UCA-CDMYPE/4_orn1zo.jpg',
    'https://res.cloudinary.com/dlh-98daniel/image/upload/v1626748814/UCA-CDMYPE/6_jlact7.jpg',
    'https://res.cloudinary.com/dlh-98daniel/image/upload/v1626748818/UCA-CDMYPE/8_qqkpye.jpg',
    'https://res.cloudinary.com/dlh-98daniel/image/upload/v1626748845/UCA-CDMYPE/10_mjccwb.jpg',
    'https://res.cloudinary.com/dlh-98daniel/image/upload/v1626748847/UCA-CDMYPE/12_pqs91m.jpg',
    'https://res.cloudinary.com/dlh-98daniel/image/upload/v1626762291/UCA-CDMYPE/1_j8hqss.jpg',
    'https://res.cloudinary.com/dlh-98daniel/image/upload/v1626763491/UCA-CDMYPE/Travel_Blogger_Instagram_Post_1_m66v6h.jpg',
    'https://res.cloudinary.com/dlh-98daniel/image/upload/v1626763499/UCA-CDMYPE/5_2_gqy8ti.jpg',
    'https://res.cloudinary.com/dlh-98daniel/image/upload/v1626763569/UCA-CDMYPE/7_fjkqur.jpg',
    'https://res.cloudinary.com/dlh-98daniel/image/upload/v1626763572/UCA-CDMYPE/9_da77yz.jpg',
    'https://res.cloudinary.com/dlh-98daniel/image/upload/v1626763575/UCA-CDMYPE/11_hddxuh.jpg'
];

function Ayuda() {
    //const show2 = new Boolean(false);
    const [show0, setShow0] = useState(false);
    const handleClose0 = () => setShow0(false);
    const handleShow0 = () => setShow0(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    const [show5, setShow5] = useState(false);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);

    return (
        <div className="qSomos-page">
            <br></br>
            <div class="separator"><h2>AYUDA</h2></div>
            <br></br>
            <CardDeck style={{ whiteSpace: 'pre-wrap', textAlign: 'justify', fontFamily: '"Book Antiqua", Palatino, "Palatino Linotype", "Palatino LT STD", Georgia, serif' }}>
                <Card>
                    <Card.Img variant="top" src={imgs[0]} />
                    <Card.Body>
                        <Card.Title>TUS PEDIDOS</Card.Title>
                        <Card.Text>
                            Rastrear paquetes, editar o cancelar.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                        <Button variant="outline-dark" onClick={handleShow0}>
                            M??s Informaci??n
                        </Button>

                        <Modal show={show0} onHide={handleClose0} style={{ backgroundColor: 'transparent' }}>
                            <Card.Img variant="top" src={imgs[6]} />
                            <Modal.Body style={{ backgroundColor: 'transparent' }}>
                                <p style={{ whiteSpace: 'pre-wrap', textAlign: 'justify' }}>
                                    Tus pedidos dentro de la p??gina de ???Scent House??? se har??n de manera individual, es importante recordar que la empresa genera los pedidos hasta que se haya hecho el proceso de pago, es ac?? donde la orden ingresa a nuestras oficinas y posteriormente se realiza el proceso de empaquetado, luego se genera un canal de distribuci??n para que el ???Aceite esencial de coco??? para que llegue de manera ??ptima  a tus manos.
                                </p>
                                <p style={{ whiteSpace: 'pre-wrap', textAlign: 'justify' }}>
                                    Es importante aclarar que el pedido podr??a tardar en llegar, actualmente se tiene un estimado de 1 a 2 d??as, esto puede variar seg??n la zona en donde usted se encuentre ubicado. Asimismo, el paquete estar?? debidamente rotulado con su nombre, direcci??n y n??mero de tel??fono, adem??s se contar?? con los n??meros de contacto de la empresa por si existe un reclamo o inconveniente.
                                </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose0}>
                                    Cerrar
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={imgs[1]} />
                    <Card.Body>
                        <Card.Title>DEVOLUCIONES Y DESEMBOLSOS</Card.Title>
                        <Card.Text>
                            Devuelve o cambia el art??culo.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                        <Button variant="outline-dark" onClick={handleShow1}>
                            M??s Informaci??n
                        </Button>

                        <Modal show={show1} onHide={handleClose1}>
                            <Card.Img variant="top" src={imgs[7]} />
                            <Modal.Body>
                                <p style={{ whiteSpace: 'pre-wrap', textAlign: 'justify' }}>
                                    Es importante recalcar que si se desea reanudar una operaci??n, el tiempo de reintegro a la tarjeta de cr??dito y d??bito depender?? de cada banco emisor, de esta manera se devolver?? de manera simult??nea el dinero depositado en la cuenta de la compa????a.
                                </p>
                                <p style={{ whiteSpace: 'pre-wrap', textAlign: 'justify' }}>
                                    Para el caso del reembolso por parte de PayPal, este puede darse de manera total o parcial, al ser un abono total se considerar?? la transacci??n original y si es reembolso parcial se le abonar?? parte de la tarifa de la transacci??n original.
                                </p>
                                <p style={{ whiteSpace: 'pre-wrap', textAlign: 'justify' }}>
                                    Si se ha generado alg??n problema al momento de realizar la transacci??n por favor comunicarse directamente con la empresa y con su Banco de confianza.
                                </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose1}>
                                    Cerrar
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={imgs[2]} />
                    <Card.Body>
                        <Card.Title>SOPORTE T??CNICO</Card.Title>
                        <Card.Text>
                            Resolver problemas con tu compra.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                        <Button variant="outline-dark" onClick={handleShow2}>
                            M??s Informaci??n
                        </Button>

                        <Modal show={show2} onHide={handleClose2} style={{ backgroundColor: 'transparent' }}>
                            <Card.Img variant="top" src={imgs[8]} />
                            <Modal.Body style={{ backgroundColor: 'transparent' }}>
                                <p style={{ whiteSpace: 'pre-wrap', textAlign: 'justify' }}>
                                    Con respecto a el soporte t??cnico, la empresa ???Scent House??? cuenta con n??meros de call center, para que usted pueda comunicarse con nuestras instalaciones, a continuaci??n, se presentan los n??meros de contacto: 2240-0046 y 2240-0047. Tambi??n se cuenta con las redes sociales de la instituci??n, por si no se desea hacer las llamadas correspondientes.
                                </p>
                                <p style={{ whiteSpace: 'pre-wrap', textAlign: 'justify' }}>
                                    Dicho servicio cubre consultas, problemas con las transacciones o problemas con el uso de la p??gina web, etc. Asimismo se debe agregar que el soporte se ofrece las 24 horas del d??a.
                                </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose2}>
                                    Cerrar
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Card.Footer>
                </Card>
            </CardDeck>
            <br></br>
            <CardDeck style={{ whiteSpace: 'pre-wrap', textAlign: 'justify', fontFamily: '"Book Antiqua", Palatino, "Palatino Linotype", "Palatino LT STD", Georgia, serif' }}>
                <Card>
                    <Card.Img variant="top" src={imgs[3]} />
                    <Card.Body>
                        <Card.Title>PAGOS Y TARJETAS</Card.Title>
                        <Card.Text>
                            Agregar o editar los m??todos de pago.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                        <Button variant="outline-dark" onClick={handleShow3}>
                            M??s Informaci??n
                        </Button>

                        <Modal show={show3} onHide={handleClose3} style={{ backgroundColor: 'transparent' }}>
                            <Card.Img variant="top" src={imgs[9]} />
                            <Modal.Body style={{ backgroundColor: 'transparent' }}>
                                <p style={{ whiteSpace: 'pre-wrap', textAlign: 'justify' }}>
                                    La empresa cuenta con las siguientes formas de pago, las cuales son:
                                </p>
                                <ol class="list-unstyled">
                                    <li>??? <b>Tarjeta de cr??dito:</b> la empresa ha determinado que se acepta cualquier tipo de tarjeta de cr??dito, como lo es Visa, MasterCard, Discover, etc.</li>
                                    <li>??? <b>Tarjeta de D??bito:</b> se aceptan pagos en l??nea utilizando tarjetas de d??bito PIN, con aquellas que incluyen los logos de Visa y MasterCard.</li>
                                    <li>??? <b>PayPal:</b> es la forma m??s r??pida y segura de pagar por Internet. No necesita ingresar su tarjeta de cr??dito o datos personales. Adem??s, con este sistema se realizan transacciones con la m??xima seguridad y protecci??n, lo ??nico que se necesita es una cuenta en dicha plataforma.</li>
                                </ol>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose3}>
                                    Cerrar
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={imgs[4]} />
                    <Card.Body>
                        <Card.Title>TU CUENTA</Card.Title>
                        <Card.Text>
                            Como crear una cuenta y visualizar las preferencias.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                        <Button variant="outline-dark" onClick={handleShow4}>
                            M??s Informaci??n
                        </Button>

                        <Modal show={show4} onHide={handleClose4} style={{ backgroundColor: 'transparent' }}>
                            <Card.Img variant="top" src={imgs[10]} />
                            <Modal.Body style={{ backgroundColor: 'transparent' }}>
                                <p style={{ whiteSpace: 'pre-wrap', textAlign: 'justify' }}>
                                    Al momento de crear una cuenta dentro de nuestra plataforma de ???Scent House???, est?? se realiza para poder realizar el proceso de compra dentro de ella, pero se debe aclarar que todos los datos que se han completado son de uso exclusivo de la plataforma por lo cual existe la seguridad de que sus datos no ser??n manipulados ni ser??n transferidos a ninguna otra instituci??n.
                                </p>
                                <p style={{ whiteSpace: 'pre-wrap', textAlign: 'justify' }}>
                                    La empresa tiene como valor principal la confidencialidad hacia sus clientes y usuarios dentro de la plataforma. Pero a su vez, a nuestros clientes y usuarios, se les informa que algunos de los datos que se nos han proporcionado, ser??n utilizados para poder brindar informaci??n sobre los nuevos productos, cat??logos, promociones o cupones.
                                </p>
                                <p style={{ whiteSpace: 'pre-wrap', textAlign: 'justify' }}>
                                    Si se tiene alg??n problema con su cuenta o al generarla, por favor contactar a nuestras oficinas, para as?? poder brindarle una mejor atenci??n. A continuaci??n, se presentan los n??meros de contacto: 2240-0046 y 2240-0047.</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose4}>
                                    Cerrar
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={imgs[5]} />
                    <Card.Body>
                        <Card.Title>COMPRAS SEGURAS</Card.Title>
                        <Card.Text>
                            Descubre como realizar compras seguras y sin ning??n retraso.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                        <Button variant="outline-dark" onClick={handleShow5}>
                            M??s Informaci??n
                        </Button>

                        <Modal show={show5} onHide={handleClose5} style={{ backgroundColor: 'transparent' }}>
                            <Card.Img variant="top" src={imgs[11]} />
                            <Modal.Body style={{ backgroundColor: 'transparent' }}>
                                <p style={{ whiteSpace: 'pre-wrap', textAlign: 'justify' }}>
                                    La empresa <b>???Scent House???</b> se compromete a tener un ambiente de seguridad y confiabilidad para que nuestros clientes realicen de mejor manera el proceso de compra, por lo que cada transacci??n dentro de la plataforma mantiene ciertos protocolos de seguridad que se basan en la encriptaci??n de los datos m??s sensibles del usuario, como lo son datos de tarjetas de cr??dito/d??bito u otras transacciones realizadas en el sitio web.
                                </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose5}>
                                    Cerrar
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Card.Footer>
                </Card>
            </CardDeck>
            <br></br>
            <Footer></Footer>
        </div>
    )
}

export default Ayuda