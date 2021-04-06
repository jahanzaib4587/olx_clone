import React, { useContext } from "react";
import Price_Card from "./Price_Card";
import Seller_Descriptions from "./Seller_Descriptions";
import Posted_In from "./Posted_In";
import "./cards_holder.css";
import { Price1 } from "../Search_Cards/Card";
function Cards_Holder() {
  // const priceVal = useContext(Price1);
  // console.log(priceVal);
  return (
    <div className="d-flex flex-column">
      <Price_Card />
      {/* price={priceVal} */}
      <Seller_Descriptions />
      <Posted_In />
    </div>
  );
}

export default Cards_Holder;
