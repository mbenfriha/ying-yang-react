import React, { Component, PropTypes } from 'react';

const { node, bool } = PropTypes;

export default class Header extends Component {
  static propTypes = {
    children: node.isRequired,
  };

  static childContextTypes = {
    header: bool,
  };

  getChildContext() {
    return {
      header: true,
    };
  }

  render() {
    const { children } = this.props;

    return (
      <thead>{children}</thead>
    );
  }
}
