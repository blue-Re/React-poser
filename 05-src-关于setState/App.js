import React, { Component } from 'react'

export default class App extends Component {
  /* setState 第二个参数是一个回调函数 当状态和真实DOM更新完后就会被调用 */
  state = {
    count: 0
  }
  // 同步逻辑 setState异步更新状态和真实DOM
  handleClick = () =>{
    this.setState({count: this.state.count+1}, ()=>{
      console.log(this.state.count);
    })
    this.setState({count: this.state.count+1}, ()=>{
      console.log(this.state.count);
    })
    this.setState({count: this.state.count+1}, ()=>{
      console.log(this.state.count);
    })
  }
  // 异步逻辑 setState同步更新状态和真实DOM
  asyncHandleClick = () => {
    setTimeout(() => {
      this.setState({count: this.state.count+1},() => {})
      console.log(this.state.count);

      this.setState({count: this.state.count+1})
      console.log(this.state.count);

      this.setState({count: this.state.count+1})
      console.log(this.state.count);
    }, 10);
  }
  render() {
    const { count } = this.state
    return (
      <div>
        当前count为：{
          count
        }
        <button onClick={() => this.handleClick()}>+</button>
        <button onClick={() => this.asyncHandleClick()}>异步跟新</button>
      </div>
    )
  }
}
