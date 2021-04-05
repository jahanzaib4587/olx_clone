import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import Carousal_demo from "./Carousal_demo";
import Price_Card from "./Price_Card";
import Cards_Holder from "./Cards_Holder";
function Item_Details() {
  return (
    <div className="">
      <div className=" p-3">
        <div className="row justify-content-center">
          <Carousal_demo />

          <Cards_Holder />
        </div>
      </div>
    </div>
  );
}

export default Item_Details;
