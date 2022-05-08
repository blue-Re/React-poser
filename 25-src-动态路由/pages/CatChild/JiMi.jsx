import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'

export default function JiMi() {
  const history = useHistory()
  const go = () => {
    history.push("/cat/caiji/345")
  }
  return (
    <div>
      <h2>JIMI----------</h2>
      <button onClick={go}>跳转到caiji使用动态路由</button>
    </div>
  )
}
