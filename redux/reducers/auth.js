//TYPES
const SET_USER_STATE = "SET_USER_STATE";

//INITIAL STATE

const initialState = {
  userLoged: false,
};

//REDUCERS
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USER_STATE:
      return { ...state, userLoged: payload };

    default:
      return state;
  }
}