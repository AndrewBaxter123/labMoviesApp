import React from 'react'
import { Route, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'

export default function PrivateRoute({component: Component, ...rest}) {

    const { currentUser } = useAuth()
    const navigate = useNavigate();

  return (
    <Route
        {...rest}
        render={props => {
            return currentUser ? <Component {...props} /> : navigate("/login")  // don't want to render unless its a logged in user
        }}
    ></Route>
  )
}

