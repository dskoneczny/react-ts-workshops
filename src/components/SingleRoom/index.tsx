import React from 'react';
import { Card, CardBody, CardTitle, Button, Col } from 'reactstrap';

interface SingleRoomsProps {
  id: number;
  name: string;
  likes: number;
  addLike: (id: number) => void;
}

class SingleRoom extends React.PureComponent<SingleRoomsProps> {
  public addLike = () => {
    this.props.addLike(this.props.id);
  };

  public render() {
    return (
      <Col md='4'>
        <Card>
          <CardBody>
            <CardTitle>{this.props.name}</CardTitle>
            <div>
              Likes: {this.props.likes}
            </div>
            <Button onClick={this.addLike}>Like</Button>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default SingleRoom;
