import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";

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

  return (
    <div>
      <h1>{qq.questionTitle}</h1>
      <h3>{qq.question} </h3>
    </div>
  );
}

export default QuestionById;
