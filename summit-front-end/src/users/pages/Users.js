import React, { useEffect, useState } from "react";

import UsersList from "../components/UsersList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from '../../shared/hooks/http-hook';

const Users = () => {
  const {isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest("http://localhost:5000/api/users");

        setLoadedUsers(responseData.users);
        } catch (err) {
        //handled in http-hook
      }
    };
    fetchUsers();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <ErrorModal error={error} hide={clearError} />
      {isLoading && (
        <>
          <LoadingSpinner asOverlay/>
        </>
      )}
      {!isLoading && loadedUsers && <UsersList items={loadedUsers} />};
    </React.Fragment>
  );
};

export default Users;
