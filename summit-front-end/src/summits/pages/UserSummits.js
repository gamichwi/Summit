import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SummitList from "../components/SummitList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";


const UserSummits = () => {
  const [loadedSummits, setLoadedSummits] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const userId = useParams().userId;

  useEffect(() => {
    const fetchSummits = async () => {
      try {
        const responseData = await sendRequest(
          `/api/summits/user/${userId}`
        );
        setLoadedSummits(responseData.summits);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSummits();
  }, [sendRequest, userId]);

  const summitDeletedHandler = deletedSummitId => {
    setLoadedSummits(prevSummits =>
      prevSummits.filter(summit => summit.id !== deletedSummitId)
    );
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} hide={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}
      {!isLoading && loadedSummits && (
        <SummitList items={loadedSummits} onDeleteSummit={summitDeletedHandler} />
      )}
    </React.Fragment>
  );
};

export default UserSummits;
