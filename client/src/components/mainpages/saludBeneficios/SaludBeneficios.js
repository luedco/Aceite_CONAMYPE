import React, { useContext, useEffect } from 'react'
import { GlobalState } from '../../../GlobalState'
import { Link } from 'react-router-dom'
import axios from 'axios'


function SaludBeneficios() {
    return (
        <div className="qSomos-page">
            <h2>
                PRUEBA DE salud y beneficios 
            </h2>
            <p>
                Somos un emprendimiento de aceites.
            </p>
        </div>
    )
}

export default SaludBeneficios