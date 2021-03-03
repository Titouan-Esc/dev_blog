import "./scss/style.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Publication from "./pages/Publication";
import Single from "./pages/Single";
import MeContacter from "./pages/MeContacter";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/posts/:title" component={Single} />
          <Route path="/publication" component={Publication} />
          <Route path="/contact" component={Contact} />
          <Route path="/me%20contacter" component={MeContacter} />
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
