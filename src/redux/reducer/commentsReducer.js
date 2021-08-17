import {SET_COMMENTS} from "../types";
const initialState = {
 
    comments: [],
    // ... va hokazo
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_COMMENTS:
            return { ...state, comments: action.payload };


        default: return state;
    }
}

export default reducer