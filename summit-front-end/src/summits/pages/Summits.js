import React from "react";
// import { useParams } from "react-router-dom";

import SummitList from "../components/SummitList";

const DUMMY_PLACES = [
  {
    id: "p2",
    creatorId: "u2",
    title: "Win a boxing championship",
    completedAddress: "Melbourne Fight Club",
    setDate: "",
    targetDate: "6/5/21",
    completedDate: "",
    completed: false,
    setImage:
      "uploads/images/Boxing.jpeg",
    completedImage:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201910/jamuna9102019-770x433.png?VB4oJ8dItSqFhwwpLlkhrdCDSzixJd4w",
    setLocation: {},
    targetLocation: {
      lat: -37.8192442,
      lng: 144.9620749
    },
    targetAddress:'',
    completedLocation: {
      lat: -37.7873385,
      lng: 144.8642536
    },
    likes: [],
    summitWord: [],
    private: true
  },
  {
    id: "p1",
    creatorId: "u1",
    title: "Win a foosball championship",
    completedAddress: "Bartronica, Melbourne",
    setDate: "",
    targetDate: "9/8/20",
    completedDate: "",
    completed: false,
    setImage: "uploads/images/Foosball.jpeg",
    completedImage:
      "https://3.bp.blogspot.com/_TWDIyi5pqlc/TCSymSdTlkI/AAAAAAAAFm4/zzGzAh3S1mQ/s1600/artwork_images_365_268246_maurizio-cattelan-1.jpg",
    setLocation: {},
    targetLocation: {
      lat: -37.8177681,
      lng: 144.9610117
    },
    targetAddress:'',
    completedLocation: {
      lat: -37.8785909,
      lng: 144.9739747
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
