import React, { PropTypes } from 'react';

const { node } = PropTypes;

const Row = ({ children }) => (
  <tr>{children}</tr>
);

Row.propTypes = {
  children: node.isRequired,
};

export default Row;
