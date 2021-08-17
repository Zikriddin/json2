import { getUsers} from "../../api"
import {SET_USERS} from "../types";


const setUsers = async (dispatch) => {
    const res = await getUsers();
    if (res.success) {
        const action = { type: SET_USERS, payload: res.data };
        dispatch(action);
    }
    else {

    }
}


export {setUsers}