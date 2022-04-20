import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {
  const [list, setList] = useState([])
  const changeList = (params) => {
    setList(params)
  }
  /* 
    useEffect 这个钩子 我叫他生命周期函数的结合版钩子

      第一个回调函数： ajax、启动定时器、手动更改DOM
        返回的回调函数： 清除定时器、取消订阅...
      第二个参数
        如果是空数组，回调函数只会在第一次render选然后执行，不会监测任何数据
        如果不传第二个参数，默认监测所有状态
        如果传入，数组内存在谁则监测谁
  */
  useEffect(() => {
    axios.get("http://123.56.242.178:3000/foods").then(res => {
      changeList(res.data.data)
      console.log(list);
    })
    // // 开启定时器
    // const timer = setInterval(() =>{
    //   console.log(1111);
    // },1000)
    return () => {
      // clearInterval(timer)
    }
  },[])
  return (
    <div>
      <h1>我是函数式组件</h1>
      <ul>
        {
          list.map(item => {
            return (
              <li key={item._id}>{item.content}</li>
            )
          })
        }
      </ul>
    </div>
  )
}
