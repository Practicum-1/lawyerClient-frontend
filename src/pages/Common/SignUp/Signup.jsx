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

  useEffect(() => {
    setPracticeAreas((prev) => [...prev, input.practice_areas]);
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
                      !field.name === "practice_areas"
                        ? field.options
                        : practiceAreaOptions
                    }
                    setValue={setInput}
                    value={input}
                    name={field.name}
                    isSearchable="true"
                    height="45px"
                  />
                </div>
              );
            }
          })}
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
