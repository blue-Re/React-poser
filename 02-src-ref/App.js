import React, { Component } from 'react'

export default class App extends Component {
  handleClick = () =>{
    console.log(this.myRef);
  }
  myRef = React.createRef()
  render() {
    return ( 
      <div>
        <h1>我是app组件</h1>
        {/* 关于Ref */}
        {/* <input ref="input"/>
        <button onClick={()=> this.handleClick()}>按钮</button> */}
        <input ref={ this.myRef }/>
        <button onClick={()=> this.handleClick()}>按钮</button>
      </div>
    )
  }
}
