import React from "react";
import "./price_card.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
function Price_Card() {
  return (
    <div className="Price_Card p-2 mt-3">
      <div>
        <div className="d-flex justify-content-between">
          <h1 className="card_price">Rs 80,000</h1>
          <div>
            <FavoriteIcon className="m-2" />
            <ShareIcon />
          </div>
        </div>
        <p>Oppo F17 pro</p>
      </div>
      <br></br>
      <div className="d-flex justify-content-between">
        <p>Barki road, Lahore</p>
        <p>Today</p>
      </div>
    </div>
  );
}

export default Price_Card;
