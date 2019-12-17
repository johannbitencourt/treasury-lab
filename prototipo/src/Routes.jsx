import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'

import Home from ''
import Perfil from ''
import Perguntas from ''
import Suporte from ''

export default props =>
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/perfil' component={Perfil} />
    <Route path='/perguntas' component={Perguntas} />
    <Route path='/suporte' component={Suporte} />
    <Redirect from='*' to='/' />
  </Switch> 