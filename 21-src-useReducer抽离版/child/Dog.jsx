import React, {useContext} from 'react'
import { Context } from '../App'
export default function Dog() {
  const {state,dispatch} = useContext(Context)
  const changeName = () => {
    dispatch({
      type: 'dog-name',
      value: '汪汪汪'
    })
  }
  const addHobby = () => {
    const obj = {
      id: Math.random(),
      name: '喝酒'
    }
    dispatch({
      type: 'cat-add',
      value: obj
    })
  }
  return (
    <div>
      <p>{state.name}</p>
      {
        state.hobby.map(item => <li key={item.id}>{item.name}</li>)
      }
      <button onClick={changeName}>改变名字</button>
      <button onClick={addHobby}>添加爱好</button>
    </div>
  )
}
