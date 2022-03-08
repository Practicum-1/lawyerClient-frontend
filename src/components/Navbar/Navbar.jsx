import React from "react";
import "./Navbar.scss";

import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Button from "../Button/Button";
export default function Navbar() {
  return (
    <>
      {/* <div className="navbar">
        <h2>LAW</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">FIND A LAWYER</Link>
            </li>
            <li>
              <Link to="/">LEGAL SERVICES</Link>
            </li>
            <li>
              <img src="/images/avatar.png" alt="avatar" />
            </li>
            <li>
              <Link to="/signup">
                <Button >SignUp</Button>
              </Link>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div> */}
      <header>
        <h2>NAAM</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">FIND A LAWYER</Link>
            </li>
            <li>
              <Link to="/">LEGAL SERVICES</Link>
            </li>
            <li>
              <img src="/images/avatar.png" alt="avatar" />
            </li>
            <li>
              <Link to="/signup">
                <Button className="nav-button">SignUp</Button>
              </Link>
              <Link to="/login">
                <Button className="nav-button">Login</Button>
              </Link> 
            </li>
            </ul>
        </nav>


      </header>
      
<Outlet/>
    </>
  );
}
