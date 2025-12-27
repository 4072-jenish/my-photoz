import { Container, Form, Button, Card } from 'react-bootstrap'

function Login() {
    const dispatch = useDispatch()
  const { loading } = useSelector(state => state.auth)

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(formData))
  }
  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card style={{ width: '400px' }}>
        <Card.Body>
          <h4 className="text-center mb-3">Login</h4>
            <form onSubmit={handleSubmit}>
                 <input name="email" onChange={handleChange} />
                 <input name="password" type="password" onChange={handleChange} />
                 <button disabled={loading}>Login</button>
            </form>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Login
