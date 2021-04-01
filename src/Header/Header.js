import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import  {Button} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
function Header() {
  return (
    <div className="header">
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
      <SearchIcon className="header__searchI"/>
      </div>
      
      <div className="header__buttons">
        
            <a>Login</a>
            <Button   >
            <AddIcon/>
                SELL
            </Button>
        
      </div>
    </div>
  );
}

export default Header;