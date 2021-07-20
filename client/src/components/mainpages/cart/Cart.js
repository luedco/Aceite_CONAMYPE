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
    const [subTotalProd1, setSubTotalProd1]= useState(0)
    const [subTotalProd2, setSubTotalProd2]= useState(0)
    const [subTotalProd3, setSubTotalProd3]= useState(0)


    useEffect(() =>{
        const getTotal = () =>{
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
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
                if(item.quantity>12){
                    
                    switch(item.id){
                        case 1:
                            var cantDec1 = Math.trunc(item.quantity/12);
                            var totalCantDec1 = cantDec1 * 3.60*12;
                            var cantUnit1 = item.quantity - (cantDec1*12);
                            var totalcantUnit1 = cantUnit1 *4;
                            setSubTotalProd1(totalCantDec1 + totalcantUnit1)
                            break;
                        case 2:
                            var cantDec2 = Math.trunc(item.quantity/12);
                            var totalCantDec2 = cantDec2 * 96.30*12;
                            var cantUnit2 = item.quantity - (cantDec2*12);
                            var totalcantUnit2 = cantUnit2 *7;
                            setSubTotalProd1(totalCantDec2 + totalcantUnit2)
                            break;
                        default:
                            var cantDec3 = Math.trunc(item.quantity/12);
                            var totalCantDec3 = cantDec3 * 9.00*12;
                            var cantUnit3 = item.quantity - (cantDec3*12);
                            var totalcantUnit3 = cantUnit3 *10;
                            setSubTotalProd1(totalCantDec3 + totalcantUnit3)
                    }
                }
                else{
                    setSubTotalProd1(item.quantity*item.price)
                }
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
        return <h2 style={{textAlign: "center", fontSize: "5rem"}}>Cart Empty</h2> 

    return (
        <div>
            <div class="separator"><h2>CARRITO DE COMPRAS</h2></div>
            {
                cart.map(product => (
                    <div className="detail cart" key={product._id}>
                        <img src={product.images.url} alt="" />

                        <div className="box-detail">
                            <h2>{product.title}</h2>

                            <h3>$ {product.price * product.quantity}</h3>
                            <p>{product.description}</p>

                            <div className="amount">
                                <button onClick={() => decrement(product._id)}> - </button>
                                <span>{product.quantity}</span>
                                <button onClick={() => increment(product._id)}> + </button>
                            </div>
                            <div>
                                <h3>Subtotal: $ {subTotalProd1.toFixed(2)}</h3>
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
