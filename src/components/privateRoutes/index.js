import React from 'react'
import { Route, Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'

export default function PrivateRoute({children}) {
  const { currentUser } = useAuth() //get current user from authContext
  const location = useLocation() //location is a react router dom hook that returns the current location of the page

  if(!currentUser){
    return <Navigate to = "/users/login" replace
    state={{intent: location.pathname}} />

  }

  return children;
}

