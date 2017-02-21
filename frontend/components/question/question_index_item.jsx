import React from "react";
import {Link} from 'react-router';

const QuestionIndexItem = (props) => {
  let { question } = props;

  let lastUpdate;
  if (!question.last_answer) {
    lastUpdate = (
      <div className="last-update">
        asked &nbsp;
        { (new Date() - new Date(question.created_at * 1000))/ (1000 * 60) }
         &nbsp;minutes ago by {question.author.display_name}
      </div>
    );
  } else {
    lastUpdate = (
      <div className="last-update">
        <p>
          answered &nbsp;
          { (new Date() - new Date(question.last_answer.created_at * 1000)) / (1000 * 60)}
           &nbsp; minutes ago by {question.last_answer.display_name}
        </p>
      </div>
    );
  }
  let answerClass = question.answers_count > 0 ? "answered" : "unanswered";
  return (
    <li >
      <div className="question-index-item">
          <div className={`answer-count ${answerClass}`}>
          {question.answers_count}
          <br />answers
          </div>
          <div className="summary">
          <div>
          <Link to={`/questions/${question.id}`}>
            {question.title}
          </Link>
          </div>
          {lastUpdate}
          </div>
        </div>
    </li>
  );
};

export default QuestionIndexItem;
