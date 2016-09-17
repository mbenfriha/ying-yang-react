import React, { PropTypes } from 'react';

const { node } = PropTypes;

const Row = ({ children }) => (
  <tr>{children}</tr>
);

Row.propTypes = {
  children: node,
};

export default Row;
