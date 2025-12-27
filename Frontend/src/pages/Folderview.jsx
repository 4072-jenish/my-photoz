import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { FaUpload } from 'react-icons/fa'

function FolderView() {
  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-between mb-3">
        <h4>Folder Name</h4>
        <Button variant="dark">
          <FaUpload /> Upload Photo
        </Button>
      </div>

      <Row>
        {[1,2,3,4].map((item) => (
          <Col md={3} key={item} className="mb-3">
            <Card>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/300"
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default FolderView
