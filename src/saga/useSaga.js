import { put, call } from "redux-saga/effects"
import { act_post_service, get_user_service } from "../api/useService"
import { ADD_SUCESS } from "../constant/actionTypes"
import { act_success } from "../redux/action"

export const get_user_saga = function* () {
    try {
        let listUsers = yield call(get_user_service)
        yield put(act_success(ADD_SUCESS, listUsers))
    } catch (error) {
        console.log("error", error);
    }
}
export const add_user_saga = function* (action) {
    try {

        yield call(act_post_service(action.payload))
        
    } catch (error) {
        console.log("error", error);
    }
}

