import React from "react";
import Card from "./Card";

const Cards = ({ data }) => {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
      {data.map((elementOfArray, index) => {
        return <Card key={elementOfArray.id} item={elementOfArray} />;
      })}
    </div>
  );
};

export default Cards;
