import axios from 'axios'
import { toast } from 'react-toastify'

const API = 'http://localhost:8899/api/auth' // backend later

export const login = (formData) => async (dispatch) => {
  try {
    dispatch({ type: 'AUTH_START' })

    const { data } = await axios.post(`${API}/login`, formData)
    const maxAge = 7 * 24 * 60 * 60
    document.cookie = `token=${data.token}; path=/; max-age=${maxAge}`;

    
    localStorage.setItem('token', data.token)

    dispatch({
      type: 'AUTH_SUCCESS',
      payload: data
    })

    toast.success('Login successful')

    return data
  } catch (error) {
    dispatch({
      type: 'AUTH_FAIL',
      payload: error.response?.data?.message || 'Login failed'
    })
    toast.error('Login failed')
    // throw so caller can handle
    throw error
  }
}

export const register = (formData) => async (dispatch) => {
  try {
    dispatch({ type: 'AUTH_START' })

    const { data } = await axios.post(`${API}/register`, formData)

    toast.success('Registration successful')
  } catch (error) {
    dispatch({
      type: 'AUTH_FAIL',
      payload: error.response?.data?.message || 'Register failed'
    })
    toast.error('Registration failed')
  }
}

export const logout = () => (dispatch) => {
  // remove cookie
  document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
  localStorage.removeItem('token')
  dispatch({ type: 'LOGOUT' })
}