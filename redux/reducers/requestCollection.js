//TYPES
const ADD_BAG_TO_COLLECT = "ADD_BAG_TO_COLLECT";
const CLEAR_BAG_TO_COLLECT = "CLEAR_BAG_TO_COLLECT";

//INITIAL STATE

const initialState = {
  bagsToCollect: [],
};

//REDUCERS
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_BAG_TO_COLLECT:
      return { ...state, bagsToCollect: [...state.bagsToCollect, payload] };

    case CLEAR_BAG_TO_COLLECT:
      return { ...state, bagsToCollect: [] };

    default:
      return state;
  }
}
