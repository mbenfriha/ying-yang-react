import React, { PropTypes } from 'react';

const { node } = PropTypes;

const Body = ({ children }) => (
  <tbody>{children}</tbody>
);

Body.propTypes = {
  children: node,
};

export default Body;
