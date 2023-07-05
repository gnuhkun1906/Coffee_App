import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { act_add_user, act_get_user } from '../../redux/action'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
const initUser = {
    fullname: "",
    email: "",
    password: "",
    repassword: "",
    telephone: "",
    address: ""
}
export default function Register() {

    const [newUser, setNewUser] = useState(initUser)
    const [errorValue, setErrorValue] = useState(initUser)
    const navigate = useNavigate()
    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setNewUser({ ...newUser, [name]: value })
        checkValidate(name, value)
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(act_get_user())
    }, [])





    const checkValidate = (name, value) => {

        const parterm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (name === "fullname") {
            if (value.trim() === "") {
                setErrorValue({ ...errorValue, [name]: "Vui lòng không để trống" })

            } else if (value.length < 6) {
                setErrorValue({ ...errorValue, [name]: "Tên của bạn phải trên 6 kí tự" })

            } else {
                setErrorValue({ ...errorValue, [name]: "" })

            }
        }
        // email
        if (name === "email") {
            if (value.trim() === "") {
                setErrorValue({ ...errorValue, [name]: "Vui lòng không để trống" })

            } else if (!parterm.test(value)) {
                setErrorValue({ ...errorValue, [name]: "Email không đúng định dạng" })

            } else {
                checkEmailExists(value).then((res) => {
                    if (res) {
                        setErrorValue({ ...errorValue, [name]: "Email đã tồn tại" })

                    } else {
                        setErrorValue({ ...errorValue, [name]: "" })

                    }
                })
            }
        }



        // password
        if (name === "password") {
            if (value.trim() === "") {
                setErrorValue({ ...errorValue, [name]: "Vui lòng không để trống" })

            } else if (value.length < 6) {
                setErrorValue({ ...errorValue, [name]: "Mật khẩu chưa đủ mạnh phải trên 6 kí tự" })

            } else {
                setErrorValue({ ...errorValue, [name]: "" })

            }

        }

        // repassword
        if (name === "repassword") {

            if (value.trim() === "") {
                setErrorValue({ ...errorValue, [name]: "Vui lòng không để trống" })

            } else if (value !== newUser.password) {
                setErrorValue({ ...errorValue, [name]: "Mật khẩu của bạn chưa trùng khớp" })

            } else {
                setErrorValue({ ...errorValue, [name]: "" })

            }
        }

        // telephone
        if (name === "telephone") {

            if (value.trim() === "") {
                setErrorValue({ ...errorValue, [name]: "Vui lòng không để trống" })

            } else {
                setErrorValue({ ...errorValue, [name]: "" })

            }
        }
        // address
        if (name === "address") {

            if (value.trim() === "") {
                setErrorValue({ ...errorValue, [name]: "Vui lòng không để trống" })

            } else {
                setErrorValue({ ...errorValue, [name]: "" })

            }
        }

    }

    const checkEmailExists = (email) => {
        return axios
            .get(`http://localhost:3000/users?email=${email}`)
            .then((res) => res.data.length > 0)
            .catch((err) => console.log("error", err))

    }


    const handleAdd = () => {
        let case1 =
            newUser.fullname !== "" &&
            newUser.email !== "" &&
            newUser.password !== "" &&
            newUser.repassword !== "" &&
            newUser.telephone !== "" &&
            newUser.address !== "";
        let case2 =
            errorValue.fullname == "" &&
            errorValue.email == "" &&
            errorValue.password == "" &&
            errorValue.repassword == "" &&
            errorValue.telephone == "" &&
            errorValue.address == "";
        if (case1 && case2) {
           

            dispatch(act_add_user(newUser))
            alert("Đăng kí thành công")
            navigate("/login")
        }
       
    }
    return (
        <div>
            <section
                className="vh-100 bg-image back"
                style={{
                    backgroundImage:
                        'url("https://www.thuocdantoc.org/wp-content/uploads/2020/08/uong-cafe-co-bi-vo-sinh7.jpg")'
                    
                }}
            >
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ borderRadius: 15 }}>
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5">
                                            Create an account
                                        </h2>
                                        <form className='form-register'>
                                          
                                            <div className="form-outline mb-4">
                                                <input
                                                placeholder='UserName'
                                                    type="text"
                                                    id="form3Example1cg"
                                                    className="form-control form-control-lg"
                                                    name='fullname'
                                                    value={newUser.fullname}
                                                    onChange={handleChange} />

                                                <p className='text-danger' >{errorValue.fullname}</p>

                                            </div>
                                            <div className="form-outline mb-4">
                                                
                                                <input
                                                placeholder='Your Email'
                                                    type="email"
                                                    id="form3Example3cg"
                                                    className="form-control form-control-lg"
                                                    name='email'
                                                    value={newUser.email}
                                                    onChange={handleChange}
                                                />

                                                <p className='text-danger' >{errorValue.email}</p>

                                            </div>
                                            <div className="form-outline mb-4">
                                               
                                                <input
                                                placeholder='Password'
                                                    type="password"
                                                    id="form3Example4cg"
                                                    className="form-control form-control-lg"
                                                    name='password'
                                                    value={newUser.password}
                                                    onChange={handleChange}
                                                />
                                                <p className='text-danger' >{errorValue.password}</p>

                                            </div>
                                            <div className="form-outline mb-4">
                                                
                                                <input
                                                placeholder='Repeat your password'
                                                    type="password"
                                                    id="form3Example4cdg"
                                                    className="form-control form-control-lg"
                                                    name='repassword'
                                                    value={newUser.repassword}
                                                    onChange={handleChange}
                                                />

                                                <p className='text-danger' >{errorValue.repassword}</p>

                                            </div>
                                            <div className="form-outline mb-4">
                                                
                                                <input
                                                placeholder='Telephone'
                                                    type="number"
                                                    id="form3Example4cdg"
                                                    className="form-control form-control-lg"
                                                    name='telephone'
                                                    value={newUser.telephone}
                                                    onChange={handleChange}
                                                />
                                                <p className='text-danger' >{errorValue.telephone}</p>

                                            </div>
                                            <div className="form-outline mb-4">
                                               
                                                <input
                                                    type="text"
                                                    placeholder='Address'
                                                    id="form3Example4cdg"
                                                    className="form-control form-control-lg"
                                                    name='address'
                                                    value={newUser.address}
                                                    onChange={handleChange}
                                                />
                                                <p className='text-danger' >{errorValue.address}</p>

                                            </div>
                                          
                                            <div className="d-flex justify-content-center">
                                                <button
                                                    type="button"
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                                    onClick={handleAdd}
                                                >
                                                    Register
                                                </button>
                                            </div>
                                            <p className="text-center text-muted mt-5 mb-0">
                                                Have already an account?{" "}
                                                <NavLink to={"/login"} className="fw-bold text-body"  >
                                                    <u>Login here</u>
                                                </NavLink>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="book" id="book">
                <h1 className="heading">
                    REGISTER
                </h1>
                <form action="">
                    <div className="d-flex justify-content-between align-items-center ">
                        <label className='label col-sm-2 '>Fullname</label>
                        <input type="text"
                            placeholder="Name"
                            className="box form-control"
                            name='fullname'
                            value={newUser.fullname}
                            onChange={handleChange} />
                        <p className='text-danger' >{errorValue.fullname}</p>
                    </div >
                    <div className="d-flex justify-content-between align-items-center ">
                        <label className='label col-2  '>Email</label>
                        <input type="email"
                            placeholder="Email"
                            className="box col-8 form-control"
                            name='email'
                            value={newUser.email}
                            onChange={handleChange}
                        />
                        <p className='text-danger' >{errorValue.email}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center ">
                        <label className='label'>Password</label>
                        <input type="password"
                            placeholder="Password"
                            className="box"
                            name='password'
                            value={newUser.password}
                            onChange={handleChange}
                        />
                        <p className='text-danger' >{errorValue.password}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center ">
                        <label className='label'>RePassword</label>
                        <input type="password"
                            placeholder="RePassword"
                            className="box"
                            name='repassword'
                            value={newUser.repassword}
                            onChange={handleChange}
                        />
                        <p className='text-danger' >{errorValue.repassword}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center ">
                        <label className='label'>Telephone</label>
                        <input type="text"
                            placeholder="Telephone"
                            className="box"
                            name='telephone'
                            value={newUser.telephone}
                            onChange={handleChange}
                        />
                        <p className='text-danger' >{errorValue.telephone}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center ">
                        <label className='label'>Address</label>
                        <input type="text"
                            placeholder="Address"
                            className="box"
                            name='address'
                            value={newUser.address}
                            onChange={handleChange}
                        />
                        <p className='text-danger' >{errorValue.address}</p>
                    </div>

                    <button type='button'
                        className='btn-css'
                        onClick={handleAdd}
                    >Submit</button>
                </form>
            </section> */}
        </div>
    )
}
