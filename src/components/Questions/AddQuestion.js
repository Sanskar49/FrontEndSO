import React from "react";
import { useState } from "react";
import history from "../../history";
import styled from "styled-components";
import Header1 from "../Headersss/Header1";

const Container = styled.div`
  margin: 20px;
  padding: 30px 20px;
`;

const QuestionTitleInput = styled.input`
  background: none;
  border: 1px solid #777;
  border-radius: 3px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  color: #fff;
  margin-bottom: 25px;
`;

const QuestionBodyTextArea = styled.textarea`
  color: #fff;
  background: none;
  border: 1px solid #777;
  border-radius: 3px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  min-height: 200px;
  color: white;
  margin-bottom: 8px;
  font-family: inherit;
`;

const BlueButton = styled.button`
  background-color: #378ad3;
  color: #fff;
  border: 0;
  border-radius: 5px;
  padding: 12px 10px;
  text-decoration: none;
  cursor: pointer;
`;

const AddQuestion = ({ onAdd }) => {
  const [questionTitle, setQuestiontitle] = useState("");
  const [question, setQuestionbody] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!questionTitle || !question) {
      alert("Please add something to proceed");
      return;
    } else {
      onAdd({ questionTitle, question });
      alert("Your question has been successfully posted");
      history.goBack("/");

      setQuestiontitle("");
      setQuestionbody("");
    }
  };

  return (
    <Container>
      <Header1 style={{ marginBottom: "20px" }}>Ask a Public Question</Header1>
      <form className="main-form" onSubmit={onSubmit}>
        <label>Topic of the Question.</label>
        <QuestionTitleInput
          type="text"
          placeholder="Be specefic with your question title."
          onChange={(e) => setQuestiontitle(e.target.value)}
          value={questionTitle}
        />

        <label>Please enter your question in a proper format.</label>
        <QuestionBodyTextArea
          placeholder="More info about the question please..."
          onChange={(e) => setQuestionbody(e.target.value)}
          value={question}
        />

        <BlueButton>Post Question</BlueButton>
      </form>
    </Container>
  );
};

export default AddQuestion;
