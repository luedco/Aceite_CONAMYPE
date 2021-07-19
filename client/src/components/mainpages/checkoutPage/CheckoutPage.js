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

    return (
        <div>
            <div class="separator"><h2>PÁGINA DE PAGO</h2></div>
            <div className="total">
                <h3>Subtotal: $ {total.toFixed(2)}</h3>
                <PaypalButton
                    total={total}
                />
            </div>
            <div class="separator"><h4>DETALLES DE LA ENTREGA</h4></div>
            <Detalles></Detalles>
            <div class="separator"><h4>DETALLES DEL PRODUCTO</h4></div>
            <div className="detalleContainer">

                <form className="detalleForm">

                    <div class="form-group">
                        <label for="full_name_id" class="control-label">Ingresa el código promocional </label>
                        <input type="text" class="form-control" id="full_name_id" name="full_name" placeholder="703D2" />
                    </div>

                    <div className="detallesInfoContainer">
                        <div className="detallesInfo">
                            <h5>Subtotal: $ {total.toFixed(2)}</h5>
                            <br></br>
                            <h5>Cargos por envío: $ 2.5</h5>
                            <br></br>
                            <h5>Total a Pagar: $ {(total + 2.50).toFixed(2)}</h5>
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