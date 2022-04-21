import React,{useContext} from 'react'
import { Context } from '../App'

export default function Cat() {
  const {state,dispatch} = useContext(Context)
  const changeName = () => {
    dispatch({
      type: 'cat-name',
      value: '喵喵喵！'
    })
  }
  const addHobby = () => {
    const obj = {
      id: Math.random(),
      name: '抽烟'
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
      <button onClick={changeName}>改名字</button>
      <button onClick={addHobby}>添加爱好</button>

    </div>
  )
}
