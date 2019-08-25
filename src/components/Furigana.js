import React from 'react';

const Furigana = ({ children, reading }) => {
  return (
    <ruby className={'group cursor-help'}>
      {children}
      <rp>(</rp>
      <rt className={'invisible group-hover:visible'}>{reading}</rt>
      <rp>)</rp>
    </ruby>
  );
};

export default Furigana;
