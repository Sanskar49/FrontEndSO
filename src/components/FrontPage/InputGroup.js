import React from "react";
import styled from "styled-components";

const StyledInputGroup = styled.div`
  margin-bottom: 24px;
  text-align: left;
  label {
    display: inline-block;
    margin-bottom: 0.5rem;
    color: #888888;
  }
`;

function InputGroup({ children }) {
  return <StyledInputGroup>{children}</StyledInputGroup>;
}

export default InputGroup;
