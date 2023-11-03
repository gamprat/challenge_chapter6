import { combineReducers } from "redux";
import authLoginSlice from "./auth/authLoginSlice";
import movieDataSlice from "./movie/movieDataSlice";
import searchDataSlice from "./search/searchDataSlice";

export default combineReducers({
    auth: authLoginSlice,
    movie: movieDataSlice,
    search: searchDataSlice,
})