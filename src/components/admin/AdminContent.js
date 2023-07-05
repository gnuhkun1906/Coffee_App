import React from 'react'
import { NavLink } from 'react-router-dom'

export default function AdminContent() {
    return (
        <div>
            <div
                className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
                style={{ width: 200, height: "100vh" }}>
            
                <a

                    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                >
                    <svg className="bi me-2" width={40} height={32}>

                    </svg>
                    <span className=" side-bar-item">Sidebar</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto side-bar-ul">
                    <li>
                        <NavLink className="= text-white side-bar-item" to={"/"}>
                        <i class="bi bi-house-door-fill"></i>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="= text-white side-bar-item" to={"/admin/products"}>
                            <i class="bi bi-pencil-square"></i>
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-white side-bar-item" to={"/admin/manager"}>
                            <i class="bi bi-person-circle"></i>
                            Manager User
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className=" text-white side-bar-item" to={"/admin/order"}>
                            <i class="bi bi-truck"></i>
                            Orders
                        </NavLink>
                    </li>

                </ul>
               
                
            </div>
        </div>
    )
}
