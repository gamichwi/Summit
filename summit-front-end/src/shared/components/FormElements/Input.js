import React, { useEffect, useReducer } from "react";
import { Form } from "react-bootstrap";

import { validate } from "../../util/validators";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      };
    case "TOUCH":
      return {
        ...state,
        value: action.val,
        isTouched: true
      };

    default:
      return state;
  }
};

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isValid: props.initialValid || false,
    isTouched: false
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
      onInput(id, value, isValid);
    },
    //Hide warning about useEffect on the next line
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id, value, isValid, onInput]
  );

  const changeHandler = event => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators
    });
  };

  const touchHandler = event => {
    dispatch({
      type: "TOUCH",
      val: event.target.value,
      validators: props.validators
    });
  };

  const element =
    props.element === "input" ? (
      <>
          <Form.Control
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            onChange={changeHandler}
            onBlur={touchHandler}
            value={inputState.value}
          />
      </>
    ) : (
    <>
      <Form.Control
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
      </>
    );

  return (
    <div>
      <Form.Label htmlFor={props.id}>{props.label}</Form.Label>
 
      {/* <label htmlFor={props.id}>{props.label}</label> */}
      {element}

      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
