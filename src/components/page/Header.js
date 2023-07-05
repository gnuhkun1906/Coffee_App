import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


export default function Header() {
    const [isLogin, setIsLogin] = useState(false)
    const [name, setName] = useState("")
    const navigate=useNavigate()
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            setIsLogin(true)
            setName(user.fullname)
        }
        else {
            setIsLogin(false)
        }
    }, [])
    const handleLogOut=()=>{
        localStorage.removeItem("user")
        setIsLogin(false)
        navigate("/")
    }
    return (
        <div>
            <header className="header">
                <div id="menu-btn" className="fas fa-bars" />
                <NavLink class="navbar-brand" to={"/"}
                ><img
                        width="100"

                        height="70"
                        src="https://marketplace.canva.com/EAFKN3_ORPo/1/0/1600w/canva-brown-classic-coffee-shop-badge-logo-3wdcn3CaT0I.jpg"
                    /></NavLink>
                <nav className="navbar">
                    <NavLink to={"/"}>HOME

                    </NavLink>

                    {/* <NavLink to={"/about"}>ABOUT</NavLink> */}
                    <NavLink to={"/menu"}>MENU
                        <div className='home-menu'>
                            <ul >
                                <li> <NavLink>Coffee</NavLink></li>
                                <li> <NavLink>Capuchino</NavLink></li>
                                <li> <NavLink>Espresso</NavLink></li>
                                <li> <NavLink>Dark Mocha</NavLink></li>
                            </ul>
                        </div>
                    </NavLink>
                    <NavLink to={"/review"}>REVEW</NavLink>
                    
                </nav>
                <div className='input-div'>
                    <input
                        class=" input_search form_control me-2"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button className='button'><i class="bi bi-search btn-search " ></i></button>

                </div>
                <div>
                    <NavLink to={"/cart"} >
                        <i class="bi bi-cart3 cart"></i>
                    </NavLink>
                </div>
                {
                    isLogin ? (<div>
                        <NavLink className={"btn-css"}>
                            {name}
                        </NavLink>
                        <i class="bi bi-box-arrow-right btn-css" onClick={handleLogOut}></i>
                    </div>) :
                        (<div>
                            <NavLink to={"/login"} className={"btn-css"}>
                                Login
                            </NavLink>
                            <NavLink to={"/register"} className={"btn-css"}>
                                Register
                            </NavLink>
                        </div>)
                }
            </header>
        </div>
    )
}
