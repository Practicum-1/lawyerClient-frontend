import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./Profile.scss";
import ViewDetails from "./../../../assets/icons/details.svg";
import Input from "../../../components/Input/Input";
import Label from "../../../components/Label/Label";
import Button from "../../../components/Button/Button";

const Profile = () => {
  const [lawyer, setLawyer] = useState();
  const { id } = useParams();

  const [input, setInput] = useState({ review: "" });
  const navigate = useNavigate();

  useEffect(async () => {
    const res = await axios.get(`/lawyer/${id}`);
    console.log("ujjwal`", res.data);
    setLawyer(res.data.data);
  }, []);

  const handleReviewSubmit = async (e) => {
    try {
      console.log(input);
      // await axios.post(`/lawyer/${id}/review`, {
      //   review: e.target.review.value,
      // });
      // navigate(`/lawyer/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!!lawyer && (
        <div className="lawyer-profile">
          <div className="lawyer_card" key={lawyer.id}>
            <div className="logo__web">
              <img src="" alt="" />
            </div>
            <div className="lawyer_card__container">
              <div className="heading">
                <div className="details">
                  <h2>{lawyer.full_name}</h2>
                  <div className="status">
                    <span className="status__indicator active"></span>
                    <p className="status__text active">Active</p>
                  </div>
                </div>
                <div className="right">
                  <div className="viewFeatures">
                    <div onClick={() => navigate(`/lawyer/${lawyer.id}`)}>
                      <p className="fz12">View Details</p>
                      <img src={ViewDetails} alt="view details" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="policyNo">
                <p>
                  {lawyer?.location.city}, {lawyer?.location.state}
                </p>
                <div className="tooltip_policy"></div>
              </div>
              <div className="policyNo">
                <p>{lawyer.experience} years Experience</p>
                <div className="tooltip_policy"></div>
              </div>
              <hr />
              <div className="meta">
                <div className="meta__info">
                  <h2 className="key">Practice area &amp; skills</h2>
                  <h3 className="value">Personal, Divorce ,Wills</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <h1>Add A Review</h1>
      <div className="review-form">
        <div>
          <Input
            type="textarea"
            className="review-textarea"
            name="review"
            value={input}
            setValue={setInput}
          />
        </div>

        <Button onClick={handleReviewSubmit}>Submit</Button>
      </div>

      <h1>Reviews</h1>

      {/* {lawyer?.reviews.map((review, index) => { */}
      <div className="review-container">
        {[1, 2, 3].map((review, index) => {
          return (
            <div className="review-card" key={index}>
              <h2>Pankaj K</h2>
              <div className="review-content">
                Your tireless efforts put in, in my legal matter are highly
                appreciable. Your prompt responses and attention has fetched me
                the expected result. If it hadn't for your analytical skills and
                knowledge, the matter wouldn't have been settled by now. I am
                grateful to you for representing me in the lawsuit with utmost
                care and concern. Thanks for prioritizing me as a client and
                doing everything in your power to help me.
              </div>

              <div className="review-timestamp">
                <i className="fa fa-calendar" style={{ fontSize: "12px" }}></i>{" "}
                2 months ago
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Profile;
