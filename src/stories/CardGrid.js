import React from "react";
import Card from "./Card";

const CardGrid = ({ cards = [], columns = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3", gap = "gap-6" }) => {
  return (
    <div className={`grid ${columns} ${gap}`}>
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardGrid;