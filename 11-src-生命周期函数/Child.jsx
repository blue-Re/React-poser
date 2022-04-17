import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    console.log(this.props.children);
    return (
      <div>
        <h2>我是子组件</h2>
        <p>下面是插槽的内容---------</p>
        <ul>{this.props.children}</ul>
      </div>
    )
  }
}
