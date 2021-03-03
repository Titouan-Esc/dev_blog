import "./scss/style.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Publication from "./pages/Publication";
import Single from "./pages/Single";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/posts/:title" component={Single} />
          <Route path="/publication" component={Publication} />
          <Route path="/contact" component={Contact} />
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
