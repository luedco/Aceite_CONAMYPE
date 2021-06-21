import React, { useContext, useState } from 'react'
import { GlobalState } from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Cart from './icon/cart.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Logo from './images/iconoCocos.png'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart
    const [menu, setMenu] = useState(false)

    const logoutUser = async () => {
        await axios.get('/user/logout')

        localStorage.removeItem('firstLogin')

        window.location.href = "/";
    }

    const adminRouter = () => {
        return (
            <>
                <li><Link to="/create_product">Create Product</Link></li>
                <li><Link to="/category">Categories</Link></li>
            </>
        )
    }

    const loggedRouter = () => {
        return (
            <>
                <li><Link to="/history">History</Link></li>
                <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
            </>
        )
    }


    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <header>
            <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="30" />
            </div>

            <div className="logo">
                <h1>
                    <Link to="/mainPage">{isAdmin ? 'Admin' : 'Scent House'}</Link>
                    <img src={Logo} alt="logo" className="imgCoco"></img>
                </h1>
            </div>

            <ul style={styleMenu}>
                <li><Link to="/mainPage">Inicio</Link></li>
                <li>
                    <Dropdown as={ButtonGroup}>
                        <li><a><Link to="/quienesSomos">QUIENES SOMOS</Link></a>

                        <Dropdown.Toggle split variant="primary-outline" id="dropdown" /></li>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Descripción</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Fundadores</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Misión y Visión</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li><Link to="/saludbeneficios">Salud y Beneficios</Link></li>
                <li><Link to="/store">{isAdmin ? 'Productos' : 'Tienda'}</Link></li>
                <li><Link to="/ayuda">Ayuda</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <li><Link to="/login">Login 👤 Register</Link></li>
                }

                <li onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>



                {
                    isAdmin ? ''
                        : <li>
                            <div className="cart-icon">
                                <span>{cart.length}</span>

                                <Link to="/cart">
                                    <img src={Cart} alt="" width="30" />
                                </Link>
                            </div>
                        </li>
                }
            </ul>

        </header>
    )
}

export default Header
