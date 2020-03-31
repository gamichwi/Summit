import React from "react";
import { Link } from "react-router-dom";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

const ButtonTemplate = props => {
  if (props.href) {
    if (props.toolTipText) {
      return (
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="button-toolip"> {props.toolTipText}</Tooltip>}
        >
          <Button variant={props.variant} href={props.href}>
            {props.children}
          </Button>
        </OverlayTrigger>
      );
    } else {
      return (
        <Button variant={props.variant} href={props.href}>
          {props.children}
        </Button>
      );
    }
  }

  if (props.to) {
    if (props.toolTipText){
    return (
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="button-toolip">{props.toolTipText}</Tooltip>}
      >
        <Link to={props.to} exact={props.exact} className="btn btn-secondary">
          {props.children}
        </Link>
      </OverlayTrigger>
    );}
    else{
      return         <Link to={props.to} exact={props.exact} className="btn btn-secondary">
      {props.children}
    </Link>
    }
  }
  if(props.toolTipText){
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id="button-toolip"> {props.toolTipText}</Tooltip>}
    >
      <Button
        variant={props.variant}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </Button>
    </OverlayTrigger>
  );}
  else {
    return <Button
    variant={props.variant}
    type={props.type}
    onClick={props.onClick}
    disabled={props.disabled}
  >
    {props.children}
  </Button>
  }
};

export default ButtonTemplate;
