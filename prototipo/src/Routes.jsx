import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'

import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Perguntas from './pages/Perguntas'
import Suporte from './pages/Suporte'

export default props =>
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/perfil' component={Perfil} />
    <Route path='/perguntas' component={Perguntas} />
    <Route path='/suporte' component={Suporte} />
    <Redirect from='*' to='/' />
  </Switch> 