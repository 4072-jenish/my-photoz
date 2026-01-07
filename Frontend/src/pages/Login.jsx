import { useState, useEffect } from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../redux/actions/authAction'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, token } = useSelector(state => state.auth)

  useEffect(() => {
    if (token || document.cookie.includes('token=')) {
      navigate('/')
    }
  }, [token, navigate])

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await dispatch(login(formData))
      // redirect on successful login
      navigate('/')
    } catch (error) {
      // error already handled by action (toast); no-op here
    }
  }
  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card style={{ width: '400px' }}>
        <Card.Body>
          <h4 className="text-center mb-3">Login</h4>
            <form onSubmit={handleSubmit}>
                 <input name="email" value={formData.email} onChange={handleChange} />
                 <input name="password" type="password" value={formData.password} onChange={handleChange} />
                 <button disabled={loading}>Login</button>
            </form>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Login
