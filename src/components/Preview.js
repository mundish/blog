import React from 'react';
import { Link } from 'gatsby';

const Preview = ({ title, date, excerpt, path }) => {
  return (
    <Link to={path}>
      <section className={'p-5 mb-5'}>
        <header>
          <h3 className={'text-xl'}>{title}</h3>
          <span className={'text-sm'}>{date}</span>
        </header>
        <p className={'pl-2'}>{excerpt}</p>
      </section>
    </Link>
  );
};

export default Preview;
