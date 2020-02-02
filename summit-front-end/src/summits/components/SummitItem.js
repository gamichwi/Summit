import React, { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";

import Button from "../../shared/components/FormElements/Button";
import ModalTemplate from "../../shared/components/UIElements/Modal";

const SummitItem = props => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  return (
    <React.Fragment>
      <ModalTemplate
        show={showMap}
        onHide={closeMapHandler}
        header={props.title}
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}>

      <div className='map-container'>
        <h2>THE MAP!</h2>
      </div>
      </ModalTemplate>

      <ListGroup.Item>
        <Card className="bg-dark text-white">
          <Card.Img src={props.completedImage} alt={props.title} />
          <Card.ImgOverlay>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.location}</Card.Text>
            <Card.Text>Countdown</Card.Text>
            <Button onClick={openMapHandler}>MAP</Button>
            <Button to={`/summits/${props.id}`}>EDIT</Button>
            <Button>DELETE</Button>
          </Card.ImgOverlay>
        </Card>
      </ListGroup.Item>
    </React.Fragment>
  );
};

export default SummitItem;
