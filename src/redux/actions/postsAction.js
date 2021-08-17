import { getPosts} from "../../api"
import {SET_POSTS} from "../types";


const setPosts = async (dispatch) => {
    const res = await getPosts();
    if (res.success) {
        const action = { type: SET_POSTS, payload: res.data };
        dispatch(action);
    }
    else {

    }
}

export {setPosts}