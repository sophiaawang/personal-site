'use client'
import React from "react";
import { Link } from "react-router-dom";
import '../styles.css';

export function Navbar() {
  return (
    <div>
      <button class="button hidden" id="menu-button">Menu</button>
      <ul id="dropdown-ul">
        <li class="current-page">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/projects"> Projects</Link>
        </li>
      </ul>
      <button class="hidden" id="close-button">Close</button>
    </div>
  );
}
export default Navbar;