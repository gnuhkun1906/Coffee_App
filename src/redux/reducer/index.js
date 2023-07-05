import { combineReducers } from "redux";

import { listCart } from "./cart";
import { listOrder } from "./cartOrder";
import { listproduct } from "./listProduct";
import { users } from "./users";


const rootReducer=combineReducers({users,listproduct,listCart,listOrder})
export default rootReducer