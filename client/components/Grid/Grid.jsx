import React, { Component, PropTypes } from 'react';
import Header from './Header';
import Body from './Body';
import Row from './Row';
import Cell from './Cell';
import './style.css';

const { string, number, shape, arrayOf, objectOf, oneOfType, node } = PropTypes;

function buildRow(fields, row, rowIndex) {
  return (
    <Row key={`row${rowIndex}`}>
      {
        fields.map(({ mapping, className }, cellIndex) => <Cell
          text={row[mapping]}
          className={className}
          key={`cell${cellIndex}`}
        />)
      }
    </Row>
  );
}

function buildBody(fields, data) {
  return (
    <Body>
    { data.map((row, index) => buildRow(fields, row, index)) }
    </Body>
  );
}

export default class Grid extends Component {
  static propTypes = {
    fields: arrayOf(shape({
      name: string,
      mapping: string,
      className: string,
    })).isRequired,
    data: arrayOf(objectOf(oneOfType([number, string]))),
    children: node,
  };

  render() {
    const { fields, data, children } = this.props;

    return (
      <table>
        <Header>
          <Row>
            {
              fields.map(({ name, className }, index) => (
                <Cell text={name} key={`th${index}`} className={className} />
              ))
            }
          </Row>
        </Header>
        { buildBody(fields, data) }
        { children }
      </table>
    );
  }
}
