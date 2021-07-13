import React, { useContext, useEffect } from 'react'
import './quienessomos.css';

let imgsMyV = [
    'https://res.cloudinary.com/dwwgiwtgh/image/upload/v1624249204/quienesSomos/Emprendimiento___logo__1_-removebg-preview_gxaz6f.png',
    'https://res.cloudinary.com/dwwgiwtgh/image/upload/v1624249203/quienesSomos/1_bzyanm.png'
];
function MisonVision(){
    return(
        <div>
             <div class="separator"><h2>Mision y Vision</h2></div>
        <div className="containerMisionVision">
        <div class="colT">
        <h5 class="colT">Mision</h5>
        Ser una empresa dedicada a la elaboración y distribución de aceites esenciales de coco, 
        con el fin de satisfacer las necesidades y expectativas de nuestros clientes, contribuyendo 
        a la salud y bienestar de las personas. Se desea ofrecer un producto de calidad para todo tipo 
        de gustos y necesidades, trabajando con responsabilidad y dedicación, caracterizandonos por ser un negocio con esencia a coco.
        </div>
        <div class="colI">
            <img src={imgsMyV[0]} className="colImg"></img>
        </div>
        <div class="colI">
            <img src={imgsMyV[1]} className="colImg"></img>
        </div>
        <div class="colT">
        <h5 class="colT">Vision</h5>
        Consolidarnos como una empresa de mayor sostenibilidad dentro del mercado de aceites esenciales, 
        permitiéndonos desarrollar una eficiente red de operaciones que permitan a la empresa expandirse 
        a nivel nacional e incluso internacionalmente, con un excelente equipo de trabajo, que está 
        comprometido a brindar la mejor calidad y servicio para la satisfacción de nuestros clientes.
        </div>
    </div>
    </div>
    )
}

export default MisonVision