import React from "react";

import UserItem from "./UserItem";
import { ListGroup } from "react-bootstrap";

const UsersList = props => {
  if (props.items.length === 0) {
    return (
      <div className="default">
        <h2>No users were found.</h2>
      </div>
    );
  }
  return (
    <ListGroup>
      {props.items.map(user => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          summitCount={user.summits.length}
        />
      ))}
    </ListGroup>
  );
};

export default UsersList;
