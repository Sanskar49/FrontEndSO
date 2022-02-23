import React from "react";
import "./Body.css";
import styled from "styled-components";
import history from "../../history";

const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: min-content;
  padding: 30px 20px;
`;

function QuestionPage() {
  return (
    <main>
      <HeaderRow />
      <section>
        <div className="rt-container">
          <div className="col-rt-12">
            <div className="outer">
              <div className="flexbox">
                <div className="item"></div>
                <div className="item">
                  <button
                    className="loginbtn"
                    onClick={() => history.push("/login")}
                  >
                    Login
                  </button>
                  <div className="content">
                    <div className="word w1">Welcome</div>
                    <div className="word w2">to</div>
                    <div className="word w3">Question</div>
                    <div className="word w4">&</div>
                    <div className="word w5">Answer</div>
                  </div>
                </div>
                <div className="item">
                  <button
                    className="signupbtn"
                    onClick={() => history.push("/signup")}
                  >
                    Sign up
                  </button>
                  <div className="content">
                    <div className="word w1">Welcome</div>
                    <div className="word w2">to</div>
                    <div className="word w3">Question</div>
                    <div className="word w4">&</div>
                    <div className="word w5">Answer</div>
                  </div>
                </div>
              </div>
              <div className="container">
                <p>
                  You can <span id="spin"></span>!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default QuestionPage;
