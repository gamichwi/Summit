import React from 'react';

import Input from '../../shared/components/FormElements/Input'

const NewSummit = () => {
    return <Input element="input" type="text" label="Title" validators={[]} errorText="Please enter a valid title."/>
};

export default NewSummit;