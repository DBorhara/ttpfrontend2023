import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllShoesThunk } from "../redux/shoes/shoes.actions";
import ListItems from "../components/ListItems";
// List all shoes

const Shoes = () => {
  const allShoes = useSelector((state) => state.shoes.allShoes);
  const dispatch = useDispatch();
  const fetchAllShoes = () => {
    console.log('RUNNING DISPATCH FROM FETCHALLSHOES')
    return dispatch(fetchAllShoesThunk());
  };

  useEffect(() => {
    console.log('FETCH ALL SHOES FIRING IN USEEFFECT')
    fetchAllShoes();
  }, []);

  return ( 
    <div>
      <h1>Shoes Page</h1>
      <ListItems list={allShoes} />
    </div>
  );
};

export default Shoes;
