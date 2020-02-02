import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import ButtonTemplate from "../../shared/components/FormElements/Button";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";

const DUMMY_PLACES = [
  {
    id: "p1",
    creatorId: "u1",
    title: "Win a foosball championship",
    completedAddress: "Bartronica, Melbourne",
    setDate: "",
    targetDate: "THIS DATE",
    completedDate: "",
    completed: false,
    setImageUrl: "https://i.ytimg.com/vi/xXq0KPEJuBk/maxresdefault.jpg",
    completedImageUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.z1EQMkYXiRUgWV9rkGpT9AHaE8%26pid%3DApi&f=1",
    setCoordinates: {},
    targetCoordinates: {},
    targetAddress: "asfasf",
    completedCoordinates: {
      lat: "-37.8785909",
      lng: "144.9739747"
    },
    likes: [],
    summitWord: [],
    private: true
  },
  {
    id: "p2",
    creatorId: "u2",
    title: "Win a boxing championship",
    completedAddress: "Melbourne Fight Club",
    setDate: "",
    targetDate: "asf",
    completedDate: "",
    completed: false,
    setImageUrl:
      "https://media2.trover.com/T/58c263cd74eb4650f0022ede/fixedw_large_4x.jpg",
    completedImageUrl:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201910/jamuna9102019-770x433.png?VB4oJ8dItSqFhwwpLlkhrdCDSzixJd4w",
    setCoordinates: {},
    targetCoordinates: {},
    targetAddress: "",
    completedCoordinates: {
      lat: "-37.7873385",
      lng: "144.8642536"
    },
    likes: [],
    summitWord: [],
    private: true
  }
];

const UpdateSummit = () => {
  const [isLoading, setIsLoading] = useState(true);

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

  const identifiedSummit = DUMMY_PLACES.find(s => s.id === summitId);

  useEffect(() => {
    if (identifiedSummit) {
      setFormData(
        {
          title: {
            value: identifiedSummit.title,
            isValid: true
          },
          targetDate: {
            value: identifiedSummit.targetDate,
            isValid: true
          },
          targetAddress: {
            value: identifiedSummit.targetAddress,
            isValid: true
          }
        },
        true
      );
    }

    setIsLoading(false);
  }, [setFormData, identifiedSummit]);

  const summitUpdateSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedSummit) {
    return <h2>Could not find the summit you're looking for.</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <form onSubmit={summitUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Summit Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Summit Title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="targetDate"
        element="input"
        type="text"
        label="Summit Target Date"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Summit Target Date."
        onInput={inputHandler}
        initialValue={formState.inputs.targetDate.value}
        initialValid={formState.inputs.targetDate.isValid}
      />
      <Input
        id="targetAddress"
        element="input"
        type="text"
        label="Summit Target Location"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Summit Target Location."
        onInput={inputHandler}
        initialValue={formState.inputs.targetAddress.value}
        initialValid={formState.inputs.targetAddress.isValid}
      />
      <ButtonTemplate type="submit" disabled={!formState.isValid}>
        UPDATE
      </ButtonTemplate>
    </form>
  );
};

export default UpdateSummit;
