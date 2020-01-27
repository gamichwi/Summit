import React from "react";
import { Card, ListGroup } from "react-bootstrap";

import Button from '../../shared/components/FormElements/Button'

const SummitItem = props => {
  return (
    <ListGroup.Item>
      <Card className="bg-dark text-white">
        <Card.Img src={props.completedImage} alt={props.title} />
        <Card.ImgOverlay>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.location}
          </Card.Text>
          <Card.Text>Countdown</Card.Text>
          <Button>MAP</Button>
          <Button to={`/summits/${props.id}`}>EDIT</Button>
          <Button>DELETE</Button>
        </Card.ImgOverlay>
      </Card>
    </ListGroup.Item>
  );
};

export default SummitItem;
