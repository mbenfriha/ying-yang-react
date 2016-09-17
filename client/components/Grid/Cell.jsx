import React, { PropTypes } from 'react';

const { string, number, bool, element, oneOfType } = PropTypes;

const Cell = ({ text, className, children }, { header }) => {
  if (header === true) {
    return (
      <th className={className}>{text}</th>
    );
  }

  return (
    <td className={className}>{text || children}</td>
  );
};

Cell.propTypes = {
  className: string,
  text: oneOfType([string, number]),
  children: element,
};

Cell.contextTypes = {
  header: bool,
};

export default Cell;
