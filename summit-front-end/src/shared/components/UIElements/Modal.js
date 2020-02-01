import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalTemplate = props => {  
    return (
      <>
        <Modal show={props.show} onHide={props.onHide}>
          <Modal.Header closeButton>
            <Modal.Title>{props.header}</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default ModalTemplate;