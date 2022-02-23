import React from "react";
import { EntryPage, PageHeader } from "./Style";
import EntryCard from "./EntryCard";
import InputGroup from "./InputGroup";
import Input from "./Input";
import AllButtons from "../Buttons/AllButtons";
import { Link } from "react-router-dom";
import { useState } from "react";
import history from "../../history";

function Login({ loggedup, status }) {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = (e) => {
    e.preventDefault();

    if (!userName || !password) {
      alert("Please dont leave any fields in blank");
    } else {
      loggedup({ userName, password });
      setUsername("");
      setPassword("");
    }
    console.log(status);

    {
      status === "Success" ? history.push("/home") : alert("Wrong Credentials");
    }
  };

  return (
    <EntryPage>
      <PageHeader to="/">Login</PageHeader>
      <EntryCard>
        <h2>Log in</h2>
        <form onSubmit={userLogin}>
          <InputGroup>
            <label htmlFor="Username">User Name</label>
            <Input
              type="text"
              placeholder="Enter your username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={userName}
            ></Input>
          </InputGroup>
          <InputGroup>
            <label htmlFor="Password">Password</label>
            <Input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            ></Input>
          </InputGroup>
          <AllButtons type="submit" full>
            Log in
          </AllButtons>
        </form>
        <span>
          Don't have an account?
          <Link to="/signup">Sign up</Link>
        </span>
      </EntryCard>
    </EntryPage>
  );
}

export default Login;
