import React from 'react';
import PropTypes from 'prop-types';

const Furigana = ({ characters }) => {
  return (
    <>
      {characters.map((char, idx) => {
        return (
          <ruby className={'group cursor-help'} key={`${char.kanji}${idx}`}>
            {char.kanji}
            <rp>(</rp>
            <rt className={'invisible group-hover:visible'}>{char.kana}</rt>
            <rp>)</rp>
          </ruby>
        );
      })}
    </>
  );
};

Furigana.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      kanji: PropTypes.string.isRequired,
      kana: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Furigana;
