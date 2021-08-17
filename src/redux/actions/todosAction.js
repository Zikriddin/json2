import { getTodos} from "../../api"
import {SET_TODOS} from "../types";



const setTodos = async (dispatch) => {
    const res = await getTodos();
    if (res.success) {
        const action = { type: SET_TODOS, payload: res.data };
        dispatch(action);
    }
    else {

    }
}
export {setTodos}