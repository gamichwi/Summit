import React from "react";

import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

// import "./UserItem.css";

const UserItem = props => {
  return (
    <ListGroup.Item>
      <Card style={{ width: "18rem" }}>
        <Link to={`/${props.id}/summits`}>
          <Card.Img variant="top" src={props.image} />
        </Link>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>Conquered {props.summitCount} summits!</Card.Text>
        </Card.Body>
      </Card>
    </ListGroup.Item>
  );
};

export default UserItem;
