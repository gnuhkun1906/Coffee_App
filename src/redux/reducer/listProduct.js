import { ADD_SUCCESS_PRO } from "../../constant/actionTypes"

const initState=[]
export const listproduct=(state=initState,action)=>{
  
    switch(action.type){
        case ADD_SUCCESS_PRO:
              return [...action.payload]
        default:
            return state
    }
}