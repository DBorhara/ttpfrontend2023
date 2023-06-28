import ShoeActionType from "./shoes.types";

export const INITIAL_SHOE_STATE = {
  allShoes: [],
};

const shoeReducer = (state = INITIAL_SHOE_STATE, { type, payload }) => {
    console.log('SHOEREDUCER IS HANDLING FETCH ALL SHOES ACTION')
  switch (type) {
    case ShoeActionType.FETCH_ALL_SHOES:
      return { ...state, allShoes: payload };

    default:
      return state;
  }
};

export default shoeReducer;
