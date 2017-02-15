import React from "react";

const QuestionIndexItem = (props) => {
  let { question } = props;
  return (
    <li className="question-index-item">
      <p>
        Answers: {question.answers_count}
        <br />Title: {question.title}
        <br />Author: {question.author_id}
      </p>
    </li>
  );
};

export default QuestionIndexItem;
