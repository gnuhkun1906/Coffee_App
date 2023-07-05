import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { act_get_order } from '../../redux/action'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Orders() {
  const [orderDetail,setOrderDetail]= useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(act_get_order())
  }, [])
  let listOrder = useSelector(state => state.listOrder)

  const handleDetail = (listOrder) => {
    setOrderDetail(listOrder.listCart)
  }
  return (
    <div>

      <h1 className='my-4 fs-1'> Manager Order Product </h1>
      <br />
      <br />
      <table class="table fs-3">
        <thead>
          <tr>
            <th >#</th>
            <th >UserName</th>
            <th >Address</th>
            <th> Telephone</th>
            <th> Time</th>
            <th >Subtotal</th>
            <th >Detail</th>
            


          </tr>
        </thead>
        <tbody>
          {listOrder.map((listOrder, index) => {
            return (
              <tr key={listOrder.id}>
                <td >{index + 1}</td>
                <td >{listOrder.fullname}</td>
                <td >{listOrder.address}</td>
                <td >{listOrder.telephone}</td>
                <td >{listOrder.time}</td>
                <td >{listOrder.total}</td>
                <td >
                  <button data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn btn-warning fs-3' onClick={()=>handleDetail(listOrder)}>Detail</button>
                </td>
               
              </tr>
            )
          })}
        </tbody>
      </table>
      
      <div className="modal fade "  id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Product Info</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body fs-4">
              <table width={"100%"} >
              <thead >
            <tr  >
              <th width="4%">STT</th>
              <th width="10%">Product ID</th>
              <th width="15%" >Image</th>
              <th width="15%" >ProductName</th>
              <th width="4%">Quantity</th>
              <th width="20%">Price</th>
              <th width="20%">SubTotal</th>
              
            </tr>
          </thead>
                <tbody>
                  {
                    orderDetail.map((cart, index) => {
                      return(
                        <tr key={cart.product.productId}>
                <th scope="row">{index + 1}</th>
                <td>{cart.product.productId}</td>
                <td><img width={70} src={cart.product.image} alt={cart.product.productName} /></td>
                <td>
                    {cart.product.productName}
                </td>
                <td>
                    {cart.quantity}
                </td>
                <td>
                    <strong>{cart.product.price}$</strong>
                </td>
                <td>
                    <strong>{cart.product.price * cart.quantity}$</strong>
                </td>
                </tr>
                      )
                  })
}
                </tbody>
              </table>
            </div>
          
          </div>
        </div>
      </div>

    </div>
  )
}
