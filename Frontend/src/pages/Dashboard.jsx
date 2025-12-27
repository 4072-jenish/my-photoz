import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { FaFolderPlus } from 'react-icons/fa'

function Dashboard() {
  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Your Folders</h4>
        <Button variant="dark">
          <FaFolderPlus /> New Folder
        </Button>
      </div>

      <Row>
        {[1,2,3].map((item) => (
          <Col md={3} key={item} className="mb-3">
            <Card className="text-center p-3">
              📁 <h6 className="mt-2">Sample Folder</h6>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Dashboard
