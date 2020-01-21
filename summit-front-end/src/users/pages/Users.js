import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "U1",
      name: "Gavin",
      image:
        "https://media-exp1.licdn.com/dms/image/C5603AQGwPIBWk0w0WQ/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=md6Gjzzugfo3wKsHuAdifbSC2vOi0pOybA7iB2xSxR8",
      places: "3"
    }
  ];
  return <UsersList items={USERS} />;
};

export default Users;
