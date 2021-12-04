import React from 'react'

import Form from "@rjsf/core";

const schema = require('./schema.json');


function validate(formData, errors) {
  if (formData.transport)
  if (formData.pass1 !== formData.pass2) {
    errors.pass2.addError("Passwords don't match");
  }
  return errors;
}


export default class ScriptForm extends React.Component {
  render() {
      return (<Form schema={schema} formData={this.props.formData} validate={validate} liveValidate onSubmit={this.props.onSubmit} />)
  }
}
