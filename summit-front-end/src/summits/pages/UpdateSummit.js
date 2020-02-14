import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import ButtonTemplate from "../../shared/components/FormElements/Button";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";

const UpdateSummit = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedSummit, setLoadedSummit] = useState();
  const history = useHistory();
  const summitId = useParams().summitId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false
      },
      targetDate: {
        value: "",
        isValid: false
      },
      targetAddress: {
        value: "",
        isValid: false
      }
    },
    false
  );

  useEffect(() => {
    const fetchSummit = async () => {
      try {
        const responseData = await sendRequest(
          `api/summits/${summitId}`,
        );
        setLoadedSummit(responseData.summit);
        setFormData(
          {
            title: {
              value: responseData.summit.title,
              isValid: true
            },
            targetDate: {
              value: responseData.summit.targetDate,
              isValid: true
            },
            targetAddress: {
              value: responseData.summit.targetAddress,
              isValid: true
            }
          },
          true
        );
      } catch (err) {}
    };
    fetchSummit();
  }, [sendRequest, summitId, setFormData]);

  const summitUpdateSubmitHandler = async event => {
    event.preventDefault();
    // try {
      await sendRequest(
        `/api/summits/${summitId}`,
        "PATCH",
        JSON.stringify({
          title: formState.inputs.title.value,
          targetAddress: formState.inputs.targetAddress.value,
          targetDate: formState.inputs.targetDate.value
        }),
        {
          "Content-Type": "application/json",
          Authorization: 'Bearer ' + auth.token
        }
      );
      history.push("/" + auth.userId + "/summits");
    // } catch (err) {
      // console.log(err);
    // }
  };

  if (!isLoading && !loadedSummit) {
    return <h2>Could not find the summit you're looking for.</h2>;
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} hide={clearError} />
        {isLoading && <LoadingSpinner asOverlay />}
        {!isLoading && loadedSummit && (
      <form onSubmit={summitUpdateSubmitHandler}>
        <Input
          id="title"
          element="input"
          type="text"
          label="What is your Summit?"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid Summit Title."
          onInput={inputHandler}
          initialValue={loadedSummit.title}
          initialValid={true}
        />
        <Input
          id="targetDate"
          element="input"
          type="text"
          label="Target Date"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid Summit Target Date."
          onInput={inputHandler}
          initialValue={loadedSummit.targetDate}
          initialValid={true}
        />
        <Input
          id="targetAddress"
          element="input"
          type="text"
          label="Target Location"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid Summit Target Location."
          onInput={inputHandler}
          initialValue={loadedSummit.targetAddress}
          initialValid={true}
        />
        <br />
        <ButtonTemplate type="submit" disabled={!formState.isValid}>
          UPDATE
        </ButtonTemplate>
      </form>
        )}
    </React.Fragment>
  );
};

export default UpdateSummit;
