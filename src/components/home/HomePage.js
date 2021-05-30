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
  margin: -50px 0px 0px 1350px;
  color: #fff;
  border: 0;
  border-radius: 5px;
  padding: 8px 5px;
  cursor: pointer;
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
