import "./App.css";
import Header from "./Header/Header";
import Second_header from "./Header/Second_header";
import Parent_Card from "./Search_Cards/Parent_Card";
import Parent_Holder from "./Recommendations/Parent_Holder";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import Details from "./Item_Deatail/Item_Details";
import Home from "./Home";
import Login from "./User_Regestration/Login";

import Category_detail_page from "./Modal/Category_Details/Category_Page";
import Banner_image from "./Header/Banner_image";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/details">
            <Header />
            <Second_header />
            <Details />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/category">
            <Header />
            <Second_header />
            <Category_detail_page />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
