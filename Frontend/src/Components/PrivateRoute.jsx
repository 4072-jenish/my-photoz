import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const getCookie = (name) => {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
  return null
}

const PrivateRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth)
  const cookieToken = getCookie('token')
  const location = useLocation()

  const isAuthenticated = Boolean(token || cookieToken)

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return children
}

export default PrivateRoute