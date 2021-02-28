import React from 'react';

const BlockQuote = ({ children, lang = 'en' }) => {
  return (
    <blockquote lang={lang} className={'my-4 text-lg text-center'}>
      {children}
    </blockquote>
  );
};

export default BlockQuote;
