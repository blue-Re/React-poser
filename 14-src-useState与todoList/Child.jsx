import React, { Component } from 'react'

export default class Child extends Component {
  /* 这个钩子可以拿到父组件的最新状态数据 */
  componentWillReceiveProps(props) {
    console.log("componentWillReceiveProps--", props);
  }
  render() {
    return (
      <div>
        <h2>我是子组件</h2>
      </div>
    )
  }
}
