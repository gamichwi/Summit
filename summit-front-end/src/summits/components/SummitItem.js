import React, { useState, useContext } from "react";
import { Card, ListGroup, OverlayTrigger, Tooltip } from "react-bootstrap";
import { MdMap, MdModeEdit, MdDelete } from "react-icons/md";

import ButtonTemplate from "../../shared/components/FormElements/Button";
import ModalTemplate from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import dateDifference from "../../shared/util/dateDifference";

const SummitItem = props => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const auth = useContext(AuthContext);
  //Map Modal
  const [showMap, setShowMap] = useState(false);
  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  //Delete warning Modal
  const [showWarning, setShowWarning] = useState(false);
  const openWarningHandler = () => setShowWarning(true);
  const closeWarningHandler = () => setShowWarning(false);

  const confirmDeleteHandler = async () => {
    setShowWarning(false);
    try {
      await sendRequest(
        `/api/summits/${props.id}`,
        "DELETE",
        null, //no body required
        {
          Authorization: "Bearer " + auth.token
        }
      );
      props.onDelete(props.id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} hide={clearError} />

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

      {/* <ListGroup.Item> */}
      <Card className="bg-dark text-white summitItem">
        {isLoading && <LoadingSpinner asOverlay />}
        <Card.Img src={`/${props.setImage}`} alt={props.title} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.targetLocation}</Card.Text>
          <Card.Text>
            Countdown: {dateDifference(null, props.targetDate)} days to go!
          </Card.Text>

            <ButtonTemplate toolTipText="Map!" className="map" onClick={openMapHandler}>
              <MdMap />
            </ButtonTemplate>

          {auth.userId === props.userId && (
            <ButtonTemplate
            toolTipText="Edit!" 
              className="edit"
              variant={"secondary"}
              to={`/summits/${props.id}`}
            >
              <MdModeEdit />
            </ButtonTemplate>
          )}

          {auth.userId === props.userId && (
            <ButtonTemplate
            toolTipText="Delete!" 
              className="delete"
              variant={"danger"}
              onClick={openWarningHandler}
            >
              <MdDelete />
            </ButtonTemplate>
          )}
        </Card.Body>
      </Card>
      {/* </ListGroup.Item> */}
    </React.Fragment>
  );
};

export default SummitItem;
