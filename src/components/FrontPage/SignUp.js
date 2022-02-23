import React from "react";
import { EntryPage, PageHeader } from "./Style";
import EntryCard from "./EntryCard";
import InputGroup from "./InputGroup";
import Input from "./Input";
import AllButtons from "../Buttons/AllButtons";
import { Link } from "react-router-dom";
import { useState } from "react";
import history from "../../history";

function SignUp({ signedup }) {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");

  const registration = (e) => {
    e.preventDefault();

    if (!userName || !password || !email || !dob) {
      alert("Please provide all the information");
      return;
    } else {
      signedup({ userName, password, email, dob });
      alert("You have been registered");
      history.push("/login");
      setUsername("");
      setPassword("");
      setEmail("");
      setDob("");
    }
  };

  return (
    <EntryPage>
      <PageHeader to="/">SignUp</PageHeader>
      <EntryCard>
        <h2>Sign up</h2>
        <form onSubmit={registration}>
          <InputGroup>
            <label htmlFor="Username">UserName</label>
            <Input
              type="text"
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
              value={userName}
            ></Input>
          </InputGroup>
          <InputGroup>
            <label htmlFor="Password">Password</label>
            <Input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></Input>
          </InputGroup>
          <InputGroup>
            <label htmlFor="Email">Email Address</label>
            <Input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></Input>
          </InputGroup>
          <InputGroup>
            <label htmlFor="Email">D.O.B</label>
            <Input
              type="date"
              placeholder="Enter your D.O.B"
              onChange={(e) => setDob(e.target.value)}
              value={dob}
            ></Input>
          </InputGroup>
          <AllButtons type="submit" full>
            Signup
          </AllButtons>
        </form>
        <span>
          Already have an account?
          <Link to="/login">Log In</Link>
        </span>
      </EntryCard>
    </EntryPage>
  );
}

export default SignUp;
