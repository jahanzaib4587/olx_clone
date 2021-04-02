import "./App.css";
import Header from "./Header/Header";
import Second_header from "./Header/Second_header";
import Parent_Card from "./Search_Cards/Parent_Card";
import Parent_Holder from "./Recommendations/Parent_Holder";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Route>
          <Switch pat="/">
            <Home></Home>
          </Switch>
        </Route>
      </Router>
    </div>
  );
}

export default App;
