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

  /* 
    普通路由传参的时候可以传入一个对象
    history.push({
      pathname:"/cat/jimi",
      query: {id: 123}
    })
    获取query参数
    props.location.query.id
  */

  return (
    <div>
      <h2>CaiJi--------</h2>
      <button onClick={goToPath}>点我跳转到另一个孩子</button>
      <button onClick={goToPathHooks}>点我跳转到另一个孩子---第二种写法，使用hooks</button>
      {/* 通过props.match.params 来拿到路由传递的数据 */}
      <p>携带过来的参数为：{ props.match.params.id }</p>
    </div>
  )
}
