import React from 'react'
import './NotFound.css'
import Footer from '../../footer/Footer'
function NotFound() {
    let img = ['https://res.cloudinary.com/dwwgiwtgh/image/upload/v1626410106/ScentHouse/Logo_Proyecto_uhn6pf.jpg']
    return (
        <div>
            <div>
                <div className="container">
                    <h2 className="err">¡Error!</h2>
                    <h3 className="errtxt">Parece que te has perdido, no hay nada aquí, regresa a inicio.</h3>
                    <img src={img[0]} className="imgE"></img>
                    <br></br>
                    <div className="btn-container">
                        <a href="/mainPage" class="btn btn-success btn-lg btnPago" role="button">Inicio</a>
                    </div>
                </div>
            </div>
            <br></br>
            <Footer></Footer>
        </div>
    )
}

export default NotFound
