import React, { useContext, useState, useEffect } from 'react'
import { GlobalState } from '../../../GlobalState'
import axios from 'axios'
import CreditCard from './CreditCard/CreditCard'
import PaypalButton from '../cart/PaypalButton'
import ResumenProducto from './ResumenProducto/ResumenProducto'
import Detalles from './DetallesPago/Detalles'
import Footer from '../footer/Footer'

function CheckoutPage() {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [token] = state.token
    const [total, setTotal] = useState(0)
    const [cupon,setCupon,getCupon] =  useState(1)
    const [estadoCupon, setEstadoCupon]= useState(false)
    let cuponAplicado = false;
    var valorCupon="";
    const [costoEnvio, setcostoEnvio]= useState("3.50")

    function aplicarEnvio(val){
        setcostoEnvio(val.target.value)
    }

    useEffect(() => {
        const getTotal = () => {
            const total = cart.reduce((prev, item) => {
                var precioCaja = (12*item.price)/1.10;
                var precioMayoreoCalc = ((Math.trunc(item.quantity/12))*precioCaja) + ((item.quantity%12)*item.price);
                return prev + (precioMayoreoCalc)
            }, 0)

            setTotal(total)
        }

        getTotal()

    }, [cart])

    const increment = (id) => {
        cart.forEach(item => {
            if (item._id === id) {
                item.quantity += 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const decrement = (id) => {
        cart.forEach(item => {
            if (item._id === id) {
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const removeProduct = id => {
        if (window.confirm("Do you want to delete this product?")) {
            cart.forEach((item, index) => {
                if (item._id === id) {
                    cart.splice(index, 1)
                }
            })

            setCart([...cart])
            addToCart(cart)
        }
    }

    const addToCart = async (cart) => {
        await axios.patch('/user/addcart', { cart }, {
            headers: { Authorization: token }
        })
    }

    function aplicarDescuento(){
        if(cupon == "112021SH" && estadoCupon==false){
            setTotal(total/1.10)
            setEstadoCupon(true)
        }else{
            alert("Cupon Inválido o Cupón Ya utilizado")
        }
    }

    function aplicarDesc(val){
        setCupon(val.target.value)
        valorCupon = val.target.value.toString();
    }

    return (
        <div>
            <div class="separator"><h4>DETALLES DE LA ENTREGA</h4></div>
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
                       <option value="3.50">Ahuachpán (+ $3.50)</option>
                       <option value="4.25">Cabañas (+ $4.25)</option>
                       <option value="4.25">Chalatenango (+ $4.25)</option>
                       <option value="4.25">Cuscatlán (+ $4.25)</option>
                       <option value="4.25">La Libertad (+ $4.25)</option>
                       <option value="4.25">La Paz (+ $4.25)</option>
                       <option value="2.75">La Unión (+ $2.75)</option>
                       <option value="2.75">Morazán (+ $2.75)</option>
                       <option value="2.75">San Miguel (+ $2.75)</option>
                       <option value="2">San Salvador (+ $2.00)</option>
                       <option value="4.25">San Vicente (+ $4.25)</option>
                       <option value="3.50">Santa Ana (+ $3.50)</option>
                       <option value="3.50">Sonsonate (+ $3.50)</option>
                       <option value="2.75">Usulután (+ $2.75)</option>
                   </select>
               </div>
               <div class="form-group"> 
                   <label for="city_id" class="control-label">Municipio</label>
                   <input type="text" class="form-control" id="city_id" name="city" placeholder="San Salvador" />
               </div>
           </form>
       </div>
            <div class="separator"><h4>DETALLES DEL PRODUCTO</h4></div>
            <div className="detalleContainer">

                <form className="detalleForm">

                    <div class="form-group containerCodigo">
                        <label for="full_name_id" class="control-label">Ingresa el código promocional </label>
                        <input type="text" class="form-control" name="full_name" placeholder="703D2" onChange={aplicarDesc}/>
                        <div class="aplicarDiscount">
                                <a class="btn btn-warning" onClick={aplicarDescuento}>Aplicar</a>
                        </div>
                    </div>

                    <div className="detallesInfoContainer">
                        <div className="detallesInfo">
                            <h5>Subtotal: $ {total.toFixed(2)}</h5>
                            <br></br>
                            <h5>Cargos por envío: $ {costoEnvio}</h5>
                            <br></br>
                            <h5 className="total">Total a Pagar: $ {(total + parseFloat(costoEnvio,10)).toFixed(2)}</h5>
                        </div>
                    </div>

                </form>
            </div >
            <div class="separator"><h4>INFORMACIÓN DE PAGO</h4></div>
            <CreditCard></CreditCard>
            <br></br>
            <Footer></Footer>
        </div>
    )
}


export default CheckoutPage