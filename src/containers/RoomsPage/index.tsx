import React from 'react';
import { connect } from 'react-redux'
import { Container, Row, Card, CardBody, CardTitle, Button, Col } from 'reactstrap';
import SingleRoom from '../../components/SingleRoom';
import { RoomReducerState, Room } from '../../reducers/roomReducer';
import { addRoom } from '../../actions/roomActions'

interface RoomsPageProps {
  rooms: Room[];
  addRoom: (roomName: string) => void;
}

export class RoomsPage extends React.Component<RoomsPageProps> {
  public state = {
    roomName: '',
  };

  public addRoom = () => {
    this.props.addRoom(this.state.roomName);
    this.setState({
      roomName: '',
    });
  }

  public updateRoomName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const roomName = e.target.value;
    this.setState({ roomName });
  }

  public render() {
    return (
      <Container>
        <div>
          {this.state.roomName}
          <br />
          <input
            type='text'
            value={this.state.roomName}
            onChange={this.updateRoomName}
          />
          <button onClick={this.addRoom}>Dodaj pokój</button>
        </div>
        <Row>
          {this.props.rooms.map((item) => {
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
  roomReducer: RoomReducerState;
}

const mapStateToProps = (state: ReducerState) => {
  return ({
    rooms: state.roomReducer.rooms
  })
}

const mapDispatchToProps = {
  addRoom,
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomsPage);












