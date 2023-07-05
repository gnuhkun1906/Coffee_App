import {all,takeLatest} from "redux-saga/effects"
import { ADD_CART, ADD_USER, DELETE_CART, DELETE_ORDER, DELETE_PRO, EDIT_PRO, GET_CART, GET_ORDER, GET_PRO, GET_USER, POST_ORDER, POST_PRO, UPDATE_CART } from "../constant/actionTypes"
import { add_cart_saga, del_cart_saga, get_cart_saga, update_cart_saga } from "./cartSaga"
import { delete_order_saga, get_order_saga, post_order_saga, post_order_sags } from "./orderSaga"
import { del_pro_saga, get_pro_saga, post_pro_saga, update_pro_saga } from "./ProSaga"

import { add_user_saga, get_user_saga } from "./useSaga"
const rootSaga=function*(){
    yield all([
        takeLatest(GET_USER,get_user_saga),
        takeLatest(ADD_USER,add_user_saga),
        //Product
        takeLatest(POST_PRO,post_pro_saga),
        takeLatest(GET_PRO,get_pro_saga),
        takeLatest(DELETE_PRO,del_pro_saga),
        takeLatest(EDIT_PRO,update_pro_saga),
        //Cart
        takeLatest(ADD_CART,add_cart_saga),
        takeLatest(GET_CART,get_cart_saga),
        takeLatest(DELETE_CART,del_cart_saga),
        takeLatest(UPDATE_CART,update_cart_saga),

        //Order
        takeLatest(POST_ORDER,post_order_saga),
        takeLatest(DELETE_ORDER,delete_order_saga), 
        takeLatest(GET_ORDER,get_order_saga),
    ]
    )
}
export default rootSaga