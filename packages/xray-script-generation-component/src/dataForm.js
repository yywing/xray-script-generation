import React from 'react'

import  Form  from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import ClipboardJS from 'clipboard';


function dumpYaml(object){
  const yaml = require('js-yaml');
  return yaml.dump(object)
}

function loadYaml(value){
  const yaml = require('js-yaml');
  return yaml.load(value)
}


export default class DataForm extends React.Component {
  constructor(props) {
    super(props);
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  copyToClipboard = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(dumpYaml(this.props.formData))
    alert("Success")
  };

  render() {
    return (
      <Form onSubmit={this.copyToClipboard}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Script Data</Form.Label>
          <Form.Control as="textarea" rows={50} value={dumpYaml(this.props.formData)} disabled />
        </Form.Group>
        <Button type="submit">Copy</Button>
      </Form>
    )
  }
}
