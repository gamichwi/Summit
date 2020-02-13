import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import ButtonTemplate from "../../shared/components/FormElements/Button";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ImageUpload from '../../shared/components/FormElements/ImageUpload';
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";

const NewSummit = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
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

  const history = useHistory();//allows navigation history

  const summitSubmitHandler = async event => {
    event.preventDefault();
    try {
      await sendRequest(
        "http://localhost:5000/api/summits",
        "POST",
        JSON.stringify({
          title: formState.inputs.title.value,
          targetAddress: formState.inputs.targetAddress.value,
          targetDate: formState.inputs.targetDate.value,
          // private: formState.inputs.private.value,
          userId: auth.userId
        }),
        { "Content-Type": "application/json" }
      );
      history.push("/");//Re-Direct to /
    } catch (err) {
     console.log(err);
    }
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} hide={clearError} />
      <form onSubmit={summitSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <Input
          id="title"
          element="input"
          type="text"
          label="What is your Summit?"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
        />
        <Input
          id="targetDate"
          element="input"
          type="text"
          label="Target Date"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid target date."
          onInput={inputHandler}
        />
        <Input
          id="targetAddress"
          element="input"
          type="text"
          label="Target Location"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid location."
          onInput={inputHandler}
        />
        <br />
        <ButtonTemplate type="submit" disabled={!formState.isValid}>
          ADD SUMMIT
        </ButtonTemplate>
      </form>
    </React.Fragment>
  );
};

export default NewSummit;
