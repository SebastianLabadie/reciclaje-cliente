//TYPES
const ADD_BAG_TO_ASSOCIATE = "ADD_BAG_TO_ASSOCIATE";
const CLEAR_BAG_TO_ASSOCIATE = "CLEAR_BAG_TO_ASSOCIATE";

//INITIAL STATE

const initialState = {
  bagsToAssociate: [],
};

//REDUCERS
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_BAG_TO_ASSOCIATE:
      return { ...state, bagsToAssociate: [...state.bagsToAssociate, payload] };

    case CLEAR_BAG_TO_ASSOCIATE:
      return { ...state, bagsToAssociate: [] };

    default:
      return state;
  }
}
