import React from 'react';
import { connect } from 'react-redux'
import { Container, Row, Card, CardBody, CardTitle, Button, Col } from 'reactstrap';
import SingleRoom from '../../components/SingleRoom';
import { RoomReducerState, Room } from '../../reducers/roomReducer';
import { addRoom } from '../../actions/roomActions'

interface RoomsPageProps {
  rooms: Room[];
  addRoom: () => void;
}

export class RoomsPage extends React.Component<RoomsPageProps> {
  public addRoom = () => {
    this.props.addRoom();
  }
  public render() {
    return (
      <Container>
        <Button style={{marginBottom: 20}} onClick={this.addRoom}>Dodaj pokoj</Button>
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
  roomReducer: RoomReducerState
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












