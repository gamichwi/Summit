import React from "react";

import "./UsersList.css";

const UsersList = props => {
  if (props.items.length === 0) {
    return (
      <div className="default">
        <h2>No users were found.</h2>
      </div>
    );
  }
  return (
    <ul>
      {props.item.map(user => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          summitCount={user.summits}
        />
      ))}
    </ul>
  );
};

export default UsersList;
