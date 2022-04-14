import React, { Component } from 'react'

export default class HelloWorld extends Component {
  handleClick1() {
    /* this会出问题 通过bind改变this*/
    console.log('111');
  }
  handleClick2 = () => {
    console.log('22');
  }
  handleClick3 = () => {
    console.log('333');
  }
  handleClick4 = (params) => {
    return () =>{
      console.log(params);
    }
  }
  render() {
    const str = '我是HelloWorld组件---类组件'
    return (
      <div>
        <h2 style={{ color: 'red' }}>{str} {10 + 20}</h2>
        <input />
        <button onClick={this.handleClick1}>按钮1</button>
        <button onClick={this.handleClick2}>按钮2</button>
        {/* 推荐使用 便于传参 */}
        <button onClick={() => this.handleClick3() }>按钮3</button>
        <button onClick={this.handleClick4(5)}>按钮4</button>
      </div>
    )
  }
}
