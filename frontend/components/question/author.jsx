import React from 'react';
import {Link} from 'react-router';

const Author = (props) => {
  const {author} = props;
  return (
    <div className="author-display">
      <div className="question author-info">
        <Link to={`/users/${author.id}`}>
          {author.display_name}
        </Link>
      </div>
    </div>
  );
};

export default Author;
