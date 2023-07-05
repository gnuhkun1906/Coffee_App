import { call, put } from "redux-saga/effects"
import { delete_cart_service, get_cart_byId, get_cart_service, post_cart_service, update_cart_service } from "../api/cartService"
import { act_cart_success } from "../redux/action"

export const get_cart_saga = function* () {
    try {
        let cart = yield call(get_cart_service)
        yield put(act_cart_success(cart))
    } catch (error) {
        console.log("error: " + error);
    }
}
export const add_cart_saga = function* (action) {
  
    try {
        let cart = yield call(get_cart_service)
        let update_cart;
        let check= false
        cart.forEach(element => {
            if(element.product.productId===action.payload.product.productId){
                    check= true
                    update_cart={...element,quantity:element.quantity+1}

            }
        });
        if(!check){
            yield call(post_cart_service, action.payload)
        }else{
            yield call(update_cart_service,update_cart)
        }
            yield get_cart_saga()
        
     

        // yield get_cart_saga()
    } catch (error) {
       
    //    yield call(update_cart_service,{...res.data[0],quantity:res.data[0].quantity+1})
    }
}
export const del_cart_saga = function* (action) {
    
    try {
        yield call(delete_cart_service, action.payload)
        yield get_cart_saga()
    } catch (error) {
        console.log("error: " + error);
    }
}

export const update_cart_saga = function* (action) {
 console.log(action.payload);
    try {
        yield call(update_cart_service, action.payload)
        yield get_cart_saga()
    } catch (error) {
        console.log("error: " + error);
    }
}