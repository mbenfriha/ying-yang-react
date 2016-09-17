import React, { PropTypes } from 'react';

const { string, bool, element } = PropTypes;

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
  key: string,
  className: string,
  text: string,
  children: element,
};

Cell.contextTypes = {
  header: bool,
};

export default Cell;
