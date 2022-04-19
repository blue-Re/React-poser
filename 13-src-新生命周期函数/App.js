import React, { Component } from 'react'

export default class App extends Component {
  state ={
    name: '张三'
  }
  change = () =>{
    this.setState({
      name: "aaa"
    })
  }
  static getDerivedStateFromProps(newProps, newState) {
    console.log("getDerivedStateFromProps--",newProps, newState);
    return {
      name: newState.name
    }
  }

  componentDidUpdate(preProps, preState, value) {
    console.log("componentDidUpdate", preProps, preState, value);
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
    return "记录此时的状态返回给componentDidUpdate"
  }
  render() {
    return (
      <div>
        <h1>App组件</h1>
        <p>{this.state.name}</p>
        <button onClick={this.change}>change</button>
      </div>
    )
  }
}
