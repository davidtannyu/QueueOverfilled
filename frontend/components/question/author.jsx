import React from 'react';

const Author = (props) => {
  const {author} = props;
  return (
    <div className="author-display">
      <div className="question author-info">
        {author.display_name}
      </div>
    </div>
  );
};

export default Author;
