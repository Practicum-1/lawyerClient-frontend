import React from "react";
import "./Navbar.scss"
export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <h2>LAW_DA</h2>
        <nav>
        <ul>
          <li>FIND A LAWYER</li>
          <li>LEGAL SERVICES</li>
          <li>
                <img src="/images/avatar.png" alt="avatar" />
            </li>
            <li>
            <button>LogIn / SignUp</button>

            </li>
          </ul>
          </nav>
      </div>
    </>
  );
}
