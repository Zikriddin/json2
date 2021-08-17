import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import usersReducer from "./usersReducer";
import postsReducer from "./postsReducer";
import photosReducer from "./photosReducer";
import commentsReducer from "./commentsReducer";
import albumsReducer from "./albumsReducer";

export default combineReducers({
    global :globalReducer,
    users:usersReducer,
    posts :postsReducer,
    photos :photosReducer,
    comments:commentsReducer,
    albums:albumsReducer,

})