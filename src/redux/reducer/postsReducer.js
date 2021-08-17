import {SET_POSTS} from "../types";
const initialState = {

    posts: [],
   
    // ... va hokazo
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_POSTS:
            return { ...state, posts: action.payload };


        default: return state;
    }
}
export default reducer