import React, { Component } from 'react'
import { withRouter } from 'react-router'

class Test extends Component {
  go = () =>{
    this.props.history.push("/cat/caiji")
  }
  render() {
    return (
      <div>
        <h1>我是Test组件</h1>
        <button onClick={this.go}>跳转caiji路由</button>
      </div>
    )
  }
}
// 使用一个withRouter包裹组件后，可以使一般组件具有路由组件的所有方法，当然加工的组件时类组件，函数组件可以直接使用hooks
export default withRouter(Test)