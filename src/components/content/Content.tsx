import '../../assets/scss/content.scss'
import React from 'react'
import {
  Switch,
  Route
} from "react-router-dom"

export const Content: React.FC = () => {

  return (
    <div className="containerC">
      <Switch>
        <Route path="/">
        </Route>
      </Switch>
    </div>
  )
}