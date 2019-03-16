import React from 'react';
import { Card, CardBody, CardTitle, Button, Col } from 'reactstrap';

interface SingleRoomsProps {
  name: string;
}

class SingleRoom extends React.PureComponent<SingleRoomsProps> {
  public render() {
    return (
      <Col md='4'>
        <Card>
          <CardBody>
            <CardTitle>{this.props.name}</CardTitle>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default SingleRoom;
