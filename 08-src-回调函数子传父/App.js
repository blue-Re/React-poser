import React, { Component } from 'react'
import Child from './Child'
export default class App extends Component {
  state = {
    myChildData: []
  }
  hooks = (params) =>{
    console.log('子组件传递的数据为', params);
    this.setState({
      myChildData: params
    })
  }
  render() {
    return (
      <div>
        <h1>我是父组件</h1>
        <p>子组件传递的数据为：</p>
        <ul>
          {
            this.state.myChildData.map(item => {
              return (
                <li key={item.id}>{item.name}</li>
              )
            })
          }
        </ul>
        <Child hooks={this.hooks}/>
      </div>
    )
  }
}
/* 
  父子组件通信：
    父组件直接通过props向子组件传递数据
    子传父==> 需要父组件传递给子组件一个回调函数，子组件通过this.props.method() 调用该方法，将数据以参数的形式传递过去
      父组件拿到参数后通过setState去跟新数据
*/