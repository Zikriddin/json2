import { getAlbums} from "../../api"
import {SET_ALBUMS} from "../types";



const setAlbums = async (dispatch) => {
    const res = await getAlbums();
    if (res.success) {
        const action = { type: SET_ALBUMS, payload: res.data };
        dispatch(action);
    }
    else {

    }
}
export {setAlbums}