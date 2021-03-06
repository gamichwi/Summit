import React from "react";

import SummitItem from "./SummitItem";
import { ListGroup } from "react-bootstrap";

import './SummitList.css'

const SummitList = props => {
  if (props.items.length === 0) {
    return (
      <div className="default">
        <h2>No Summits were found.</h2>
      </div>
    );
  }

return (
  // <ListGroup>
  <div className="flexContainer">
    {props.items.map(summit => (
      <SummitItem
        key={summit.id}
        id={summit.id}
        userId={summit.userId}
        title={summit.title}
        completedAddress={summit.completedAddress}
        setDate={summit.setDate}
        completedDate={summit.completedDate}
        completed={summit.completed}
        setImage={summit.setImage}
        completedImage={summit.completedImage}
        setCoordinates={summit.setLocation}
        completedCoordinates={summit.completedLocation}
        targetDate={summit.targetDate}
        targetCoordinates={summit.targetCoordinates}
        likes={summit.likes}
        summitWord={summit.word}
        private={summit.private}
        onDelete={props.onDeleteSummit}
      />
    ))}
   {/* </ListGroup> */}
   </div>
);
    }

export default SummitList;
