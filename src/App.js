import scss from "./scss/style.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Publication from "./pages/Publication";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact components={Home} />
          <Route path="/publication" components={Publication} />
          <Route path="/contact" components={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
