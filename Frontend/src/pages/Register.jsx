import { Container, Form, Button, Card } from 'react-bootstrap'

function Register() {
  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card style={{ width: '400px' }}>
        <Card.Body>
          <h4 className="text-center mb-3">Register</h4>

          <Form>
            <Form.Group className="mb-3">
              <Form.Control placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button className="w-100" variant="dark">
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Register
