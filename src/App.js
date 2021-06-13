import "./App.css";
import { useState } from "react";
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

function App() {
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
  return (
    <>
      <Router history={history}>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/questions/ask"
            exact
            component={() => <AddQuestion onAdd={addQuestion} />}
          />

          <Route path="/question/:questionId" exact component={QuestionById} />
          <Route path="/search/:data" exact component={SearchQuestion} />
          <Route
            path="/question/edit/:questionId"
            exact
            component={EditAddQuestion}
          />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
