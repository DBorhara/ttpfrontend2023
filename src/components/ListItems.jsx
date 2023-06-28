import React from "react";

export default function ListItems(props) {
  console.log("LIST ITEMS COMPONENT");
  return props.list ? (
    props.list.map((item) => {
      return (
        <div key={item.id}>
          <h1>{item.type}</h1>
        </div>
      );
    })
  ) : (
    <h1>Loading...</h1>
  );
}
