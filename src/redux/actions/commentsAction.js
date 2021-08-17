import { getComments} from "../../api"
import {SET_COMMENTS} from "../types";


const setComments = async (dispatch) => {
    const res = await getComments();
    if (res.success) {
        const action = { type: SET_COMMENTS, payload: res.data };
        dispatch(action);
    }
    else {

    }
}

export {setComments}