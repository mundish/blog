import React from 'react';
import PropTypes from 'prop-types';

const Emoji = ({ emoji, label }) => {
  return (
    <span role={'img'} aria-label={label}>
      {emoji}
    </span>
  );
};

Emoji.propTypes = {
  emoji: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Emoji;
