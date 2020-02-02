import React from "react";

import Input from "../../shared/components/FormElements/Input";
import ButtonTemplate from "../../shared/components/FormElements/Button";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";

const NewSummit = () => {
  const [formState, inputHandler] =
  useForm({
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
  }, false);

  return (
    <form>
      <Input
        id="title"
        element="input"
        type="text"
        label="Summit Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="targetDate"
        element="input"
        type="text"
        label="Summit Target Date"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid target date."
        onInput={inputHandler}
      />
      <Input
        id="targetAddress"
        element="input"
        type="text"
        label="Summit Target Location"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid location."
        onInput={inputHandler}
      />
      <ButtonTemplate type="submit" disabled={!formState.isValid}>
        ADD SUMMIT
      </ButtonTemplate>
    </form>
  );
};

export default NewSummit;
