import React from 'react';
import PropTypes from 'prop-types';

const Furigana = ({ children, readings }) => {
  return (
    <>
      {[...children].map((child, idx) => {
        return (
          <ruby className={'group cursor-help'} key={idx}>
            {child}
            <rp>(</rp>
            <rt className={'invisible group-hover:visible'}>{readings[idx]}</rt>
            <rp>)</rp>
          </ruby>
        );
      })}
    </>
  );
};

Furigana.propTypes = {
  children: PropTypes.string.isRequired,
  readings: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Furigana;
