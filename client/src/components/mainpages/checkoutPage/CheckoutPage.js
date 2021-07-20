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


    useEffect(() => {
        const getTotal = () => {
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
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
            setEstadoCupon(estadoCupon=true)
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
            <Detalles></Detalles>
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
                            <h5>Cargos por envío: $ 2.5</h5>
                            <br></br>
                            <h5 className="total">Total a Pagar: $ {(total + 2.50).toFixed(2)}</h5>
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