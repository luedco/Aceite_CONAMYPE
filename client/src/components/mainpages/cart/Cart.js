import React, {useContext, useState, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import axios from 'axios'
import PaypalButton from './PaypalButton'
import Footer from '../footer/Footer'
function Cart() {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [token] = state.token
    const [total, setTotal] = useState(0)
    const [subTotalProd, setSubTotalProd]= useState(0)
    const [precioMayoreo,setPrecioMayoreo]= useState(0)



    useEffect(() =>{
        const getTotal = () =>{
            const total = cart.reduce((prev, item) => {
                    var precioCaja = (12*item.price)-(12*item.price)*0.10;
                    var precioMayoreoCalc = ((Math.trunc(item.quantity/12))*precioCaja) + ((item.quantity%12)*item.price);
                return prev + (precioMayoreoCalc)
            },0)

            setTotal(total)
            
        }

        getTotal()

    },[cart])

    const addToCart = async (cart) =>{
        await axios.patch('/user/addcart', {cart}, {
            headers: {Authorization: token}
        })
    }


    const increment = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity += 1

            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const decrement = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            cart.forEach((item, index) => {
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })

            setCart([...cart])
            addToCart(cart)
        }
    }

    const tranSuccess = async(payment) => {
        const {paymentID, address} = payment;

        await axios.post('/api/payment', {cart, paymentID, address}, {
            headers: {Authorization: token}
        })

        setCart([])
        addToCart([])
        alert("You have successfully placed an order.")
    }


    if(cart.length === 0) 
        return <h2 style={{textAlign: "center", fontSize: "5rem"}}>Carrito Vacío.</h2> 

    return (
        <div>
            <div class="separator"><h2>CARRITO DE COMPRAS</h2></div>
            {
                cart.map(product => (
                    <div className="detail cart" key={product._id}>
                        <img src={product.images.url} alt="" />

                        <div className="box-detail">
                            <h2>{product.title}</h2>

                            <h3>$ {(((Math.trunc(product.quantity/12))*((12*product.price)-(12*product.price)*0.10)) + ((product.quantity%12)*product.price)).toFixed(2)}</h3>
                            <p>{product.description}</p>

                            <div className="amount">
                                <button onClick={() => decrement(product._id)}> - </button>
                                <span>{product.quantity}</span>
                                <button onClick={() => increment(product._id)}> + </button>
                            </div>
                            <div className="delete" 
                            onClick={() => removeProduct(product._id)}>
                                X
                            </div>
                        </div>
                    </div>
                ))
            }

            <div className="total">
                <h3>Subtotal: $ {total.toFixed(2)}</h3>

            </div>
        <br></br>
        <div className="btn-container">
            <a href="/checkout" class="btn btn-warning btn-lg btnPago" role="button">Proceder a pago</a>
        </div>
        <br></br>
        <Footer></Footer>
        </div>
    )
}

export default Cart
