import React, { useState } from "react";
import "./second_header.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CategoryModal from "../Modal/Categories";
import { Domain } from "@material-ui/icons";
function Second_header() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="col-lg-12 col-md-12 col-sm-12 container-fluid">
      <div className="Second_header">
        <div className="categories" onClick={() => setModalShow(true)}>
          <h6>ALL CATEGORIES</h6>
          <ExpandMoreIcon></ExpandMoreIcon>
        </div>
        <CategoryModal show={modalShow} onHide={() => setModalShow(false)} />
        <Router>
          <Route>
            <Link to="/mobile_phones">
              <a>Mobile Phones</a>
            </Link>
            <Link to="cars">
              <a>Cars</a>
            </Link>
            <Link to="motorcycle">
              <a>Motorcycles</a>
            </Link>
            <Link to="houses">
              <a>Houses</a>
            </Link>
            <Link to="tv_video_audio">
              <a>TV-Video-Audio</a>
            </Link>
            <Link to="tablets">
              <a>Tablets</a>
            </Link>
            <Link to="land_&_plots">
              <a>Land & Plots</a>
            </Link>
          </Route>
        </Router>
      </div>
    </div>
  );
}

export default Second_header;
