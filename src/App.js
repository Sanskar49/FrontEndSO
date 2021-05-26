import "./App.css";
import { useState } from "react";
import AddQuestion from "./components/AddQuestion";
import AllQuestions from "./components/AllQuestions";

import styled, { createGlobalStyle } from "styled-components";
import Header from "./home/Header";
import QuestionPage from "./home/QuestionPage";

function App() {
  const GlobalStyles = createGlobalStyle` 

   body {
    background: #2d2d2d; 
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   }
      
`;

  const [open, setOpen] = useState(false);

  const [questions, setQuestion] = useState([]);

  const addQuestion = async (task) => {
    const res = await fetch("http://localhost:8080/question/create", {
      mode: "no-cors",
      method: "POST",
      headers: {
        // "Accept" : "application/json, text/plain, */*",
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
      <div className="container">
        <AddQuestion onAdd={addQuestion} />
        {/* <GlobalStyles />
      <Header />
      <QuestionPage /> */}
      </div>
    </>
  );
}

export default App;
