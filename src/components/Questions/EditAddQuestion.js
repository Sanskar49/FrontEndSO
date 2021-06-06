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
  const [postquestionTitle, setPostquestionTitle] = useState("");
  const [postquestion, setPostquestion] = useState("");

  const editUser = async () => {
    const newdata = {
      questionTitle: postquestionTitle,
      question: postquestion,
    };
    if (!postquestionTitle || !postquestion) {
      alert("You have not edited anything");
      return;
    }
    await fetch(
      "http://localhost:8080/question/edit/" + props.match.params.questionId,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newdata),
      }
    );
    alert("Your question has been edited.");
    history.push("/question/" + props.match.params.questionId);
  };

  return (
    <Container>
      <Header1 style={{ marginBottom: "20px" }}>Edit your Question</Header1>
      <form className="main-form" onSubmit={editUser}>
        <label>Topic of the Question.</label>
        <QuestionTitleInput
          type="text"
          onChange={(e) => {
            setPostquestionTitle(e.target.value);
          }}
          // value={prequestionTitle}
        />

        <label>Please enter your question in a proper format.</label>
        <QuestionBodyTextArea
          onChange={(e) => {
            setPostquestion(e.target.value);
          }}
          // value={prequestion}
        />

        <GreenButton>Save Edits</GreenButton>
      </form>
    </Container>
  );
}

export default EditAddQuestion;
