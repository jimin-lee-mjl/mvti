import React from 'react';

type QuestionHeaderProps = {
  question: any;
};

const QuestionHeader = ({ question }: QuestionHeaderProps) => {
  const { number, sentence } = question;
  return (
    <div>
      <h2>Q{number}</h2>
      <div style={{ fontSize: '1.5rem', fontWeight: 'lighter' }}>{sentence}</div>
    </div>
  );
};

QuestionHeader.defaultProps = {
  question: {
    number: 1,
    sentence: 'This is example Question',
  },
};

export default QuestionHeader;
