import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

const QuestionRow = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px 15px;
  display: grid;
  grid-template-columns: repeat(3, 55px) 1fr;
  border-top: 1px solid #555;
`;

const QuestionStat = styled.div`
  text-align: center;
  display: inline-block;
  font-size: 1.2rem;
  color: #aaa;
  span {
    font-size: 0.7rem;
    display: block;
    font-weight: 300;
    margin-top: 4px;
  }
`;

const QuestionTitleArea = styled.div`
  padding: 0 50px;
`;

const QuestionLink = styled.a`
  text-decoration: none;
  color: #3ca4ff;
  font-size: 1.3rem;
`;

const When = styled.div`
  display: inline-block;
`;

const AllQuestions = () => {
  const [topic, setTopic] = useState([]);

  useEffect(() => {
    loadData();

    const interval = setInterval(() => {
      loadData();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const loadData = async () => {
    const response = await fetch("http://localhost:8080/question/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const recieveddata = await response.json();

    setTopic(recieveddata);
    console.log(recieveddata);
  };

  return (
    <div>
      {topic.map((questiont) => {
        return (
          <QuestionRow>
            <QuestionStat>
              0<span>votes</span>
            </QuestionStat>
            <QuestionStat>
              1<span>answers</span>
            </QuestionStat>
            <QuestionStat>
              6<span>views</span>
            </QuestionStat>
            <QuestionTitleArea>
              <QuestionLink>
                <div key={questiont.questionId}>{questiont.questionTitle}</div>
              </QuestionLink>
              <When>asked on {questiont.timestamp}</When>
            </QuestionTitleArea>
          </QuestionRow>
        );
      })}
    </div>
  );
};

export default AllQuestions;
