import React, { Component } from 'react'
import Child from './Child'

export default class App extends Component {
  state = {
    games: [
      {id:1, name: 'LOL'},
      {id:2, name: 'CF'},
      {id:3, name: 'DNF'},
    ]
  }
  render() {
    const {games} = this.state;
    return (
      <div>
        <h1>我是App组件</h1>
        <Child>
          {games.map(item => (<li key={item.id}>{item.name}</li>))}
        </Child>
      </div>
    )
  }
}
