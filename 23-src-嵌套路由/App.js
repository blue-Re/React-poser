import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Cat from './pages/Cat'
import Dog from './pages/Dog'
import Home from './pages/Home'
import NotFound from './pages/NotFound'


export default function App() {
  return (
    <div>
      <Switch>
        {/* <h1>根组件</h1> */}
        <Route path="/cat" component={Cat} />
        {/* <hr /> */}
        <Route path="/dog" component={Dog} />
        <Route path="/home" component={Home} />
        <Route component={NotFound}/>
        <Redirect  to='/home' component={Home} />
      </Switch>
    </div>
  )
}
