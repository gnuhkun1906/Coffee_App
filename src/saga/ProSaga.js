import { call,put } from "redux-saga/effects";
import { del_pro_service,  get_pro_service, post_pro_service, update_pro_service } from "../api/proService";


import { act_pro_success } from "../redux/action";

export const get_pro_saga=function*(){
    try {
        let product= yield call(get_pro_service) 
        
       yield put(act_pro_success(product))
    } catch (error) {
        console.log("error", error);
    }
}
export const post_pro_saga = function* (action) {
    try {
        // console.log(action.payload);
        yield call(post_pro_service,action.payload)
        yield get_pro_saga()
    } catch (error) {
        console.log("error", error);
    }
}
export const del_pro_saga = function* (action) {
    try {
        console.log(action.payload);
        yield call(del_pro_service,action.payload)
        yield get_pro_saga()
    } catch (error) {
        console.log("error", error);
    }
}
export const update_pro_saga = function* (action) {
    try {
        // console.log(action.payload);
        yield call(update_pro_service,action.payload)
        yield get_pro_saga()
    } catch (error) {
        console.log("error", error);
    }
}