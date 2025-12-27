import axios from 'axios'
import { toast } from 'react-toastify'

const API = 'http://localhost:5000/api/auth' // backend later

export const login = (formData) => async (dispatch) => {
  try {
    dispatch({ type: 'AUTH_START' })

    const { data } = await axios.post(`${API}/login`, formData)

    localStorage.setItem('token', data.token)

    dispatch({
      type: 'AUTH_SUCCESS',
      payload: data
    })

    toast.success('Login successful')
  } catch (error) {
    dispatch({
      type: 'AUTH_FAIL',
      payload: error.response?.data?.message || 'Login failed'
    })
    toast.error('Login failed')
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
  localStorage.removeItem('token')
  dispatch({ type: 'LOGOUT' })
}
