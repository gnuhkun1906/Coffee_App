import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const initUser =
{
    email: '',
    password: ''
}

export default function Login() {
    const navigate = useNavigate()

    const [user, setUser] = useState(initUser)
    const [errorValue, setErrorValue] = useState(initUser)

    const handleLogin = () => {

        if (user.password.trim() === "" && user.email.trim() === "") {
            setErrorValue({ email: "", password: "email và password không đc để trống" })
        } else if (user.email.trim() === "") {
            setErrorValue({ password: "", email: "email không đc để trống" })
        
        } else if (user.password.trim() === "") {
            setErrorValue({ email: "", password: " password không đc để trống" })
        }

        // axios
        //     .get(`http://localhost:3000/users/?email_like=${user.email}&password=${user.password}`)
        //     .then((response) => {
        //         console.log(response.data)
        //         if (response.data[0].email !== user.email || response.data[0].password !== user.password) {
        //             setErrorValue({ email: "", password: "Email hoặc Password của bạn không chính xác" })
        //         }
        //     })
        //     .catch((error) => console.log("error", error))

        axios
            .get(`http://localhost:3000/users?email=${user.email}&password=${user.password}`)
            .then((response) => {
                console.log(response.data);
                if (response.data[0].permission === 1) {
                    localStorage.setItem("admin", JSON.stringify(response.data[0]))
                    navigate("/admin")
                } else {
                    localStorage.setItem("user", JSON.stringify(response.data[0]))
                    navigate("/")
                }
            }
            )
            .catch((error) => console.log("error", error))


    }

    return (
        <div>
            <section className="book" id="book">
                <h1 className="heading">
                    LOGIN
                </h1>
                <form action="">

                    <div className="d-flex justify-content-between align-items-center ">
                        <label className='label col-2 '>Email</label>
                        <input type="email"
                            placeholder="Email"
                            className="box col-8 form-control"
                            name='email'
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                    </div>
                    <span className='text-danger fs-4'>{errorValue.email}</span>
                    <div className="d-flex justify-content-between align-items-center ">
                        <label className='label'>Password</label>
                        <input type="password"
                            placeholder="Password"
                            className="box"
                            name='password'
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                    </div>
                    <div>

                        <span className='text-danger fs-4'>{errorValue.password}</span>
                    </div>


                    {/* <span className='text-danger'>{errorValue}</span> */}
                    <button type='button' className='btn-css'
                        onClick={handleLogin}
                    >Login</button>
                </form>
            </section>
        </div>
    )
}
