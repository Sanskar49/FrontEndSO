import React from "react";
import styled from "styled-components";
import AllQuestions from "../Questions/AllQuestions";
import history from "../../history";
import Header1 from "../Headersss/Header1";

const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: min-content;
  padding: 30px 20px;
`;

const BlueButton = styled.button`
  background-color: #378ad3;
  margin: -120px 0px 0px 1350px;
  color: #fff;
  border: 0;
  border-radius: 3px;
  padding: 10px 10px;
  cursor: pointer;

  @media screen and (max-width: 1203px) {
    margin: -120px 0px 0px 600px;
  }
  @media screen and (max-width: 500px) {
    margin: -120px 0px 0px 0px;
  }

  &:hover {
    background-color: #23395d;
  }
`;

function QuestionPage() {
  return (
    <main>
      <HeaderRow>
        <Header1>Top Questions</Header1>
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
