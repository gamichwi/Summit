import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

import SummitList from "../components/SummitList";

const UserSummits = () => {
  const [loadedSummits, setLoadedSummits] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const userId = useParams().userId;

  useEffect(() => {
    const fetchSummits = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/summits/user/${userId}`
        );
        setLoadedSummits(responseData.summits);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSummits();
  }, [sendRequest, userId]);

  return (
    <React.Fragment>
      <ErrorModal error={error} hide={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}
      {!isLoading && loadedSummits && <SummitList items={loadedSummits} />}
    </React.Fragment>
  );
};

export default UserSummits;
