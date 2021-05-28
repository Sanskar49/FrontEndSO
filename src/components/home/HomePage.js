import React from "react";
import styled from "styled-components";
import AllQuestions from "../Questions/AllQuestions";
import history from "../../history";
const StyleHeader = styled.h1`
  font-size: 1.8rem;
`;

const BlueButton = styled.button`
  background-color: #378ad3;
  margin: -50px 0px 0px 1350px;
  color: #fff;
  border: 0;
  border-radius: 5px;
  padding: 8px 5px;
  cursor: pointer;
`;

const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: min-content;
  padding: 30px 20px;
`;
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

const Tag = styled.span`
  display: inline-block;
  margin-right: 3px;
  background-color: #3e4a52;
  color: #9cc3db;
`;

const QuestionLink = styled.a`
  text-decoration: none;
  color: #3ca4ff;
  font-size: 1.3rem;
`;

function QuestionPage() {
  return (
    <main>
      <HeaderRow>
        <StyleHeader>Top Questions</StyleHeader>
        <form>
          <BlueButton onClick={() => history.push("/questions/ask")}>
            Ask&nbsp;Questions
          </BlueButton>
        </form>
      </HeaderRow>
      <AllQuestions />
    </main>
  );
}

export default QuestionPage;
