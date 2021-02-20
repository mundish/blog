import React from 'react';

const BaseComponent = ({ children, level }) => {
  const classNames = {
    '1': 'text-2xl my-5',
    '2': 'text-xl my-4',
    '3': 'text-lg my-4',
    '4': 'text-base my-4',
    '5': 'text-sm my-3',
    '6': 'text-xs my-3',
  };
  const Element = `h${level}`;
  return <Element className={classNames[level]}>{children}</Element>;
};

const ComposedHeading = level => ({ children }) => (
  <BaseComponent level={level}>{children}</BaseComponent>
);

const Heading = {
  H1: ComposedHeading('1'),
  H2: ComposedHeading('2'),
  H3: ComposedHeading('3'),
  H4: ComposedHeading('4'),
  H5: ComposedHeading('5'),
  H6: ComposedHeading('6'),
};

export default Heading;
