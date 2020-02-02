import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const ButtonTemplate = props => {
  if (props.href) {
    return <Button variant={props.variant} href={props.href}>{props.children}</Button>;
  }
  if (props.to) {
    return (
      <Link to={props.to} exact={props.exact}>
        {props.children}
      </Link>
    );
  }
  return (
    <Button variant={props.variant} type={props.type} onClick={props.onClick} disabled={props.disabled}>
      {props.children}
    </Button>
  );
};

export default ButtonTemplate;
