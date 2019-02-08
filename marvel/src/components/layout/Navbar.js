import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
  <nav className="navbar navbar-expand-lg navbar-dark elegant-color-dark fixed-top scrolling-navbar">
    <Link className="navbar-brand" to="/">
      Marvel App
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#basicExampleNav"
      aria-controls="basicExampleNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="basicExampleNav">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Characters
            <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/comics">
            Comics
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
