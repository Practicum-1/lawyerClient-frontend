import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import Input from "../../../components/Input/Input";
import Label from "../../../components/Label/Label";
import PageContainer from "../../../components/PageContainer/PageContainer";
import Title from "../../../components/Title/Title";

import "./Login.scss";

const Login = () => {
  const [input, setInput] = useState({ email: "", password: "" });

  const onSubmit = () => {};

  return (
    <PageContainer className={"login-page"}>
      <div className="lc-gradient">
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
          }
          alt=""
        />
      </div>
      <div className="login-container">
        <Card className="login-box">
          <Title className="title">Sign In</Title>
          <div className="input-box">
            <Label>Email</Label>
            <Input
              name="email"
              placeholder="Registered mail ID"
              value={input}
              setValue={setInput}
            />
          </div>
          <div className="input-box">
            <Label>Password</Label>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={input}
              setValue={setInput}
            />
          </div>
          {/* <span className="error">{error}</span> */}
          <div className="buttons">
            <Button onClick={() => onSubmit(input)} id="login-btn">
              Sign in
            </Button>
          </div>
        </Card>
      </div>
    </PageContainer>
  );
};

export default Login;
