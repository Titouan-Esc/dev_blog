import scss from "./scss/style.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        <Switch></Switch>
      </Router>
    </div>
  );
}

export default App;
