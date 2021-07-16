import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Footer from '../footer/Footer'

let imgs = ['https://res.cloudinary.com/dwwgiwtgh/image/upload/v1626410105/ScentHouse/iconoCocos_dthghg.png']

function Register() {
    const [user, setUser] = useState({
        name: '', lastName:'', dob:'',email: '', password: ''
    })

    const onChangeInput = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const registerSubmit = async e => {
        e.preventDefault()
        try {
            await axios.post('/user/register', { ...user })

            localStorage.setItem('firstLogin', true)


            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div>
            <div className="login-page">
                <form onSubmit={registerSubmit}>
                    <h2 className="bnv">¡Bienvenido a Scent House!<img src={imgs[0]} alt="logo" className="imgCoco"></img></h2>
                    <input type="text" name="name" required
                        placeholder="Name" value={user.name} onChange={onChangeInput} />

                    <input type="text" name="lastName" required
                        placeholder="Last Name" value={user.lastName} onChange={onChangeInput}/>

                    <input type="date" name="dob" required value={user.dob} onChange={onChangeInput}/>

                    <input type="email" name="email" required
                        placeholder="Email" value={user.email} onChange={onChangeInput} />

                    <input type="password" name="password" required autoComplete="on"
                        placeholder="Password" value={user.password} onChange={onChangeInput} />

                    <div className="row">
                        <button type="submit">Register</button>
                        <Link to="/login">Login</Link>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Register