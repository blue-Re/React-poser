import React, { Component } from 'react'

export default class App extends Component {
  /* 状态 */
  state = {
    flag: false,
    list: [
      { id: 1, age: 11, info: '吃饭', flag: true },
      { id: 2, age: 12, info: '睡觉', flag: true },
      { id: 3, age: 13, info: '打豆豆', flag: true },
    ]
  }
  input = React.createRef();
  handleClick = () => {
    const input = this.input.current
    const todo = {
      id:  Math.random() * 10,
      age: Math.random() * 10,
      info:input.value,
      flag: true
    }
    this.setState({
      flag: !this.state.flag,
      list: [...this.state.list,todo]
    })
    input.value = ''
  }
  handleDelete = (id) =>{
    const newList = this.state.list.filter(item => item.id !== id)
    this.setState({list: newList})
  }
  render() {
    return (
      <div>
        <h1>我是app组件</h1>
        <p>{this.state.flag ? 'LOL' : 'CF'}</p>
        <input ref={this.input}/>
        <button onClick={() => this.handleClick()}>添加todo</button>
        <ul>
          {
            this.state.list.map(item => (
              <li key={item.id}>
                {item.id}-{item.info}
                <button onClick={() => this.handleDelete(item.id)}>删除</button>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
