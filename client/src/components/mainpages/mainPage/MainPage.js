import React, { useContext, useEffect } from 'react'
import { GlobalState } from '../../../GlobalState'
import { Link } from 'react-router-dom'
import axios from 'axios'
import img2 from './img2.gif';
import './mainPage.css'

function MainPage() {
    return (
        <div className="qSomos-page">
            <h2>
                PRUEBA DE MainPage
            </h2>
            <p>
                <img src={img2} alt="gg" />
                <div class="separator">Next section</div>
            </p>
        </div>
    )
}

export default MainPage