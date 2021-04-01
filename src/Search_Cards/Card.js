import React from 'react'
import "./card.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
function Card(props) {
    return (
        <div className="Card">
        <div className="Card_top">
        <img height="200px" width="220px" src={props.url}></img>
        <FavoriteBorderIcon className="heart_icon"></FavoriteBorderIcon>
        </div>
            <div className="Card_detail">
            <h4>Rs {props.price}</h4>
            <p>{props.description}</p>
            <h6 className="Card_time">{props.time}</h6>
            </div>
       </div>
    )
}

export default Card;
