import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import Input from "../../../components/Input/Input";
import Label from "../../../components/Label/Label";
import PageContainer from "../../../components/PageContainer/PageContainer";
import Title from "../../../components/Title/Title";
import Container from "../../../components/Container/Container";
import { LAWYER_INPUT_FIELDS } from "../../Common/SignUp/constants";
import { CLIENT_INPUT_FIELDS } from "../../Common/SignUp/constants";

import "./Signup.scss";

export default function SignUp() {
  const [role, setRole] = useState(CLIENT_INPUT_FIELDS);
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    location: "",
    email: "",
    phone: "",
    password: " ",
    education: "",
    gender: " ",
    experience: 0,
    court_name: "",
    practice_areas: {}  ,
    languages: {}
  });

  const onSubmit = (passedVal) => {
    console.log(passedVal);
  };

  return (
    <Container>
      <div className="reg-container">
        <div className="signup-header">
          <Title> Register Here</Title>
          <p>
            We need you to help us with some basic information for your account
            creation. All fields are mandatory
          </p>
        </div>
        <div className="role-buttons">
          <Button onClick={() => setRole(CLIENT_INPUT_FIELDS)}>CLIENT</Button>
          <Button onClick={() => setRole(LAWYER_INPUT_FIELDS)}>LAWYER</Button>
        </div>
        <Card className="signup-box">
          {role.map((field) => {
            if (field.type === "text" || field.type === "password") {
              return (
                <div className="input-box">
                  <Label>{field.label}</Label>
                  <Input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={input}
                    setValue={setInput}
                  />
                </div>
              );
            }
            if (field.type === "select") {
              return (
                <div className="input-box">
                  <Label className="role">{field.label}</Label>
                  <Input
                    type="select"
                    placeholder={field.placeholder}
                    options={field.options}
                    setValue={setInput}
                    value={input}
                    name={field.name}
                    isSearchable="true"
                  />
                </div>
              );
            }
          })}
          <div className="buttons">
            <br />
            <Button onClick={() => onSubmit(input)} id="login-btn">
              Register Now
            </Button>
          </div>
        </Card>
      </div>
      <div className="image">
        <img
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          alt=""
        />

        {/* <img
          src="https://images.pexels.com/photos/8867253/pexels-photo-8867253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        /> */}
      </div>
    </Container>
  );
}
