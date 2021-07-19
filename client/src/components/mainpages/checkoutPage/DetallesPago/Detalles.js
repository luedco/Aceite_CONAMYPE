import React, { useContext, useState, useEffect } from 'react'
import './Detalle.css'


function Detalles() {
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
                    <label for="city_id" class="control-label">Municipio</label>
                    <input type="text" class="form-control" id="city_id" name="city" placeholder="San Salvador" />
                </div>

                <div class="form-group">
                    <label for="state_id" class="control-label">Departamento</label>
                    <select class="form-control" id="state_id">
                        <option value="AL">Ahuachpán</option>
                        <option value="AK">Cabañas</option>
                        <option value="AZ">Chalatenango</option>
                        <option value="AR">Cuscatlán</option>
                        <option value="CA">La Libertad</option>
                        <option value="CO">La Paz</option>
                        <option value="CT">La Unión</option>
                        <option value="DE">Morazán</option>
                        <option value="DC">San Miguel</option>
                        <option value="FL">San Salvador</option>
                        <option value="GA">San Vicente</option>
                        <option value="HI">Santa Ana</option>
                        <option value="ID">Sonsonate</option>
                        <option value="ID">Usulután</option>
                    </select>
                </div>

            </form>
        </div>
    )
}

export default Detalles