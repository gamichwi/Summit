import React, { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";

import ButtonTemplate from "../../shared/components/FormElements/Button";
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
        footer={<ButtonTemplate onClick={closeMapHandler}>CLOSE</ButtonTemplate>}>

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
            <ButtonTemplate onClick={openMapHandler}>MAP</ButtonTemplate>
            <ButtonTemplate variant={'secondary'} href={`/summits/${props.id}`}>EDIT</ButtonTemplate>
            <ButtonTemplate variant={'danger'}>DELETE</ButtonTemplate>
          </Card.ImgOverlay>
        </Card>
      </ListGroup.Item>
    </React.Fragment>
  );
};

export default SummitItem;
