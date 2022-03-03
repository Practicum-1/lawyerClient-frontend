import "./HomePage.scss";
import React from "react";

export default function HomePage() {
  return (
    <>
      <div className="main-container">
        <img src="/images/meeting.jpg" alt="" />
        <div className="container">
          <div className="text-content">
            <h1>Find the perfect expert Lawyer that suits your needs </h1>
            <br />
            <p>Find More clients and grow your practice </p>
          </div>
          <div className="form">
            <input
              type="text"
              placeholder="Enter Full Name"
              className="name-input"
            />
            <input
              type="text"
              placeholder="Enter email address"
              className="email-input"
            />
            <button>LogIn / SignUp</button>
          </div>
        </div>
      </div>
    </>
  );
}
