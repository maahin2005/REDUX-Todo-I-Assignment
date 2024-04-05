import axios from "axios";
import { LOGIN_SUCESS, LOGIN_UNSUCESS } from "./actionItems";

const loginSucceeded = (token) => ({
  type: LOGIN_SUCESS,
  payload: { isAuth: true, token },
});
const loginUnsuccessful = () => ({
  type: LOGIN_UNSUCESS,
});

export const loginCredintied = (credentials) => async (dispatch) => {
  let API_URL = "https://reqres.in/api/login";
  try {
    let resp = await axios.post(API_URL, credentials);
    console.log(resp.data.token);

    resp.data.token
      ? dispatch(loginSucceeded(resp.data.token))
      : dispatch(loginUnsuccessful());
  } catch (error) {
    console.log(error);
  }
};
