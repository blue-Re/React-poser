import React, {useState,useCallback} from 'react'

export default function App() {
  let [count, setCount] = useState(0)
  const changeCount = useCallback(() => {
    setCount(count+1)
  },[count])
  return (
    <div>
      <h1>函数式组件</h1>
      {/* useCallback记忆函数 */}
      {/* 防止组件重新渲染，导致方法被重新创建，起到缓存作用，只有第二个参数变化了，才重新声明一次 */}
      {/* 第一个参数为对应函数的回调，第二个参数是一个监视数组，监视谁就把谁传入，如果传空数组，默认不监视，只在第一次生效；如果不传第二个参数，每次都会重新声明
        默认监视全部
      */}
      {count}
      <button onClick={changeCount}>点我加1</button>
    </div>
  )
}
