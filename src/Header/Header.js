import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { StickyContainer, Sticky } from "react-sticky";
function Header() {
  return (
    <nav className="header col-lg-12 col-md-12 col-sm-12 container-fluid">
      <div className="header__logo">
        <p>OLX</p>
      </div>
      <div className="header__input1">
        <SearchIcon />
        <input type="text" placeholder="Search city, area or loc..."></input>
        <ExpandMoreIcon />
      </div>

      <div className="header__input2 header__searchI">
        <input
          type="text"
          placeholder="Find Cars, Mobile Phones and more..."
        ></input>
        <SearchIcon className="headeR__searchI" />
      </div>

      <div className="header__buttons">
        <a>Login</a>
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
