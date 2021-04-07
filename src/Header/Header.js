import React, { useState } from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { StickyContainer, Sticky } from "react-sticky";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
function Header() {
  const [locationSearch, setLocationSearch] = useState("");
  const [itemsSearch, setItemsSearch] = useState("");

  return (
    <nav className="header row justify-content-center">
      <div className="header__logo">
        {/* <Router>
          <Link to="/">
            <p className="mr-2 mt-3">OLX</p>
          </Link>
        </Router> */}
        <a href="/home">
          <p className="mr-2 mt-3">OLX</p>
        </a>
      </div>
      <div className="header__input1 mr-4 col-lg-3  col-md-5 ">
        <div className=" row justify-content-between mr-1 ml-1 ">
          <div>
            <SearchIcon className="mr-2" />
            <input
              value={locationSearch}
              onChange={(e) => setLocationSearch(e.target.value)}
              overflow="hidden"
              type="text"
              placeholder="Search city, area or loc..."
            ></input>
          </div>
          <ExpandMoreIcon />
        </div>
      </div>

      <div className="header__input2 header__searchI  col-lg-5 col-md-5 ">
        <div className="row justify-content-between  m-1 ">
          <input
            value={itemsSearch}
            onChange={(e) => setItemsSearch(e.target.value)}
            className="col-lg-6 col-md-8"
            type="text"
            placeholder="Find Cars, Mobile Phones and more..."
          ></input>
          <SearchIcon className="headeR__searchI" />
        </div>
      </div>

      <div className="header__buttons col-lg-2 col-md-3 ">
        <a href="/login">Login</a>
        <Button>
          <AddIcon />
          SELL
        </Button>
      </div>
    </nav>
    //     )}
    //   </Sticky>
    // </StickyContainer>
  );
}

export default Header;
