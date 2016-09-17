import React, { PropTypes } from 'react';

const { node } = PropTypes;

const Footer = ({ children }) => (
  <tfoot>{children}</tfoot>
);

Footer.propTypes = {
  children: node.isRequired,
};

export default Footer;
