import React from "react";
// import { useParams } from "react-router-dom";

import SummitList from "../components/SummitList";

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
    setImage: "uploads/images/Foosball.jpeg",
    completedImage:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.z1EQMkYXiRUgWV9rkGpT9AHaE8%26pid%3DApi&f=1",
    setLocation: {},
    targetLocation: {
      lat: -37.8785909,
      lng: 144.9739747
    },
    targetAddress:'',
    completedLocation: {
      lat: -37.8785909,
      lng: 144.9739747
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
    setImage:
      "uploads/images/Boxing.jpeg",
    completedImage:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201910/jamuna9102019-770x433.png?VB4oJ8dItSqFhwwpLlkhrdCDSzixJd4w",
    setLocation: {},
    targetLocation: {
      lat: -37.8785909,
      lng: 144.9739747
    },
    targetAddress:'',
    completedLocation: {
      lat: -37.7873385,
      lng: 144.8642536
    },
    likes: [],
    summitWord: [],
    private: true
  }
];

const Summits = () => {
//   const userId = useParams().userId;
//   const loadedSummits = DUMMY_PLACES.filter(
//     summit => summit.creatorId === userId
//   );
  return <SummitList items={DUMMY_PLACES} />;
};

export default Summits;
