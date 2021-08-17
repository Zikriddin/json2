import {TOGGLE_SIDEBAR} from "../types";

const initialState = {
    // isLoading:false,
    // isError:false,
 isSidebarShow:true,

}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return{...state,isSidebarShow:!state.isSidebarShow}
   
            // case SET_LOADING:
            //     return{...state,isLoading:payload.isLoading};
                
            // case SET_ERROR:
            //     return{...state,isError:payload.isError};
        
            //     default: return state;
            }
        }
        
        export default reducer;