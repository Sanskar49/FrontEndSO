import React from "react";
import { useState } from "react";

const AddQuestion = ({ onAdd }) => {
  const [questionTitle, setQuestiontitle] = useState("");
  const [question, setQuestionbody] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(questionTitle);
    console.log(question);

    if (!questionTitle) {
      alert("Please add a question title to proceed");
      return;
    }

    onAdd({ questionTitle, question });

    setQuestiontitle("");
    setQuestionbody("");
    console.log("Form submitted");
  };

  return (
    <form className="main-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Topic of the Question</label>
        <input
          type="text"
          placeholder="Your Question"
          onChange={(e) => setQuestiontitle(e.target.value)}
          value={questionTitle}
        />
      </div>
      <div className="form-control">
        <label>Please enter your question in a proper format</label>
        <input
          type="text"
          onChange={(e) => setQuestionbody(e.target.value)}
          value={question}
        />
      </div>
      <input type="submit" className="btn btn-block" value="Add" />
    </form>
  );
};

export default AddQuestion;
