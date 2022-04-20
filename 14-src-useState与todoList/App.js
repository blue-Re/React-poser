import React, { useState } from 'react'

export default function App() {
  const [name, setName] = useState("zhangsan")
  const changeName = () => {
    setName("lisi")
  }

  const [age, setAge] = useState(12)
  const changeAge = () => {
    setAge(133)
  }

  const [list, setList] = useState([6, 7, 8, 9, 10])
  const changeList = () => {
    setList([1, 2, 3, 4, 5])
  }

  const [obj, setObj] = useState({
    name: '王五',
    hobby: ["lol", "cf"]
  })
  const changeObj = () => {
    setObj({
      name: '666',
      hobby: ["英雄联盟", "王者"]
    })
  }

  /* todoList---------- */
  const [inputText, setInputText] = useState("")
  const changeInputText = (event) => {
    setInputText(event.target.value)
  }

  const [todo, setTodo] = useState(["吃饭", "睡觉"])
  const insertTodo = () => {
    setTodo([...todo, inputText])
    setInputText("")
  }

  const deleteTodo = (params) => {
    const newTodo = todo.filter((item, index) => {
      return index !== params
    })
    setTodo(newTodo)
  }

  return (
    <div>
      <h1>我是函数式组件</h1>
      <h2>测试数据-----------</h2>
      <p>{name}</p>
      <button onClick={changeName}>改变姓名</button>

      <p>{age}</p>
      <button onClick={changeAge}>改变年龄</button>

      {
        list.map(item => <li key={item}>{item}</li>)
      }
      <button onClick={changeList}>改变列表</button>

      <p>{obj.name}-------{obj.hobby}</p>
      <button onClick={changeObj}>改变对象</button>

      <h2>todoList------------</h2>
      <input placeholder='请输入事件' value={inputText} onChange={changeInputText}/>
      <button onClick={insertTodo}>添加事件</button>
      <ul>
        {
          todo.map((item, index) => {
            return (
              <li key={item}>{item}
                <button onClick={() => deleteTodo(index)}>删除</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
