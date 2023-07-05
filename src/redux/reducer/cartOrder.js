import { POST_ORDER_SUCCESS } from "../../constant/actionTypes"

 const initState=[]
 export const listOrder=(state=initState,action)=>{
 
    switch (action.type) {
        
        case POST_ORDER_SUCCESS:
            return [...action.payload]
        default:
           return state
    }
 } 