import React from "react";
import pagenotfound from "../../components/pagenotfound.jpg";
import styled from "styled-components";

const Image = styled.img`
  display: block;
  margin-left: 200px;

  padding: 5px;
  margin-top: 40px;
  height: 100%;
`;

const TextMessage = styled.h2`
  margin-left: 850px;
  margin-top: -300px;
  font-style: italic;
  font-weight: bold;
  font-size: 25px;
`;

function ErrorPage() {
  return (
    <div>
      <Image src={pagenotfound} />{" "}
      <TextMessage>
        Sorry.. <br /> The page you are looking for could not be found.
      </TextMessage>
    </div>
  );
}

export default ErrorPage;
