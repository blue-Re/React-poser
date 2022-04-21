import React, { useReducer } from 'react'
import Cat from './child/Cat'
import Dog from './child/Dog'
import { initState, reducer } from './reducers'

export const Context = React.createContext();

export default function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <Context.Provider value={{state,dispatch}}>
      <div>
        <h1>App组件------------</h1>
        <p>{state.name}</p>
        {
          state.hobby.map(item => <li key={item.id}>{item.name}</li>)
        }
        <hr />

        <h2>Cat组件------</h2>
        <Cat />
        <hr />

        <h2>Dog组件-----</h2>
        <Dog />
      </div>
    </Context.Provider>
  )
}
