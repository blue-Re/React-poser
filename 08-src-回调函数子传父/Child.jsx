import React, { Component } from 'react'

export default class Child extends Component {
  state = {
    games: [
      {id:1,name:'LOL'},
      {id:2,name:'cf'},
      {id:3,name:'dnf'},
    ]
  }
  handleClick = () => {
    // 执行父组件的方法
    this.props.hooks(this.state.games)
  }
  render() {
    return (
      <div>
        <h2>我是子组件</h2>
        <button onClick={this.handleClick}>传递数据</button>
      </div>
    )
  }
}
