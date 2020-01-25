import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
        id: "u1",
        name: "Gavin",
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Bananaman_-_Beano_Superhero.jpg/250px-Bananaman_-_Beano_Superhero.jpg",
        summits: "3"
      },    {
        id: "u2",
        name: "Andrew",
        image:
          "https://nerdreactor.com/wp-content/uploads/2014/12/Zan.jpg",
        summits: "2"
      },    {
        id: "u3",
        name: "Hermes",
        image:
          "https://nerdreactor.com/wp-content/uploads/2014/12/Aqualad.jpg",
        summits: "1"
      },    {
        id: "u4",
        name: "Antonio",
        image:
          "https://nerdreactor.com/wp-content/uploads/2014/12/Red-Bee.jpg",
        summits: "4"
      },    {
        id: "u5",
        name: "Sachenko",
        image:
          "https://nerdreactor.com/wp-content/uploads/2014/12/SquirrelGirl.jpg",
        summits: "5"
      }
  ];
  return <UsersList items={USERS} />;
};

export default Users;
