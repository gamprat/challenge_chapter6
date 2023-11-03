import { combineReducers } from "redux";
import authLoginSlice from "./auth/authLoginSlice";
import movieDataSlice from "./movie/movieDataSlice";
import searchDataSlice from "./search/searchDataSlice";
import authMeSlice from "./auth/authMeSlice";

export default combineReducers({
    auth: authLoginSlice,
    movie: movieDataSlice,
    search: searchDataSlice,
    me: authMeSlice,
})