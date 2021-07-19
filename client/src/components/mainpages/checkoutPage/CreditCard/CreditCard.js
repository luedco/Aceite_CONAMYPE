import React, { useContext, useState, useEffect } from 'react'
import './creditCard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

function CreditCard() {
    return (

        <div className="creditCardContainer">
            <form action="#" class="credit-card-div">
                <div class="panel panel-default" >
                    <div class="panel-heading">

                        <div class="row ">
                            <div class="col-md-12">
                                <span class="help-block text-muted small-font" > Número de tarjeta</span>
                                <input type="text" class="form-control" placeholder="Ingresa el número de tu tarjeta" />
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col-md-3 col-sm-3 col-xs-3">
                                <span class="help-block text-muted small-font" > Mes de expiración</span>
                                <input type="text" class="form-control" placeholder="MM" />
                            </div>
                            <div class="col-md-3 col-sm-3 col-xs-3">
                                <span class="help-block text-muted small-font" > Año de expiración</span>
                                <input type="text" class="form-control" placeholder="YY" />
                            </div>
                            <div class="col-md-3 col-sm-3 col-xs-3">
                                <span class="help-block text-muted small-font" > CCV</span>
                                <input type="text" class="form-control" placeholder="CCV" />
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col-md-12 pad-adjust">

                                <input type="text" class="form-control" placeholder="Nombre en la tarjeta" />
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col-md-6 col-sm-6 col-xs-6 pad-adjust">
                                <a href="/cart" class="btn btn-danger">Cancelar</a>
                            </div>
                            <div class="col-md-6 col-sm-6 col-xs-6 pad-adjust">
                                <input type="submit" class="btn btn-warning btn-block" value="PAGAR AHORA" />
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreditCard