import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import Products from './products/Products'
import DetailProduct from './detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'
import OrderHistory from './history/OrderHistory'
import OrderDetails from './history/OrderDetails'
import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'
import Categories from './categories/Categories'
import CreateProduct from './createProduct/CreateProduct'
import QuienesSomos from './quienesSomos/QuienesSomos'
import Fundadores from './quienesSomos/fundadores'
import MisonVision from './quienesSomos/misionVision'
import MainPage from './mainPage/MainPage'
import SaludBeneficios from './saludBeneficios/SaludBeneficios'
import Ayuda from './ayuda/Ayuda'
import Contacto from './contacto/Contacto'


import {GlobalState} from '../../GlobalState'


function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin


    return (
        <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/detail/:id" exact component={DetailProduct} />

            <Route path="/login" exact component={isLogged ? NotFound : Login} />
            <Route path="/register" exact component={isLogged ? NotFound : Register} />

            <Route path="/category" exact component={isAdmin ? Categories : NotFound} />
            <Route path="/create_product" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : NotFound} />

            <Route path="/history" exact component={isLogged ? OrderHistory : NotFound} />
            <Route path="/history/:id" exact component={isLogged ? OrderDetails : NotFound} />

            <Route path="/cart" exact component={Cart} />

            <Route path="/quienesSomos" exact component={QuienesSomos}/>
            <Route path="/quienesSomos/fundadores" exact component={Fundadores}/>
            <Route path="/quienesSomos/misionVision" exact component={MisonVision}/>

            <Route path="/mainPage" exact component={MainPage}/>
            <Route path="/saludbeneficios" exact component={SaludBeneficios}/>
            <Route path="/ayuda" exact component={Ayuda}/>
            <Route path="/contacto" exact component={Contacto}/>
            <Route path="/store" exact component={Products}/>


            <Route path="*" exact component={NotFound} />
        </Switch>
    )
}

export default Pages
