import React, { useContext, useState, useEffect } from 'react'
import './Detalle.css'


function Detalles() {
    const [costoEnvio, setcostoEnvio]= useState("")
    function aplicarEnvio(val){
        setcostoEnvio(val.target.value)
    }
    return (
        
        <div className="detalleContainer">
           
            <form className="detalleForm">

                <div class="form-group"> 
                    <label for="full_name_id" class="control-label">Nombre de persona que recibirá</label>
                    <input type="text" class="form-control" id="full_name_id" name="full_name" placeholder="Juan Hernández" />
                </div>

                <div class="form-group"> 
                    <label for="zip_id" class="control-label">Número de Teléfono</label>
                    <input type="text" class="form-control" id="zip_id" name="zip" placeholder="2222-2222" />
                </div>
                <div class="form-group">
                    <label for="street1_id" class="control-label">Dirección</label>
                    <input type="text" class="form-control" id="street1_id" name="street1" placeholder="Colonia, Pasaje, Calle, # de Casa, etc" />
                </div>
                <div class="form-group">
                    <label for="state_id" class="control-label">Departamento</label>
                    <select class="form-control" id="municipio_id" onChange={aplicarEnvio}>
                        <option value="3.50">Ahuachpán</option>
                        <option value="4.25">Cabañas</option>
                        <option value="4.25">Chalatenango</option>
                        <option value="4.25">Cuscatlán</option>
                        <option value="4.25">La Libertad</option>
                        <option value="4.25">La Paz</option>
                        <option value="2.75">La Unión</option>
                        <option value="2.75">Morazán</option>
                        <option value="2.75">San Miguel</option>
                        <option value="2">San Salvador</option>
                        <option value="4.25">San Vicente</option>
                        <option value="3.50">Santa Ana</option>
                        <option value="3.50">Sonsonate</option>
                        <option value="2.75">Usulután</option>
                    </select>
                </div>
                <div class="form-group"> 
                    <label for="city_id" class="control-label">Municipio</label>
                    <input type="text" class="form-control" id="city_id" name="city" placeholder="San Salvador" />
                </div>
            </form>
        </div>
    )
}

export default Detalles