import React, { PropTypes } from 'react';

const { element } = PropTypes;

const Row = ({ children }) => (
  <tr>{children}</tr>
);

Row.propTypes = {
  children: element,
};

export default Row;
