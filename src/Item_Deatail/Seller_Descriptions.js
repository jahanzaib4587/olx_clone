import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import "./seller_descriptions.css";
import FaceIcon from "@material-ui/icons/Face";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
function Seller_Descriptions() {
  return (
    <div>
      {/* Price_Card1 */}
      <div className=" p-2 col-lg-12  Card2 mt-3">
        <p className="description_heading">Seller Description</p>

        <div className="d-flex justify-content-between mb-3 mt-3">
          <div className="d-flex">
            <FaceIcon className="card_icon mr-2"></FaceIcon>
            <div>
              <p className="description_name">My Name</p>
              <p className="description_date">Member since Nov 2015</p>
            </div>
          </div>

          <ChevronRightIcon></ChevronRightIcon>
        </div>

        <button className="btn container-fluid mb-3">Chat with seller</button>

        <div className="d-flex justify-content-center">
          <PhoneIcon />
          <p className="mr-3 ml-3"> *** *** ****</p>
          <a href="#">Show number</a>
        </div>
      </div>
    </div>
  );
}

export default Seller_Descriptions;
