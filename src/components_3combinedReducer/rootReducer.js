import {combineReducers} from "redux";
import usersReducer from "./usersReducer";
import postsReducer from "./postReducer";
import storiesReducer from "./storiesReducer";


const rootReducer = combineReducers({usersReducer, postsReducer, storiesReducer});


export default rootReducer;