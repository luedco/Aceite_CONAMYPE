import React, { useContext, useState, useEffect } from 'react'
import './creditCard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

function CreditCard() {
    return (
        
        <div>
            
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title">
                                    Payment Details
                                </h3>
                                <div class="checkbox pull-right">
                                    <label>
                                        <input type="checkbox" />
                                        Remember
                                    </label>
                                </div>
                            </div>
                            <div class="panel-body">
                                <form role="form">
                                    <div class="form-group">
                                        <label for="cardNumber">
                                            CARD NUMBER</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="cardNumber" placeholder="Valid Card Number"
                                                required autofocus />
                                            <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-7">
                                            <div class="form-group">
                                                <label for="expityMonth">
                                                    EXPIRY DATE</label>
                                                <div class="col-xs-6 col-lg-6 pl-ziro">
                                                    <input type="text" class="form-control" id="expityMonth" placeholder="MM" required />
                                                </div>
                                                <div class="col-xs-6 col-lg-6 pl-ziro">
                                                    <input type="text" class="form-control" id="expityYear" placeholder="YY" required /></div>
                                            </div>
                                        </div>
                                        <div class="col-xs-5 pull-right">
                                            <div class="form-group">
                                                <label for="cvCode">
                                                    CV CODE</label>
                                                <input type="password" class="form-control" id="cvCode" placeholder="CV" required />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <br />
                        <a href="#" class="btn btn-success btn-lg btn-block" role="button">Pay</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreditCard