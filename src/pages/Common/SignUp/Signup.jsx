import React, { useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import Input from "../../../components/Input/Input";
import Label from "../../../components/Label/Label";
import PageContainer from "../../../components/PageContainer/PageContainer";
import Title from "../../../components/Title/Title";
import Container from "../../../components/Container/Container";
import { LAWYER_INPUT_FIELDS } from "../../Common/SignUp/constants";
import { CLIENT_INPUT_FIELDS } from "../../Common/SignUp/constants";
import ButtonThemes from "../../../components/Button/Themes";
import { ROLES } from "../../../constants/ROLES";

import "./Signup.scss";
import { PRACTICE_AREAS } from "../../../constants/PRACTICE_AREAS";

export default function SignUp() {
  const [role, setRole] = useState(ROLES.CLIENT);
  const [inputFields, setInputFields] = useState(CLIENT_INPUT_FIELDS);
  const [practiceAreas, setPracticeAreas] = useState([]);
  const [practiceAreaOptions, setPracticeAreaOptions] =
    useState(PRACTICE_AREAS);
  const [currentPracticeArea, setCurrentPracticeArea] = useState("");
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    location: "",
    email: "",
    phone: "",
    password: "",
    education: "",
    gender: " ",
    experience: 0,
    court_name: "",
    practice_areas: "",
    languages: {},
  });

  useEffect(() => {
    if (role === ROLES.CLIENT) {
      setInputFields(CLIENT_INPUT_FIELDS);
    } else {
      setInputFields(LAWYER_INPUT_FIELDS);
    }
  }, [role]);

  useEffect(() => {
    setCurrentPracticeArea(input.practice_areas);
  }, [input]);
  // input will change , it will trigger setCurrentPracticeArea which will trigger the below useEffect
  useEffect(() => {
    setPracticeAreas((prev) => [...prev, input.practice_areas]);
    //
    setInput({ ...input, practice_areas: "" });
  }, [currentPracticeArea]);

  useEffect(() => {
    const newPracticeAreaOptions = {};
    Object.keys(PRACTICE_AREAS)
      .filter((option) => !practiceAreas.includes(option))
      .forEach((key) => (newPracticeAreaOptions[key] = PRACTICE_AREAS[key]));
    setPracticeAreaOptions(newPracticeAreaOptions);
  }, [practiceAreas]);

  const onSubmit = (passedVal) => {
    console.log(passedVal);
  };

  return (
    <PageContainer className={"signup-page-container"}>
      <Container>
        <div className="signup-header">
          <Title>Register Here</Title>
          <div>
            We need you to help us with some basic information for your account
            creation. All fields are mandatory
          </div>
        </div>
        <div className="role-buttons">
          <Button
            onClick={() => setRole(ROLES.CLIENT)}
            theme={
              role === ROLES.CLIENT
                ? ButtonThemes.PRIMARY
                : ButtonThemes.GREY_OUTLINE
            }
          >
            CLIENT
          </Button>
          <Button
            onClick={() => setRole(ROLES.LAWYER)}
            theme={
              role === ROLES.LAWYER
                ? ButtonThemes.PRIMARY
                : ButtonThemes.GREY_OUTLINE
            }
          >
            LAWYER
          </Button>
        </div>
        <div className="main-signup-box">
          <div className="signup-box">
            {inputFields.map((field) => {
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
                      options={
                        field.name === "practice_areas"
                          ? practiceAreaOptions
                          : field.options
                      }
                      setValue={setInput}
                      value={input}
                      name={field.name}
                      isSearchable="true"
                      height="45px"
                    />
                    {field.name === "practice_areas" &&
                      practiceAreas.map((practiceArea) => (
                        <div className="selected-practice-area">
                          <span>{PRACTICE_AREAS[practiceArea]}</span>
                          {console.log(practiceArea)}
                        </div>
                      ))}
                  </div>
                );
              }
            })}
          </div>
          {role === ROLES.LAWYER ? (
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                alt="lawyer"
              />
            </div>
          ) : (
            <div className="image">
              <img
                src="https://images.pexels.com/photos/5668842/pexels-photo-5668842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="client"
              />
            </div>
          )}
        </div>
        <div className="buttons">
          <br />
          <Button onClick={() => onSubmit(input)} id="login-btn">
            Register Now
          </Button>
        </div>
      </Container>
    </PageContainer>
  );
}
