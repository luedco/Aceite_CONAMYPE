import React, { useContext, useState } from 'react'
import { GlobalState } from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Cart from './icon/cart.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Logo from './images/iconoCocos.png'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
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

            <ul style={styleMenu} style={{}}>
                <li><Button variant="primary-outline"><Link to="/mainPage">Inicio</Link></Button></li>
                <li><Dropdown>
                    <Dropdown.Toggle variant="primary-outline" id="dropdown-basic">
                        ¿QUIENES SOMOS?
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item href="/quienesSomos#descripcionId">Descripción</Dropdown.Item>
                            <Dropdown.Item href="/quienesSomos/fundadores">Fundadores</Dropdown.Item>
                            <Dropdown.Item href="/quienesSomos/misionVision">Misión y Visión</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown></li>
                <li><Button variant="primary-outline"><Link to="/saludbeneficios">Salud y Beneficios</Link></Button></li>
                <li><Button variant="primary-outline"><Link to="/store">{isAdmin ? 'Productos' : 'Tienda'}</Link></Button></li>
                <li><Button variant="primary-outline"><Link to="/ayuda">Ayuda</Link></Button></li>
                <li><Button variant="primary-outline"><Link to="/contacto">Contacto</Link></Button></li>
                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <li><Button variant="primary-outline"><Link to="/login">Login 👤 Register</Link></Button></li>
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
