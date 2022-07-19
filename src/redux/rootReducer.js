import { combineReducers } from "redux";

import postsReducer from "./posts/postReducaer";
import sidenavReducer from "./sidenav/sidenavReducer";

const rootReducer = combineReducers({
    sidenav: sidenavReducer,
    posts: postsReducer
})

export default rootReducer