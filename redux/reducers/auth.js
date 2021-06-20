//TYPES
const SET_USER_STATE = "SET_USER_STATE";
const SET_CURRENT_AUTH = "SET_CURRENT_AUTH";
const SET_REGISTER_ADDRESS = "SET_REGISTER_ADDRESS";

//INITIAL STATE

const initialState = {
  userLoged: false,
  currentAuth:'login',
  registerAddress:false
};

//REDUCERS
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USER_STATE:
      return { ...state, userLoged: payload };

    case SET_CURRENT_AUTH:
      return { ...state, currentAuth: payload };

    case SET_REGISTER_ADDRESS:
      return { ...state, registerAddress: payload };

    default:
      return state;
  }
}