import React from 'react';

const A = ({ href, children }) => {
  const isExternal = href.includes('http');
  const attributes = {
    className: 'underline hover:no-underline',
    href,
    target: isExternal ? '_blank' : '_self',
    rel: isExternal ? 'noreferrer noopener' : null,
  };
  return <a {...attributes}>{children}</a>;
};

export default A;
