import React from 'react'
import { Switch, Route, Redirect  } from 'react-router-dom'
import CaiJi from './CatChild/CaiJi'
import JiMi from './CatChild/JiMi'
export default function Cat() {
  return (
    <div>
      <h1>Cat----------</h1>
      <Switch>
        <Route path={'/cat/caiji/:id'} component={CaiJi}/>
        <Route path={'/cat/jimi'} component={JiMi}/>
        <Redirect to={'/cat/jimi'}/>
      </Switch>
    </div>
  )
}
