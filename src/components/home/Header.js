import React from "react";
import styled from "styled-components";
import { faStackOverflow } from "@fortawesome/fontawesome-free-brands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import history from "../../history";

const StyleHeader = styled.header`
  background-color: #393939;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-column-gap: 150px;
`;

const LogoLink = styled.a`
  color: #fff;
  text-decoration: none;
  display: inline-block;
  height: 50px;
  line-height: 40px;
  svg {
    margin-top: 20px;
    display: inline-block;
    margin-left: -10px;
  }

  span {
    display: inline-block;
    padding: 1px;
    font-size: 17px;
    padding-top: 10px;
    font-weight: 300;
  }
  padding: 10px 15px;
  b {
    font-weight: normal;
  }
`;

const SearchInput = styled.input`
  display: inline-block;
  box-sizing: border-box;
  width: 80%;
  border: 1px solid #777;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.1);
  padding: 9px 6px;
  margin-top: 28px;
`;

const ProfileLink = styled.a`
  color: #fff;
  text-decoration: none;
  line-height: 50px;
`;

function Header() {
  return (
    <StyleHeader>
      <LogoLink href="" className="logo">
        <FontAwesomeIcon icon={faStackOverflow} size="2x" />
        <span onClick={() => history.push("/")}>
          Question <b>&</b> Answer{" "}
        </span>
      </LogoLink>
      <form action="" className="search">
        <SearchInput type="text" placeholder="Search..." />
      </form>
      <ProfileLink href="" className="profile">
        Nikita
      </ProfileLink>
    </StyleHeader>
  );
}

export default Header;
