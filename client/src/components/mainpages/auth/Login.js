import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Footer from '../footer/Footer'

let imgs = ['https://res.cloudinary.com/dwwgiwtgh/image/upload/v1626410105/ScentHouse/iconoCocos_dthghg.png'];

function Login() {
    const [user, setUser] = useState({
        email: '', password: ''
    })

    const onChangeInput = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const loginSubmit = async e => {
        e.preventDefault()
        try {
            await axios.post('/user/login', { ...user })

            localStorage.setItem('firstLogin', true)

            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div>
            <div className="login-page">
                <form onSubmit={loginSubmit}>
                    <h2 className="bnv">¡Logueate en tu cuenta!<img src={imgs[0]} alt="logo" className="imgCoco" /></h2>
                    <input type="email" name="email" required
                        placeholder="Email" value={user.email} onChange={onChangeInput} />

                    <input type="password" name="password" required autoComplete="on"
                        placeholder="Contraseña" value={user.password} onChange={onChangeInput} />

                    <div className="row">
                        <button type="submit">Entrar</button>
                        <Link to="/register">Registrarte</Link>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Login
