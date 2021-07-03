//TYPES
const SET_USER_STATE = "SET_USER_STATE";
const SET_CURRENT_AUTH = "SET_CURRENT_AUTH";
const SET_REGISTER_GEOLOCATION = "SET_REGISTER_GEOLOCATION";
const SET_USER_DATA = "SET_USER_DATA";
const SET_EXPO_TOKEN = "SET_EXPO_TOKEN";

//INITIAL STATE

const initialState = {
  userLoged: false,
  currentAuth:'login',
  registerGeolocation:false,
  userData:'',
  expoToken:''
};

//REDUCERS
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USER_STATE:
      return { ...state, userLoged: payload };

    case SET_CURRENT_AUTH:
      return { ...state, currentAuth: payload };

    case SET_REGISTER_GEOLOCATION:
      return { ...state, registerGeolocation: payload };

    case SET_USER_DATA:
      return { ...state, userData: payload };

    case SET_EXPO_TOKEN:
      return { ...state, expoToken: payload };

    default:
      return state;
  }
}