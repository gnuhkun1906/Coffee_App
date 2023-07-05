import { ADD_SUCESS } from "../../constant/actionTypes"

const initState=[]
export const users=(state=initState,action)=>{
  
    switch(action.type){
        case ADD_SUCESS:
            return [...action.payload]
        default:
            return state
    }
}