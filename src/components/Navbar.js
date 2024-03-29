import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";

import logo from "../images/dlogo.png";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
          <Link to="/" className="logo-container" >
              <img src={logo} alt="DO HOTEL" className="nav-logo" />
              <span className="logo-letter">DO HOTEL</span>
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/rooms">ROOMS</Link>
            </li>
            <li>
              <button className="book-now-btn" to="/">BOOK NOW</button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
