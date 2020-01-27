import React from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";

const DUMMY_PLACES = [
  {
    id: "p1",
    creatorId: "u1",
    title: "Win a foosball championship",
    completedAddress: "Bartronica, Melbourne",
    setDate: "",
    targetDate: "",
    completedDate: "",
    completed: false,
    setImageUrl: "https://i.ytimg.com/vi/xXq0KPEJuBk/maxresdefault.jpg",
    completedImageUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.z1EQMkYXiRUgWV9rkGpT9AHaE8%26pid%3DApi&f=1",
    setCoordinates: {},
    targetCoordinates: {},
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
    targetDate: "",
    completedDate: "",
    completed: false,
    setImageUrl:
      "https://media2.trover.com/T/58c263cd74eb4650f0022ede/fixedw_large_4x.jpg",
    completedImageUrl:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201910/jamuna9102019-770x433.png?VB4oJ8dItSqFhwwpLlkhrdCDSzixJd4w",
    setCoordinates: {},
    targetCoordinates: {},
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
  const summitId = useParams().summitId;
  const identifiedSummit = DUMMY_PLACES.find(s => s.id === summitId);

  if (!identifiedSummit) {
    return <h2>Could not find the summit you're looking for.</h2>;
  }

  return (
    <form>
      <Input
        id="title"
        element="input"
        type="text"
        label="Summit Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Summit Title."
        onInput={() => {}}
        value={identifiedSummit.title}
        valid={true}
      />
      <Input
        id="targetDate"
        element="input"
        type="text"
        label="Summit Target Date"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Summit Target Date."
        onInput={() => {}}
        value={identifiedSummit.title}
        valid={true}
      />
      <Input
        id="targetCoordinates"
        element="input"
        type="text"
        label="Summit Target Location"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Summit Target Location."
        onInput={() => {}}
        value={identifiedSummit.title}
        valid={true}
      />
      <button type="submit" disabled={true}>UPDATE</button>
    </form>
  );
};

export default UpdateSummit;
