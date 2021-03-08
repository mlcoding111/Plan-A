import React from "react";

import Navigation from "./Navigation/Navigation";
import NavigationDefault from "./Navigation/NavigationDefault";
import Home from './Home/Home'
import Prix from './Prix/Prix'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

// Work with build
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <NavigationDefault/>
        {/* <Navigation /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/prix" exact component={Prix} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
