import React, { Component } from 'react'
import Child from './Child'
import FunctionComponent from './FunctionComponent';
export default class App extends Component {
  state = {
    games: [
      {id:0, name: 'CF'},
      {id:1, name: 'dnf'},
      {id:2, name: 'cs'},
      {id:3, name: 'qq'},
    ],
    flag: false
  }
  render() {
    console.log(this, 'App------');
    return (
      <div>
        <h1>我是App组件</h1>
        <hr/>
        <Child games={this.state.games}/>
        <hr/>
        <FunctionComponent {...this.state}/>
      </div>
    )
  }
}
