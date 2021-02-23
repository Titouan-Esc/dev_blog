import scss from "./scss/style.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import React, { useState } from "react";
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
