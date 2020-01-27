import React, { useCallback } from "react";

import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";

const NewSummit = () => {
  // useCallBack to avoid infinite loop
  const titleInputHandler = useCallback((id, value, isValid) => {}, []);

  return (
    <form>
      <Input
        id="title"
        element="input"
        type="text"
        label="Summit Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={titleInputHandler}
      />
      <Input
        id="targetDate"
        element="input"
        type="text"
        label="Summit Target Date"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid target date."
        onInput={titleInputHandler}
      />
      <Input
        id="targetCoordinates"
        element="input"
        type="text"
        label="Summit Target Location"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid location."
        onInput={titleInputHandler}
      />
    </form>
  );
};

export default NewSummit;
