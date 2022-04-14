import React, { Component } from 'react'

export default class App extends Component {
  /* 状态 */
  state = {
    flag: false,
    list: [
      { id: 1, age: 11 },
      { id: 2, age: 12 },
      { id: 3, age: 13 },
    ]
  }
  handleClick = () => {
    this.setState({ flag: !this.state.flag })
  }
  render() {
    return (
      <div>
        <h1>我是app组件</h1>
        <p>{this.state.flag ? 'LOL' : 'CF'}</p>
        <button onClick={() => this.handleClick()}>按钮</button>
        <ul>
          {
            this.state.list.map(item => (
              <li key={item.id}>
                {item.id}-{item.age}
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
