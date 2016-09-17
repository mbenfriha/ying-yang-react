import React, { PropTypes } from 'react';

const { element } = PropTypes;

const Footer = ({ children }) => (
  <tfoot>{children}</tfoot>
);

Footer.propTypes = {
  children: element,
};

export default Footer;
