import React from 'react';

import Input from '../../shared/components/FormElements/Input'
import { VALIDATOR_REQUIRE } from '../../shared/util/validators'

const NewSummit = () => {
    return <Input element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid title."/>
};

export default NewSummit;