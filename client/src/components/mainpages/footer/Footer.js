import React, { useContext, useEffect } from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className="footerContainer">
            <div className="containerI">
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

            <footer className="container">
                <p className="float-right"><a class="subirBtn"href="#">Subir</a></p>
                <p>&copy; {(new Date().getFullYear())} Scent House, Inc. &middot; <a href="#" class="terms">Política de Privacidad</a> &middot; <a class="terms" href="#">Términos</a></p>
            </footer>
        </div>
    )
}

export default Footer