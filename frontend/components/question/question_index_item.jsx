import React from "react";
import {Link} from 'react-router';

const QuestionIndexItem = (props) => {
  let { question } = props;
  let answerClass = question.answers_count > 0 ? "answered" : "unanswered";
  return (
    <li >
      <div className="question-index-item">
          <div className={answerClass}>
          {question.answers_count}
          <br />answers
          </div>
          <div className="summary">
          <div>
          <Link to={`/questions/${question.id}`}>
            {question.title}
          </Link>
          </div>
          <div className="last-update">Author: {question.author.display_name}</div>
          </div>
        </div>
    </li>
  );
};

export default QuestionIndexItem;
