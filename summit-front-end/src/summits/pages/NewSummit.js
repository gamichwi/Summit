import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

import Input from "../../shared/components/FormElements/Input";
import ButtonTemplate from "../../shared/components/FormElements/Button";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ImageUpload from "../../shared/components/FormElements/ImageUpload";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";

const NewSummit = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false
      },
      targetDate: {
        value: "",
        isValid: false
      },
      targetAddress: {
        value: "",
        isValid: false
      },
      image: {
        value: null,
        isValid: false
      }
    },
    false
  );

  const history = useHistory(); //allows navigation history

  const summitSubmitHandler = async event => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", formState.inputs.title.value);
      formData.append("targetAddress", formState.inputs.targetAddress.value);
      formData.append("targetDate", formState.inputs.targetDate.value);
      formData.append("userId", auth.userId);
      formData.append("image", formState.inputs.image.value);
      await sendRequest(
        "http://localhost:5000/api/summits",
        "POST",
        formData //provides headers
      );
      history.push("/"); //Re-Direct to /
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
 
        <ErrorModal error={error} hide={clearError} />

        {isLoading && <LoadingSpinner asOverlay />}
        <Container>
        <form onSubmit={summitSubmitHandler}>
        <Row>
          <Col>
        
          <Input
            id="title"
            element="input"
            type="text"
            label="What is your Summit?"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={inputHandler}
          />
          <Input
            id="targetDate"
            element="input"
            type="text"
            label="Target Date"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid target date."
            onInput={inputHandler}
          />
          <Input
            id="targetAddress"
            element="input"
            type="text"
            label="Target Location"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid location."
            onInput={inputHandler}
          />
          <br />
          <br />
                    <ButtonTemplate type="submit" disabled={!formState.isValid}>
            ADD SUMMIT
          </ButtonTemplate>
          </Col>
          <Col>
          <br />
          <ImageUpload
            id="image"
            onInput={inputHandler}
            errorText="Please provide an image."
          />
          </Col>
          <br />
          </Row>
          <Row>

          
          </Row>

        </form>
      </Container>
    </React.Fragment>
  );
};

export default NewSummit;
