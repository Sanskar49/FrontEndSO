import React from "react";
import Header2 from "../Headersss/Header2";
import styled from "styled-components";
import { useState } from "react";

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
  padding: 10px 6px;
  text-decoration: none;
  cursor: pointer;
`;

function PostComment({ onAddAns, onPost }) {
  const [answer, setAnswer] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!answer) {
      alert("Please add something");
      return;
    } else {
      onAddAns({ answer });
      alert("Your answer has been successfully posted");
      onPost();
      setAnswer("");
    }
  };
  return (
    <div>
      <Header2>Your Answer</Header2>
      <form onSubmit={onSubmit}>
        <QuestionBodyTextArea
          placeholder="Please be a little descriptive ..."
          onChange={(e) => setAnswer(e.target.value)}
          value={answer}
        />
        <BlueButton>Post Answer</BlueButton>
      </form>
    </div>
  );
}

export default PostComment;
