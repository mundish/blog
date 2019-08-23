import React from 'react';
import { Link } from 'gatsby';

const StartLink = () => {
  return (
    <div className={'text-center border-t'}>
      <Link className={'underline hover:no-underline'} to="/">
        Back to start
      </Link>
    </div>
  );
};

export default StartLink;
