import React, { Component, PropTypes } from 'react';

const { node } = PropTypes;

const Header = ({ children }) => (
  <thead>{children}</thead>
);

Header.propTypes = {
  children: node.isRequired,
};

export default Header;
