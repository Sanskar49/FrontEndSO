import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import history from "../../history";
import Header1 from "../Headersss/Header1";
import VotingButtons from "../Buttons/VotingButtons";
import PostComment from "./PostComment";

const EditButton = styled.button`
  background-color: #378ad3;

  color: #fff;
  cursor: pointer;
`;
const DeleteButton = styled.button`
  background-color: #378ad3;
  color: #fff;
  cursor: pointer;
  margin-bottom: 30px;
`;
const Container = styled.div`
  padding: 30px 20px;
`;
const QuestionTitle = styled(Header1)`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 10px;
  margin-bottom: 30px;
`;
const QuestionBody = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  column-gap: 20px;
`;
const CommentsOuter = styled.div`
  margin-left: 60px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 80px;
`;

const CommentBox = styled.div`
  display: grid;
  grid-template-columns: 40px 2fr;
  column-gap: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 1rem;
`;
const When = styled.span`
  display: inline-block;
  color: #aaa;
  font-size: 0.8rem;
  padding: 8px 0;
`;
const HorizontalLine = styled.hr`
  margin: 20px 0;
  border-color: rgba(255, 255, 255, 0.1);
`;

function QuestionById(props) {
  const [qq, setQq] = useState({});
  const [vote, setVote] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    bringData();
    showComment();
  }, []);

  const showComment = async () => {
    const answerresponse = await fetch(
      "http://localhost:8080/question/answers/" + props.match.params.questionId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const recievedanswer = await answerresponse.json();
    setAnswers(recievedanswer);
  };

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

  const addComent = async (answers) => {
    console.log(answers);
    const res = await fetch(
      "http://localhost:8080/question/answer/create/" +
        props.match.params.questionId,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(answers),
      }
    );
    const data = await res.json();
    console.log(data.answer);
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
  function handleOnArrowUpClick() {
    setVote(vote + 1);
  }
  function handleOnArrowDownClick() {
    setVote(vote - 1);
  }

  return (
    <Container>
      <QuestionTitle>{qq.questionTitle}</QuestionTitle>
      <QuestionBody>
        <VotingButtons
          style={{ marginTop: "10px" }}
          vote={vote}
          onArrowUpClick={() => {
            handleOnArrowUpClick();
          }}
          onArrowDownClick={() => {
            handleOnArrowDownClick();
          }}
        />
        <h3>{qq.question} </h3>
      </QuestionBody>
      <EditButton
        onClick={() => {
          history.push("/question/edit/" + qq.questionId);
        }}
      >
        Edit
      </EditButton>
      <br />

      <DeleteButton onClick={deleteQuestion}> Delete </DeleteButton>
      {answers && answers.length > 0 && (
        <CommentsOuter>
          {answers.map((answerComments) => (
            <CommentBox>
              <VotingButtons
                size={"sm"}
                vote={vote}
                onArrowUpClick={() => {
                  handleOnArrowUpClick();
                }}
                onArrowDownClick={() => {
                  handleOnArrowDownClick();
                }}
              />
              <p>{answerComments.answer}</p>
              <When>{answerComments.timestamp}</When>
            </CommentBox>
          ))}
        </CommentsOuter>
      )}
      <HorizontalLine />
      <PostComment onAddAns={addComent} onPost={showComment} />
    </Container>
  );
}

export default QuestionById;
