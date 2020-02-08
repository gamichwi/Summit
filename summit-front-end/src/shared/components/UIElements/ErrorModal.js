import React from 'react';
import { useState } from 'react-bootstrap';
import ModalTemplate from '../UIElements/Modal';
import ButtonTemplate from '../FormElements/Button';



const ErrorModal = props => {

  return (
    <ModalTemplate
      close={props.hide}
      header="An Error Occurred!"
      show={!!props.error}
      footer={<ButtonTemplate onClick={props.hide}>Okay</ButtonTemplate>}
    >
      <p>{props.error}</p>
    </ModalTemplate>
  );
};

export default ErrorModal;
