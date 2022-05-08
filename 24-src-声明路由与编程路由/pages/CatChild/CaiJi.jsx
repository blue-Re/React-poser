import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'

export default function CaiJi(props) {
  const history = useHistory()
  const goToPath = () => {
    props.history.push("/cat/jimi")
  }
  const goToPathHooks = () => {
    history.push("/cat/jimi")
  }
  return (
    <div>
      <h2>CaiJi--------</h2>
      <button onClick={goToPath}>点我跳转到另一个孩子</button>
      <button onClick={goToPathHooks}>点我跳转到另一个孩子---第二种写法，使用hooks</button>
    </div>
  )
}
