import React from 'react';

const Ja = ({ children, as = 'span' }) => {
  const Element = as;

  return <Element lang="ja">{children}</Element>;
};

export default Ja;
