import React from 'react';
import { Container, Row, Card, CardBody, CardTitle, Button, Col } from 'reactstrap'
import SingleRoom from '../../components/SingleRoom'

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
              <SingleRoom key={item.id} name={item.name} />
            )
          })}
        </Row>
      </Container>
    )
  }
}

export default RoomsPage










