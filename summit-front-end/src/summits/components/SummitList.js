import React from "react";

import SummitItem from "./SummitItem";
import { ListGroup } from "react-bootstrap";

const SummitList = props => {
  if (props.items.length === 0) {
    return (
      <div className="default">
        <h2>No Summits were found.</h2>
      </div>
    );
  }

return (
  <ListGroup>
    {props.items.map(summit => (
      <SummitItem
        key={summit.id}
        id={summit.id}
        creatorId={summit.creator}
        title={summit.title}
        completedAddress={summit.completedAddress}
        setDate={summit.setDate}
        completedDate={summit.completedDate}
        completed={summit.completed}
        setImage={summit.setImageUrl}
        completedImage={summit.completedImageUrl}
        setCoordinates={summit.setLocation}
        completedCoordinates={summit.completedLocation}
        likes={summit.likes}
        summitWord={summit.word}
        private={summit.private}
      />
    ))}
  </ListGroup>
);
    }

export default SummitList;
