import { FC } from 'react'
import { withRouter, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Providers from '../pages/Providers'
import Login from '../pages/Login'

import Route from './Route'

const Router: FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route
          isPrivate
          path="/providers/:subsegmentId"
          exact
          component={Providers}
        />
        <Route isPrivate path="/home" exact component={Home} />
      </Switch>
    </>
  )
}

export default withRouter(Router)
