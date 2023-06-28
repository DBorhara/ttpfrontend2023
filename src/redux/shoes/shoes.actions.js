import axios from "axios";

import ShoeActionType from "./shoes.types";

export const fetchAllShoes = (payload) => {
  console.log("FETCH ALL SHOES ACTION");
  return {
    type: ShoeActionType.FETCH_ALL_SHOES,
    payload: payload,
  };
};

export const fetchAllShoesThunk = () => {
  return async (dispatch) => {
    try {
      console.log("FETCHALLSHOESTHUNK IS FIRING");
      const response = await axios.get("http://localhost:8080/api/shoes");
      console.log("FETCHALLSHOESTHUNK COMPLETED")
      dispatch(fetchAllShoes(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
