import React from 'react'
import "./second_header.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import pic from "../Pics/olx.jpg";
function Second_header() {
    return (
       <div>
            <div className="Second_header">
          <div className="categories">
              <h6>ALL CATEGORIES</h6>
              <ExpandMoreIcon></ExpandMoreIcon>
          </div>
          <p>Mobile Phones</p>
          <p>Cars</p>
          <p>Motorcycles</p>
          <p>Houses</p>
          <p>TV-Video-Audio</p>
          <p>Tablets</p>
          <p>Land & Plots</p>
            
        </div>
      <div className="myimg" >
      <img className="myimg" src="https://statics.olx.com.pk/external/base/img/hero_bg_pk.jpg"></img>
      </div>
        
      
       </div>
    )
}

export default Second_header
