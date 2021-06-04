import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import history from "../../history";

function QuestionById(props) {
  const [qq, setQq] = useState({});

  useEffect(() => {
    bringData();
  }, []);

  const bringData = async () => {
    const res = await fetch(
      "http://localhost:8080/question/" + props.match.params.questionId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const rdata = await res.json();
    setQq(rdata);
  };

  const deleteQuestion = async () => {
    await fetch(
      "http://localhost:8080/question/" + props.match.params.questionId,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    alert("This question has been deleted");

    history.goBack("/");
  };

  return (
    <div>
      <h1>{qq.questionTitle}</h1>
      <h3>{qq.question} </h3>
      <button
        onClick={() => {
          history.push("/question/edit/" + qq.questionId);
        }}
      >
        Edit
      </button>
      <br />
      <button onClick={deleteQuestion}>Delete</button>
    </div>
  );
}

export default QuestionById;
