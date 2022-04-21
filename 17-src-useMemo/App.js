import React, { useMemo, useState } from 'react'

export default function App() {
  const [firstName, setFirstName] = useState("王")
  const [lastName, setLastName] = useState("亮")
  const changeFirstName = () => {
    setFirstName("孙")
  }
  const changeLastName = () => {
    setLastName("海")
  }
  const fullName = useMemo(() => {
    return (firstName + "-" + lastName)
  }, [firstName, lastName])
  return (
    <div>
      <h1>useMemo---相当于计算属性</h1>
      {/* 接收第一个回调函数的返回结果，相当于Vue的计算属性 */}
      {/* 第二个参数传一个空数组默认载第一次生效，之后不在监视依赖的值，不传一直监视，监视谁就传入谁 */}
      <div>firstName: {firstName}</div>
      <div>lastName: {lastName}</div>
      <div>fullName: {fullName}</div>
      <button onClick={changeFirstName}>改变firstName</button>
      <button onClick={changeLastName}>改变lastName</button>
    </div>
  )
}
