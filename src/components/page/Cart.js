import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {  act_get_cart } from '../../redux/action'
import CartItem from './CartItem'

export default function Cart() {

  const dispatch = useDispatch({})

  useEffect(() => {
    dispatch(act_get_cart())
  }, [])

  const listCart = useSelector(state => state.listCart)

  const navigate = useNavigate()
  const handleOrder = () => {
      navigate("/orderUser")
  }

 

  let total = listCart.reduce((sum, item) => sum + item.quantity * item.product.price, 0)
  let footer="";
  if (listCart.length==0) {
    footer=""
  }else{
      footer = (  <tr >
          <td></td>
          <td></td>
          <td></td>
          <td colSpan={2}><b>Tổng Tiền:   {total}$</b></td>
          <td><button className='btn-css  fs-3' onClick={handleOrder}>Chốt Đơn</button></td>
       </tr>)
  }
  return (
    <div>
      <section className="book" id="book">
        <h3 className="heading">
          Your Cart
        </h3>
        <table className="table fs-3">
          <thead >
            <tr  >
              <th width="4%">#</th>
              <th width="10%">Mã sản phẩm</th>
              <th width="15%" >Image</th>
              <th width="15%" >ProductName</th>
              <th width="4%">Quantity</th>
              <th width="20%">Price</th>
              <th width="20%">SubTotal</th>
              <th width="25%">Action</th>
            </tr>
          </thead>
          <tbody id="my-cart-body">
            {/* CART BODY */}
            {listCart.map((cart, index) => <CartItem key={cart.id} cart={cart} index={index} />)}
            {/* END CART BODY */}
            {footer}
          </tbody>
        </table>
      </section>
    </div>

  )
}
