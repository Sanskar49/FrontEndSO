import React from "react";

const AllQuestions = () => {
  const apiGet = () => {
    fetch("http://localhost:8080/question/all")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      <button onClick={apiGet}>Fetch API</button>
    </div>
  );
};

export default AllQuestions;
