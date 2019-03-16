import React from 'react';
import { connect } from 'react-redux'
import { Container, Row, Card, CardBody, CardTitle, Button, Col } from 'reactstrap';
import SingleRoom from '../../components/SingleRoom';
import { RoomReducerState } from '../../reducers/roomReducer';

export class RoomsPage extends React.Component {
  public state = {
    rooms: [
      {
        id: 0,
        name: 'Mała sala konferencyjna',
      },
    ],
  };

  public addRoom = () => {
    const rooms = this.state.rooms;

    rooms.push({
      id: this.state.rooms.length,
      name: 'Nowa sala',
    });

    this.setState({
      rooms,
    });
  }

  public render() {
    return (
      <Container>
        <Button style={{marginBottom: 20}} onClick={this.addRoom}>Dodaj pokoj</Button>
        <Row>
          {this.state.rooms.map((item) => {
            return (
              <SingleRoom key={item.id} name={item.name} />
            );
          })}
        </Row>
      </Container>
    );
  }
}

export interface ReducerState {
  roomReducer: RoomReducerState
}

const mapStateToProps = (state: ReducerState) => {
  return ({
    rooms: state.roomReducer.rooms
  })
}

export default connect(mapStateToProps)(RoomsPage);








