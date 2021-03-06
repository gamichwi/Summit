import React from "react";

import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

// import "./UserItem.css";

const UserItem = props => {
  return (
    // <ListGroup.Item>
      <Card className="bg-dark text-white userItem" >
        <Link to={`/${props.id}/summits`}>
          <Card.Img src={`/${props.image}`} />
        </Link>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>Conquering {props.summitCount} Summits!</Card.Text>
        </Card.Body>
      </Card>
    // </ListGroup.Item>
  );
};

export default UserItem;
