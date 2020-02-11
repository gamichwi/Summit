import React, { useState, useContext } from "react";
import { Card, ListGroup } from "react-bootstrap";

import ButtonTemplate from "../../shared/components/FormElements/Button";
import ModalTemplate from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";
import { AuthContext } from "../../shared/context/auth-context";

const SummitItem = props => {
  const auth = useContext(AuthContext);
  //Map Modal
  const [showMap, setShowMap] = useState(false);
  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  //Delete warning Modal
  const [showWarning, setShowWarning] = useState(false);
  const openWarningHandler = () => setShowWarning(true);
  const closeWarningHandler = () => setShowWarning(false);
  const confirmDeleteHandler = () => {
    setShowWarning(false);
    console.log("DELETING...");
  };

  return (
    <React.Fragment>
      {/* Map Modal */}
      <ModalTemplate
        show={showMap}
        hide={closeMapHandler}
        header={props.title}
        footer={
          <ButtonTemplate onClick={closeMapHandler}>CLOSE</ButtonTemplate>
        }
      >
        <div className="map-container">
          <Map center={props.targetCoordinates} zoom={16} />
        </div>
      </ModalTemplate>

      {/* Delete Warning Modal */}
      <ModalTemplate
        show={showWarning}
        hide={closeWarningHandler}
        header={"Are you sure you want to delete?"}
        footer={
          <React.Fragment>
            <ButtonTemplate variant={"secondary"} onClick={closeWarningHandler}>
              CANCEL
            </ButtonTemplate>
            <ButtonTemplate variant={"danger"} onClick={confirmDeleteHandler}>
              DELETE
            </ButtonTemplate>
          </React.Fragment>
        }
      >
        Deleting a Summit can not be undone...
      </ModalTemplate>

      <ListGroup.Item>
        <Card className="bg-dark text-white">
          <Card.Img src={props.setImage} alt={props.title} />
          <Card.ImgOverlay>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.targetLocation}</Card.Text>
            <Card.Text>Countdown</Card.Text>
            <ButtonTemplate onClick={openMapHandler}>MAP</ButtonTemplate>

            {auth.isLoggedIn && (
              <ButtonTemplate
                variant={"secondary"}
                href={`/summits/${props.id}`}
              >
                EDIT
              </ButtonTemplate>
            )}

            {auth.isLoggedIn && (
              <ButtonTemplate variant={"danger"} onClick={openWarningHandler}>
                DELETE
              </ButtonTemplate>
            )}
          </Card.ImgOverlay>
        </Card>
      </ListGroup.Item>
    </React.Fragment>
  );
};

export default SummitItem;