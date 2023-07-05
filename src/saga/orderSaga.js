import { call,put} from "redux-saga/effects";
import { delete_order_service, get_order_service, post_order_service } from "../api/orderService";
import { act_order_success } from "../redux/action";

export const post_order_saga = function* (action) {
    try {
        
        yield call(post_order_service, action.payload);
        yield get_order_saga()

    } catch (error) {
        console.log("error: " + error);
    }
}
export const delete_order_saga = function* (action) {
    try {
        
        yield call(delete_order_service, action.payload);
        yield get_order_saga()

    } catch (error) {
        console.log("error: " + error);
    }
}
export const get_order_saga=function*(){
    
    try{
        let listOrder= yield call(get_order_service);
        console.log(listOrder);
        yield put(act_order_success(listOrder))
        
    }catch(error){
        console.log(error);
    }
}
