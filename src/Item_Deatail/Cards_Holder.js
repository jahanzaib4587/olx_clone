import React from "react";
import Price_Card from "./Price_Card";
import Seller_Descriptions from "./Seller_Descriptions";
import Posted_In from "./Posted_In";
import "./cards_holder.css";
function Cards_Holder() {
  return (
    <div className="d-flex flex-column">
      <Price_Card />
      <Seller_Descriptions />
      <Posted_In />
    </div>
  );
}

export default Cards_Holder;
