import React from "react";
import {Link} from 'react-router';
import {parseText} from '../../util/text_util';

const QuestionIndexItem = (props) => {
  let { question, loaded } = props;
  let body = "";
  if (loaded) {
    body = (
      <div>
        <p dangerouslySetInnerHTML={{__html: parseText(question.body.split(".")[0] + "...")}}>
        </p>
      </div>
    );
  }
  let lastUpdate;
  if (!question.last_answer) {
    lastUpdate = (
      <div className="last-update">
        <Link to={`/questions/${question.id}`} className="last-update-link">
          asked &nbsp;
          { Math.floor((new Date() - new Date(question.created_at * 1000))/ (1000 * 60))}
          &nbsp;min ago &nbsp;
        </Link>
         <Link to={`/users/${question.author.id}`}>
           {question.author.display_name}
         </Link>
      </div>
    );
  } else {
    lastUpdate = (
      <div className="last-update">
        <Link to={`/questions/${question.id}`} className="last-update-link">
          answered &nbsp;
          { Math.floor((new Date() - new Date(question.last_answer.created_at * 1000)) / (1000 * 60))}
          &nbsp; min ago &nbsp;
        </Link>
         <Link to={`/users/${question.last_answer.id}`}>
           {question.last_answer.display_name}
         </Link>
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
          {body}
          {lastUpdate}
          </div>
        </div>
    </li>
  );
};

export default QuestionIndexItem;
