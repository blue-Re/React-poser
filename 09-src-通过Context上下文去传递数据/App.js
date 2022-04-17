import React, { Component } from 'react'
// import Child from './Child';

const Context = React.createContext();

export default class App extends Component {
  state = {
    games: [
      { id: 1, name: 'LOL' },
      { id: 2, name: 'CF' },
      { id: 3, name: 'DNF' },
    ],
    str: '我是测试数据'
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        <div>
          <h1>App组件</h1>
          <p>-------</p>
          <Child />
        </div>
      </Context.Provider>
    )
  }
}

class Child extends Component {
  render() {
    return (
      <Context.Consumer>
        {
          (value) => {
            console.log(value);
            return (
              <div>
                <h2>我是子组件</h2>
                <p>下面是父组件的数据</p>
                {
                  value.games.map(item => (<li key={item.id}>{item.name}</li>))
                }
                {value.str}
              </div>
            )
          }
        }
      </Context.Consumer>
    )
  }
}