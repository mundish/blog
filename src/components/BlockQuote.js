import React from 'react';

const BlockQuote = ({ children }) => {
  return (
    <blockquote className={'my-4 text-lg text-center'}>{children}</blockquote>
  );
};

export default BlockQuote;
