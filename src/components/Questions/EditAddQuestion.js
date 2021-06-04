import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Header1 from "../Headersss/Header1";
import history from "../../history";

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
`;

const GreenButton = styled.button`
  background-color: #90ee90;
  color: #000;
  border: 0;
  border-radius: 5px;
  padding: 12px 10px;
  text-decoration: none;
  cursor: pointer;
`;

function EditAddQuestion(props) {
  const [prequestionTitle, setPrequestionTitle] = useState("");
  const [prequestion, setPrequestion] = useState("");
  const [postquestionTitle, setPostquestionTitle] = useState("");
  const [postquestion, setPostquestion] = useState("");

  useEffect(async () => {
    const response = await fetch(
      "http://localhost:8080/question/" + props.match.params.questionId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const recdata = await response.json();
    setPrequestionTitle(recdata.questionTitle);
    setPrequestion(recdata.question);
  }, []);

  const editUser = async () => {
    const newdata = {
      questionTitle: postquestionTitle,
      question: postquestion,
    };
    const editresponse = await fetch(
      "http://localhost:8080/question/edit/" + props.match.params.questionId,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newdata),
      }
    );
    const receditdata = await editresponse.json();
    alert("Your question has been edited.");
    history.goBack("/question/" + props.match.params.questionId);
  };

  return (
    <Container>
      <Header1 style={{ marginBottom: "20px" }}>Edit your Question</Header1>
      <form className="main-form" onSubmit={editUser}>
        <label>Topic of the Question.</label>
        <QuestionTitleInput
          type="text"
          //   value={prequestionTitle}
          onChange={(e) => {
            setPostquestionTitle(e.target.value);
          }}
        />

        <label>Please enter your question in a proper format.</label>
        <QuestionBodyTextArea
          //   value={prequestion}
          onChange={(e) => {
            setPostquestion(e.target.value);
          }}
        />

        <GreenButton>Save Edits</GreenButton>
      </form>
    </Container>
  );
}

export default EditAddQuestion;
