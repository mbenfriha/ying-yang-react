import React, { PropTypes } from 'react';

const { element } = PropTypes;

const Body = ({ children }) => (
  <tbody>{children}</tbody>
);

Body.propTypes = {
  children: element,
};

export default Body;
