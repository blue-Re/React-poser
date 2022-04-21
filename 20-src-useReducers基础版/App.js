import React, { useReducer } from 'react'

const reducer = (preState, action) => {
  /* 此处的preState为老状态 action为dispatch过来的状态对象 */
  console.log(preState, action, "reducer----------------");
  const newState = { ...preState }
  switch (action.type) {
    case 'add':
      newState.count++
      return newState

    case 'des':
      newState.count--
      return newState
    default:
      return preState
  }
}
const initState = {
  count: 0
}

export default function App() {
  /* state为外部状态 dispatch为改变状态的唯一方法 reducer为回调函数 initState为状态对象*/
  const [state, dispatch] = useReducer(reducer, initState)
  const increment = () => {
    dispatch({
      type: 'add'
    })
  }
  const decrement = () => {
    dispatch({
      type: 'des'
    })
  }
  return (
    <div>
      <h1>useReducer</h1>
      <p>外部状态--------{state.count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

    </div>
  )
}
