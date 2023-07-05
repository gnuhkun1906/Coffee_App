import { ADD_CART_SUCCESS, ADD_SUCCESS_PRO, GET_CART, GET_PRO, POST_ORDER_SUCCESS } from "../constant/actionTypes"

export const act_add_user=(newUser)=>{
    return{
        type:"ADD_USER", 
        payload:newUser 
    }
}
export const act_get_user=()=>{
    return{
        type:"GET_USER"
    }
}
export const act_success=(actionTypes,data)=>{
    return{
        type:actionTypes,
        payload:data  
    }
}

// Product
export const act_post_pro=(newProduct)=>{
    return{
        type:"POST_PRO",
        payload:newProduct
    }
}
export const act_get_pro=()=>{
 
    return{
        type:GET_PRO
    }
}
export const act_pro_success=(data)=>{
    return{
        type:ADD_SUCCESS_PRO,
        payload:data  
    }
}
export const act_delete_pro=(proDel)=>{
   
    return{
        type:"DELETE_PRO",
        payload:proDel
    }
}
export const act_update_pro=(proUpdate)=>{
    return{
        type:"EDIT_PRO",
        payload:proUpdate
    }
}

// Cart
export const act_get_cart=()=>{
    return {
        type:GET_CART,
        
    }
}
export const act_cart_success=(data)=>{
    
    return{
        type:ADD_CART_SUCCESS,
        payload:data  
    }
}
export const act_add_cart=(product)=>{
    
    return{
        type:"ADD_CART",
        payload:product
    }
          
}
export const act_delete_cart=(cartDel)=>{
  
    return{
        type:"DELETE_CART",
        payload:cartDel
    }
}
export const act_update_cart=(updateCart)=>{
    
    return{
        type:"UPDATE_CART",
        payload:updateCart
    }
}

//Order
export const act_order_success=(data)=>{
    return{
        type:POST_ORDER_SUCCESS,
        payload:data
    }
}
export const act_order=(cart_order)=>{
    return{
        type:"POST_ORDER",
        payload:cart_order
    }
}
export const act_get_order=()=>{
    return{
        type:"GET_ORDER"
        
    }
}
export const act_del_order=(orderDel)=>{
    return{
        type:"DELETE_ORDER",
        payload:orderDel
    }
}
