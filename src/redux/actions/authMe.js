import { reduxGetUser } from "../../services/auth/get_user";
import { setDataUser } from "../reducers/auth/authMeSlice";

export const GetUser = () => (dispatch) => {
     return reduxGetUser().then((result) => {
        console.log(result, "ini coba dilihat")
        return dispatch(setDataUser({ name: result.data.data.name, email: result.data.data.email }));
    }).catch((err) => {

    });
}