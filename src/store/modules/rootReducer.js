import { combineReducers } from "redux";

import incomeIn from './income-in/reducer';
import incomeOut from "./income-out/reducer";

//combina os reducers e devolve um combinado
export default combineReducers({
    // lista de reducers separados por virgula
    incomeIn,
    incomeOut
});