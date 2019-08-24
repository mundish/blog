import React from 'react';
import PropTypes from 'prop-types';
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

Preview.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Preview;
