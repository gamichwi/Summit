import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";

// import "./UserItem.css";

const UserItem = props => {
  return (
    <ListGroup.Item>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>Conquered {props.summitCount} summits!</Card.Text>
          <Button variant="primary">Visit</Button>
        </Card.Body>
      </Card>
    </ListGroup.Item>
  );
};

export default UserItem;