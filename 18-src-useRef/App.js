import React, {useState,useCallback, useRef} from 'react'

export default function App() {
  let [count, setCount] = useState(0)
  let countRef = useRef(0)
  const changeCount = useCallback(() => {
    setCount(count+1)
    countRef.current++
  },[count])

  const inputRef = useRef("")
  const getInput = () => {
    console.log(inputRef);
  }
  return (
    <div>
      <h1>useRef---保存状态与指针引用</h1>
        count:{count}----countRef:{countRef.current}
      <button onClick={changeCount}>点我加1</button>
      <input ref={inputRef}/>
      <button onClick={getInput}>获取输入框节点</button>
    </div>
  )
}
