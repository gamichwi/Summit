import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";

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
          <Button>EDIT</Button>
          <Button>DELETE</Button>
        </Card.ImgOverlay>
      </Card>
    </ListGroup.Item>
  );
};

export default SummitItem;
