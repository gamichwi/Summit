import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "U1",
      name: "Gavin",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Bananaman_-_Beano_Superhero.jpg/250px-Bananaman_-_Beano_Superhero.jpg",
      summits: "3"
    }
  ];
  return <UsersList items={USERS} />;
};

export default Users;
