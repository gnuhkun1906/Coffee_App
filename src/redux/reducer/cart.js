import { ADD_CART_SUCCESS } from "../../constant/actionTypes";

const initState =  []
export const listCart=(state=initState,action)=>{
    switch (action.type) {
        case ADD_CART_SUCCESS:
           state= action.payload
           return state
        default:
            return state
    }
}