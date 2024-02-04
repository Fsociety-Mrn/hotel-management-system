import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";
import Footer from "./footer/Footer";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
    {/* Note: yung CSS niya nasa app.css */}
    {/* Ito yung header niya */}
      <Navbar />

      <Switch>

        {/* Eto yung mga sub pages niya */}
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />

      </Switch>

      <Footer />
    </>
  );
}

export default App;
