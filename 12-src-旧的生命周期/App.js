import React, { Component } from 'react'
import Child from './Child'

export default class App extends Component {
  /* componentWillMount(){
    console.log("componentWillMount---");
  } */
  state = {
    str: 'string'
  }
  changeStr = () => {
    this.setState({
      str: '!!!!'
    })
  }
  componentDidMount() {
    console.log("componentDidMount--");
  }
  render() {
    console.log("render-----");
    return (
      <div>
        <h1>组件的生命周期</h1>
        {this.state.str}
        <button onClick={this.changeStr}>click</button>
        
        <Child state={this.state}/>

        {/* 
            - 初始化阶段
            componentWillMount 组件将要挂载  render之前最后一次修改状态的机会
            render 只能访问 this.props和this.state  不允许修改状态和DOM输出
            componentDidMount 组件已经挂载  成功渲染完成真是DOM之后触发，可以修改DOM
            
            - 运行阶段
            componentWillReceiveProps 父组件修改属性触发
            shouldComponentUpdate 控制render是否渲染 返回false会阻止render调用
            componentWillUpdate 组件将要更新，不能修改属性和状态
            render 只能访问this.props和this.state, 不允许修改状态和DOM输出
            componentDidUpdate 组件更新之后调用，可以修改DOM

            - 销毁期间
            componentWillUnmount 组件将要销毁 在此阶段进行计时器和事件监听的相关操作
        */}
      </div>
    )
  }
  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate-----",newProps, newState);
    return true
  }
  componentDidUpdate(preProps, preState) {
    console.log("componentDidUpdate---",preProps, preState);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount--");
  }
}
