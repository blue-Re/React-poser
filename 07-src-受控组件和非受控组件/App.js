import React, { Component } from 'react'
export default class App extends Component {
  state = {
    username: '',
  }
  handleClick = (params)=>{
    console.log(params);
  }
  render() {
    const { username } = this.state;
    return (
      <div>
        {/* 受控组件指的是将input的输入值与state进行同步 */}
        {/* 原则是通过onChange事件来接听输入框值的变化，然后去通过setState去更新状态的值 */}
        {/* 非受控组件指的是input输入的元素取值时借助ref，不与state进行绑定 */}
        <h1>我是App组件</h1>
        <input value={ username } onChange={(event)=>{
          console.log(event.target.value);
          this.setState({username:event.target.value})
          }}/>
        <button onClick={()=>this.handleClick(username)}>点击</button>
      </div>
    )
  }
}
