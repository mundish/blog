import React from 'react';
import { Link } from 'gatsby';

const Preview = ({ title, date, excerpt, path }) => {
  return (
    <Link to={path}>
      <section className={'p-5 mb-5'}>
        <header>
          <h3 className={'text-xl font-bold'}>{title}</h3>
          <span className={'font-serif text-sm'}>{date}</span>
        </header>
        <p className={'font-serif'}>{excerpt}</p>
      </section>
    </Link>
  );
};

export default Preview;
