import {SET_ALBUMS} from "../types";
const initialState = {

   
    albums: [],
 
    // ... va hokazo
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_ALBUMS:
            return { ...state, albums: action.payload };

        default: return state;
    }
}

export default reducer