import React from "react";
import "./styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "/src/Components/Navbarcomp/Home.jsx";
import About from "/src/Components/Navbarcomp/About.jsx";
import Contact from "/src/Components/Navbarcomp/Contact.jsx";
import Help from "/src/Components/Navbarcomp/Help.jsx";
import Navbar from "/src/Components/Navbar.js";
import Login from "/src/Components/Navbarcomp/Login.jsx";
import Signup from "/src/Components/Navbarcomp/Signup.jsx";

function Error() {
  return <h6>Error ....loading this page</h6>;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/help" component={Help} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
