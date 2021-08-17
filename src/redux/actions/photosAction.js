import { getPhotos} from "../../api"
import {SET_PHOTOS} from "../types";


const setPhotos = async (dispatch) => {
    const res = await getPhotos();
    if (res.success) {
        const action = { type: SET_PHOTOS, payload: res.data };
        dispatch(action);
    }
    else {

    }
}
export {setPhotos}