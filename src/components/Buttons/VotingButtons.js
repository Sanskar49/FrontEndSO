import React from "react";
import styled from "styled-components";

const Arrowup = styled.div`
  width: 0;
  height: 0;
  border-left: ${(props) => (props.size === "sm" ? "10px" : "20px")} solid
    transparent;
  border-right: ${(props) => (props.size === "sm" ? "10px" : "20px")} solid
    transparent;
  border-bottom: ${(props) => (props.size === "sm" ? "10px" : "20px")} solid
    ${(props) => (props.vote > 0 ? "#f48024" : "#888")};
  padding: 0;
`;
const ArrowDown = styled.div`
  width: 0;
  height: 0;
  border-left: ${(props) => (props.size === "sm" ? "10px" : "20px")} solid
    transparent;
  border-right: ${(props) => (props.size === "sm" ? "10px" : "20px")} solid
    transparent;
  border-top: ${(props) => (props.size === "sm" ? "10px" : "20px")} solid
    ${(props) => (props.vote < 0 ? "	#ff0000" : "#888")};
  padding: 0;
`;

const ArrowButton = styled.button`
  border: 0;
  background: none;
  font-size: 2 rem;
  color: #bbb;
  cursor: pointer;
  text-align: center;
  width: 50px;
  padding: 0;
`;

const TotalVotes = styled.div`
  text-align: center;
  width: ${(props) => (props.size === "sm" ? "10px" : "20px")};
  padding: ${(props) => (props.size === "sm" ? "2px 0 3px" : "7px 0 7px")};
  font-size: ${(props) => (props.size === "sm" ? "0.8rem" : "1.4rem")};
  line-height: ${(props) => (props.size === "sm" ? ".6rem" : "1.4rem")};
  color: #888;
`;

function VotingButtons(props) {
  return (
    <div {...props}>
      <ArrowButton onClick={() => props.onArrowUpClick()}>
        <Arrowup vote={props.vote} size={props.size} />
      </ArrowButton>
      <TotalVotes>{props.vote}</TotalVotes>
      <ArrowButton onClick={() => props.onArrowDownClick()}>
        <ArrowDown vote={props.vote} size={props.size} />
      </ArrowButton>
    </div>
  );
}

export default VotingButtons;
