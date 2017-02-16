import React from "react";
import {Link} from 'react-router';

const QuestionIndexItem = (props) => {
  let { question } = props;
  return (
    <li className="question-index-item">
      <p>
        Answers: {question.answers_count}
        <br />
        Title:
        <Link to={`/questions/${question.id}`}>
          {question.title}
        </Link>
        <br />
        Author: {question.author.display_name}
      </p>
    </li>
  );
};

export default QuestionIndexItem;
