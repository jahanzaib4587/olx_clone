import "./App.css";
import Header from "./Header/Header";
import Second_header from "./Header/Second_header";
import Parent_Card from "./Search_Cards/Parent_Card";
import Parent_Holder from "./Recommendations/Parent_Holder";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Details from "./Item_Deatail/Item_Details";
import Home from "./Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/details">
            <Header />
            <Second_header />
            <Details />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
