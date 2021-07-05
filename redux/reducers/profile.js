//TYPES
const SET_USERFULL_DATA = "SET_USERFULL_DATA";
const SET_IS_LOADING = "SET_IS_LOADING";

//INITIAL STATE
const initialState = {
  userFullData: {},
  isLoading:true
};

//REDUCERS
export default function (state = initialState, action) {
  const { type, payload } = action;
  
  switch (type) {
    case SET_USERFULL_DATA:
      return { ...state, userFullData: payload };

    case SET_IS_LOADING:
      return { ...state, isLoading: payload };

    default:
      return state;
  }
}
