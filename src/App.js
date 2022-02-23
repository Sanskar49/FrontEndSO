import "./App.css";
import AddQuestion from "./components/Questions/AddQuestion";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/home/Header";
import HomePage from "./components/home/HomePage";
import QuestionById from "./components/Questions/QuestionById";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import SearchQuestion from "./components/Questions/SearchedQuestion";
import ErrorPage from "./components/Questions/ErrorPage";
import EditAddQuestion from "./components/Questions/EditAddQuestion";
import FrontView from "./components/FrontPage/FrontView";
import Login from "./components/FrontPage/Login";
import SignUp from "./components/FrontPage/SignUp";
import { useState } from "react";

function App() {
  const [statustoken, setStatustoken] = useState("");
  const GlobalStyles = createGlobalStyle` 
  body {
    background: #2d2d2d; 
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   }
      
`;
  const addQuestion = async (task) => {
    await fetch("http://localhost:8080/question/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
  };

  const userSignUp = async (userinfo) => {
    await fetch("http://localhost:8080/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userinfo),
    });
  };

  const userLogIn = async (loginfo) => {
    const barertoken = await fetch("http://localhost:8080/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginfo),
    });
    {
      barertoken.status === 200
        ? setStatustoken("Success")
        : setStatustoken("Denied");
    }
  };

  return (
    <>
      <Router history={history}>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route path="/" exact component={FrontView} />
          <Route
            path="/questions/ask"
            exact
            component={() => <AddQuestion onAdd={addQuestion} />}
          />
          <Route path="/home" exact component={HomePage} />

          <Route path="/question/:questionId" exact component={QuestionById} />
          <Route path="/search/:data" exact component={SearchQuestion} />
          <Route
            path="/question/edit/:questionId"
            exact
            component={EditAddQuestion}
          />
          <Route
            path="/login"
            exact
            component={() => (
              <Login loggedup={userLogIn} status={statustoken} />
            )}
          />
          <Route
            path="/signup"
            exact
            component={() => <SignUp signedup={userSignUp} />}
          />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
