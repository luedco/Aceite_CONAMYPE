import React, { useContext, useEffect } from 'react'
import { GlobalState } from '../../../GlobalState'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import img1 from './Logo.jpg'

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
                    <div class="col-sm-4"><img src={img1} width="200px" height="200px"></img></div>
                </div>
            </div>

        </div>
    )
}

export default QuienesSomos