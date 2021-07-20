import React, { useContext, useState } from 'react'
import { GlobalState } from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Cart from './icon/cart.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Logo from './images/iconoCocos.png'
import Carrito from './images/cart32.png'
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
                <li><Link to="/create_product">Crear Producto</Link></li>
                <li><Link to="/category">Categorias</Link></li>
            </>
        )
    }

    const loggedRouter = () => {
        return (
            <>
                <li><Link to="/history">Historial</Link></li>
                <li><Link to="/" onClick={logoutUser}>Salir</Link></li>
            </>
        )
    }


    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <header>
            <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="25" />
            </div>

            <div className="logo">
                <h1>
                    <Link className="aa" to="/mainPage">{isAdmin ? 'Admin' : 'Scent House'}</Link>
                    <img src={Logo} alt="logo" className="imgCoco"></img>
                </h1>
            </div>

            <ul style={styleMenu} style={{background:'#17181A'}}>
                <li><Button variant="primary-outline"><Link to="/mainPage">Inicio</Link></Button></li>
                <li><Dropdown>
                    <Dropdown.Toggle variant="primary-outline" id="dropdown-basic">
                    <Link>¿QUIENES SOMOS?</Link>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{background:'#17181A'}}>
                    <Dropdown.Item href="/quienesSomos#descripcionId"><Link Link to="/quienesSomos#descripcionId">Descripción</Link></Dropdown.Item>
                            <Dropdown.Item href="/quienesSomos/fundadores"><Link to="/quienesSomos/fundadores">Fundadores</Link></Dropdown.Item>
                            <Dropdown.Item href="/quienesSomos/misionVision"><Link to="/quienesSomos/misionVision">Misión y Visión</Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown></li>
                <li><Button variant="primary-outline"><Link to="/saludbeneficios">Salud y Beneficios</Link></Button></li>
                <li><Button variant="primary-outline"><Link to="/store">{isAdmin ? 'Productos' : 'Tienda'}</Link></Button></li>
                <li><Button variant="primary-outline"><Link to="/ayuda">Ayuda</Link></Button></li>
                <li><Button variant="primary-outline"><Link to="/contacto">Contacto</Link></Button></li>
                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <li><Button variant="primary-outline"><Link to="/login">Entrar 👤 Registrarte</Link></Button></li>
                }

                <li onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>



                {
                    isAdmin ? ''
                        : <li>
                            <div className="cart-icon">
                                <span>{cart.length}</span>

                                <Link to="/cart" style={{background:'#17181A'}}>
                                    <img src={Carrito} alt="" width="30" style={{background:'#17181A'}}/>
                                </Link>
                            </div>
                        </li>
                }
            </ul>

        </header>
    )
}

export default Header
