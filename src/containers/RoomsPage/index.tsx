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

  public addRoom = () => {
    const rooms = this.state.rooms

    rooms.push({
      id: this.state.rooms.length,
      name: "Nowa sala"
    })

    this.setState({
      rooms: rooms
    })
  }

  public render() {
    return (
      <Container>
        <Button style={{marginBottom: 20}} onClick={this.addRoom}>Dodaj pokoj</Button>
        <Row>
          {this.state.rooms.map((item) => {
            return (
              <Col md="4" key={item.id}>
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










