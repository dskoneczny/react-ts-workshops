import React from 'react';
import { Container, Row, Card, CardBody, CardTitle, Button, Col } from 'reactstrap'
export class RoomsPage extends React.Component {
  state = {
    rooms: [
      {
        id: 0,
        name: "Mała sala konferencyjna"
      }
    ]
  }
  public render() {
    return (
      <Container>
        <Row>
          {this.state.rooms.map(item => {
            return (
              <Col md="4">
                <Card>
                  <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </Col>
            )
            })}
        </Row>
      </Container>
    )
  }
}

export default RoomsPage










