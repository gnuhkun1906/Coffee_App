import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { act_add_cart, act_get_pro } from '../../redux/action'

export default function Menu() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  useEffect(()=>{
    dispatch(act_get_pro())
  },[])
  let user =JSON.parse(localStorage.getItem("user"))
 
  const handleAddCart=(product)=>{
    if (user==null) {
      alert("Bạn cần phải đăng nhập")
      navigate("/login")
    }else{
      dispatch(act_add_cart({product,userId:user.id,quantity:1})) 
      
    }
 
  }
  const listProducts=useSelector(state=>state.listproduct)
  
  return (
    <div>
      <section className="menu" id="menu">
        <h1 className="heading">
          our menu <span>popular menu</span>
        </h1>
        <div className="box-container">
          {listProducts.map((product)=>{
            return <>
            <div className="wrapper1">
            <div className="wrapper">
              <div className="product-img"> 
                <img src={product.image} />
              </div>
              <div className="product-info">
                <div className="product-text">
                  <h1>{product.productName}</h1>

                 

                </div>
                <div className="product-price-btn">
                  <p>
                    <span>{product.price}</span>$
                  </p>
                  <button type="button" onClick={()=>handleAddCart(product)}>Order</button>
                </div>
              </div>
            </div>
          </div>
            </>
          })}

         
        </div>
      </section>
    </div>
  )
}
