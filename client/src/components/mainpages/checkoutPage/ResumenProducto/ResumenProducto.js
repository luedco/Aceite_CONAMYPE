import React, { useContext, useState, useEffect } from 'react'
import { GlobalState } from '../../../../GlobalState'
import axios from 'axios'
import './ResumenProducto'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

function ResumenProducto() {

    const state = useContext(GlobalState)
    const [total] = useState(0)


    return (
        <div className="detalleContainer">

            <form className="detalleForm">

                <div class="form-group">
                    <label for="full_name_id" class="control-label">Ingresa el código promocional </label>
                    <input type="text" class="form-control" id="full_name_id" name="full_name" placeholder="703D2" />
                </div>

                <div className="detallesInfo">
                    <h5>Subtotal: $ {total.toFixed(2)}</h5>
                    <br></br>
                    <h5>Cargos por envío: $ 2.5</h5>
                    <br></br>
                    <h5>Total a Pagar: $ {(total + 2.50).toFixed(2)}</h5>
                    
                </div>

            </form>
        </div >
    )
}

export default ResumenProducto