import React, { useState, useEffect } from "react";
import service from "./../../../util/axiosConfig";
import "./Dashboard.scss";
import { REQUEST_STATUS } from "../../../constants/roles";

const Dashboard = () => {
  const [requests, setRequests] = useState([]);
  useEffect(async () => {
    await getAllReq();
  }, []);

  const getAllReq = async () => {
    const lawyer_id = JSON.parse(localStorage.getItem("user"))?.user.id;
    const res = await service.get(`/lawyer/${lawyer_id}`);
    if (res.data?.data) {
      const pendingReq = res.data.data?.requests.filter(
        (el, index) => el.status === "pending"
      );
      setRequests(pendingReq);
    }
  };

  const handleStatus = async (status, request) => {
    const res = await service.patch(`/request/${status}/${request?.id}`);

    await getAllReq();
  };

  console.log("ujjwal ", requests);
  return (
    <div className="dashboard">
      <h1>Client Request</h1>

      <div className="client_request__container">
        {requests.map((request, index) => {
          return (
            <div className="client_request__card" key={request?.id}>
              <div className="client_request_card__container">
                <div className="heading">
                  <div className="details">
                    <h1>{request?.client_id} Name </h1>
                  </div>

                  <div className="details__icon">
                    <i
                      className="fa-solid fa-circle-check approve__icon"
                      onClick={() =>
                        handleStatus(REQUEST_STATUS["APPROVE"], request)
                      }
                    ></i>
                    <i
                      className="fa-solid fa-circle-xmark reject__icon"
                      onClick={() =>
                        handleStatus(REQUEST_STATUS["DENY"], request)
                      }
                    ></i>
                  </div>
                </div>

                <div className="policyNo">
                  <p>+91 7021991264</p>
                  <div className="tooltip_policy"></div>
                </div>

                <div className="policyNo">
                  <p>ujjwalgarg.252@gmail.com</p>
                  <div className="tooltip_policy"></div>
                </div>

                <hr />

                <div className="meta">
                  <div className="meta__info">
                    <h1 className="key">{request?.request_data?.title}</h1>
                    <h2 className="value">{request?.request_data?.body}</h2>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
