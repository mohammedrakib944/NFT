import React from "react";
import { NavLink } from "react-router-dom";

// internal imports
import "./nav.css";

export default function Nav() {
  return (
    <div className="navigation">
      <div className="container">
        <h2 className="nav-title">Metaverse Marketplace</h2>
        <div className="nav-section">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/create-assets">Sell Digital Asset</NavLink>
            </li>
            <li>
              <NavLink to="/my-assets">My Digital Assets</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Creator Dashboard</NavLink>
            </li>
          </ul>
        </div>
        <hr />
      </div>
    </div>
  );
}
