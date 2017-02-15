import React from "react";

const QuestionIndexItem = (props) => {
  let { question } = props;
  return (
    <li className="bench-index-item">
      <p>
        Description: {question.title}
        <br />Author: {question.author_id}
      </p>
    </li>
  );
};

export default QuestionIndexItem;
