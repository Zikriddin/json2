import {SET_PHOTOS } from "../types";
const initialState = {

    photos: [],
   
    // ... va hokazo
}

const reducer = (state = initialState, action) => {
    switch (action.type) {


        case SET_PHOTOS:
            return { ...state, photos: action.payload };
       

        default: return state;
    }
}
export default reducer