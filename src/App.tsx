import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Students from "./pages/Students";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/student" component={Students} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
