import React, { useState } from "react";
import "./card.css";
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

function Card(props) {
  const [change1, setChange] = useState("#BFBFBF");

  const like = () => {
    setChange("red");
  };
  const dislike = () => {
    setChange("#BFBFBF");
  };
  return (
    <div className="col-md-3 col-lg-3 col-sm-12 ">
      <div className="Card1 container">
        <div className="row justify-content-center">
          <img
            className="Card_img mr-2"
            height="200vh"
            width="220vw"
            src={props.url}
          ></img>
          <FavoriteIcon
            className="heart1_icon mt-5 "
            style={{ color: change1 }}
            onClick={like}
            onDoubleClick={dislike}
          ></FavoriteIcon>
        </div>
        <div className="Card_bottom">
          <h4>Rs {props.price}</h4>
          <p>{props.description}</p>
        </div>
        <h6 className="Card1_time row justify-content-end p-2 mr-2">
          {props.time}
        </h6>
      </div>
    </div>
  );
}

export default Card;
