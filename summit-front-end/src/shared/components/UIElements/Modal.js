import React from 'react';
import { Modal } from 'react-bootstrap';

const ModalTemplate = props => {  
    return (
      <>
        <Modal show={props.show} onHide={props.onHide}>
          <Modal.Header closeButton>
            <Modal.Title>{props.header}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.children}</Modal.Body>
          <Modal.Footer>{props.footer}</Modal.Footer>
        </Modal>
      </>
    );
}

export default ModalTemplate;