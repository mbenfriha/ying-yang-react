import React, { PropTypes } from 'react';

const { string, number, bool, node, oneOfType } = PropTypes;

const Cell = ({ text, header, className, children }) => {
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
  text: oneOfType([string, number]),
  header: bool,
  className: string,
  children: node,
};

export default Cell;
