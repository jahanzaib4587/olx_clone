import React, { useState } from "react";
import "./card.css";
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
function Card(props) {
  const [change1, setChange] = useState("#BFBFBF");
  console.log(change1);
  const like = () => {
    setChange("red");
    console.log(change1);
  };
  const dislike = () => {
    setChange("#BFBFBF");
  };
  return (
    <div className="Card  col-md-3 col-lg-3 col-sm-12">
      <div className="row justify-content-center">
        <img className="Card_img mr-2" src={props.url}></img>
        <FavoriteIcon
          className="mt-5"
          style={{ color: change1 }}
          onClick={like}
          onDoubleClick={dislike}
        ></FavoriteIcon>
      </div>
      <div className="Card_bottom">
        <h4>Rs {props.price}</h4>
        <p>{props.description}</p>
      </div>
      <h6 className="Card_time row justify-content-end p-2 mr-2">
        {props.time}
      </h6>
    </div>
  );
}

export default Card;
