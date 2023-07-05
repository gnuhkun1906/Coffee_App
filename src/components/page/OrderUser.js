import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { act_order ,act_delete_cart} from '../../redux/action'

export default function OrderUser() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [fullname,setFullName]=useState("")
    const [telephone,setTelephone]=useState()
    const [address,setAddress]=useState("")
    const [time,setTime]=useState("")
    
    let listCart=useSelector(state=>state.listCart)
    let total = listCart.reduce((sum, item) => sum + item.quantity * item.product.price, 0)
    console.log(total);
   const handleOrderPro=()=>{
        dispatch(act_order({fullname,telephone,address,time,listCart,total}))
        listCart.forEach(cart => {
            dispatch(act_delete_cart(cart.id))
        });
        alert("Đặt hàng thành công")
        navigate("/")
    }

    return (
        <div>
            <section className="book" id="book">
                <h1 className="heading">
                    Information
                </h1>
                <form action="">

                    <div className="d-flex justify-content-between align-items-center ">
                        <label className='label col-2 '>FullName</label>
                        <input type="text"
                            placeholder="fullname"
                            className="box col-8 form-control"
                            name='fullname'
                            value={fullname}
                            onChange={(e) => setFullName( e.target.value )}
                        />
                    </div>
                    {/* <span className='text-danger'>{errorValue.email}</span> */}
                    <div className="d-flex justify-content-between align-items-center ">
                        <label className='label'>Telephone</label>
                        <input type="number"
                            placeholder="telephone"
                            className="box"
                            name='telepphone'
                            value={telephone}
                            onChange={(e) => setTelephone( e.target.value )}
                        />
                    </div>
                    {/* <span className='text-danger'>{errorValue.password}</span> */}
                    <div className="d-flex justify-content-between align-items-center ">
                        <label className='label'>Adress</label>
                        <input type="text"
                            placeholder="address"
                            className="box"
                            name='address'
                            // value={user.password}
                            value={address}
                            onChange={(e) => setAddress( e.target.value )}
                        />
                    </div>
                    {/* <span className='text-danger'>{errorValue.password}</span> */}
                    <div className="d-flex justify-content-between align-items-center ">
                        <label className='label'>Time</label>
                        <input type="date"
                            placeholder="time"
                            className="box"
                            name='time'
                            value={time}
                            onChange={(e) => setTime( e.target.value )}
                        />
                    </div>
                    {/* <span className='text-danger'>{errorValue.password}</span> */}



                    <button type='button' className='btn-css btn btn-success fs-2'
                        onClick={handleOrderPro}
                    >Đặt Hàng</button>
                </form>
            </section>
        </div>
    )
}
