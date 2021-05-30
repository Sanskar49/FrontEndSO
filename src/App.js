import "./App.css";
import { useState } from "react";
import AddQuestion from "./components/Questions/AddQuestion";
import AllQuestions from "./components/Questions/AllQuestions";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/home/Header";
import HomePage from "./components/home/HomePage";
import QuestionById from "./components/Questions/QuestionById";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";

function App() {
  const GlobalStyles = createGlobalStyle` 
  body {
    background: #2d2d2d; 
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   }
      
`;
  const [questions, setQuestion] = useState("");
  const addQuestion = async (task) => {
    const res = await fetch("http://localhost:8080/question/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    console.log(data);

    setQuestion([...questions, data]);
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
        </Switch>
      </Router>
    </>
  );
}

export default App;
