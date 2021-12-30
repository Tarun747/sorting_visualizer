import React from 'react'
import { Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'
import HomePage from '../views/HomePage/HomePage'
function PublicRoutes() {
  return (
    <Suspense
      fallback={
        <div className="loading-container">
          <CircularProgress />
        </div>
      }
    >
      <Switch>
        <Route path="/" component={HomePage} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  )
}
export default PublicRoutes
