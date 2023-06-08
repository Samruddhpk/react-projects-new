import React from "react";
import SingleQuestion from "./SingleQuestion";
import "./questions.scss";

const Questions = ({ id, questions, activeId, toggleQuestion }) => {
  return (
    <div className="questions-container">
      <h3>Questions</h3>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </div>
  );
};

export default Questions;
