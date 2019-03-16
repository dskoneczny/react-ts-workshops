import React from 'react';
import { Container, Row } from 'reactstrap'
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
            return item.name
          })}
        </Row>
      </Container>
    )
  }
}

export default RoomsPage










