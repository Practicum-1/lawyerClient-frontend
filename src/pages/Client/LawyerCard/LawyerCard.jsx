import React from "react";
import Card from "../../../components/Card/Card";
import "./LawyerCard.scss";
const LawyerCard = () => {
  return (
    <Card className="lawyer-card">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg"
        alt=""
      />
      <div className="info">
        <p className="name">Advocate Name Here</p>
        <p>
          <i class="fa-solid fa-location-dot"></i>
          Location Here
        </p>
        <p>
          <i class="fa-solid fa-suitcase"></i>
          Experience Here
        </p>
      </div>
      <div className="about">
        <p>Star Rating</p>
        <h4>Practice Areas and Skills</h4>
        <p>Practice Area and skills here</p>
      </div>
    </Card>
  );
};

export default LawyerCard;
