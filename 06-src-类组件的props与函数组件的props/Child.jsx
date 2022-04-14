import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Child extends Component {
  static propTypes = {
    games: PropTypes.array,
    flag: PropTypes.bool
  }
  static defaultProps = {
    flag: false
  }
  render() {
    const { games } = this.props;
    console.log(this, 'Child---');
    return (
      <div>
        <h1>我是Child组件</h1>
        <ol>
          {
            games.map(item => {
              return (
                <li key={item.id}>{item.name}</li>
              )
            })
          }
        </ol>
      </div>
    )
  }
}
