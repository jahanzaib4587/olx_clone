import './App.css';
import Header from './Header/Header';
import Second_header from "./Header/Second_header";
import Parent_Card from "./Search_Cards/Parent_Card";
import Parent_Holder from "./Recommendations/Parent_Holder"
function App() {
  return (
    <div className="App">
     <Header></Header>
    <Second_header></Second_header>
    <Parent_Card></Parent_Card>
    <Parent_Holder></Parent_Holder>
    </div>
  );
}

export default App;
