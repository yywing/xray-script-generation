import React from 'react'
import ScriptForm from './form'
import DataForm from './dataForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

export {ScriptForm};

export default class ScriptFormWithData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {}
    }

    this.onScriptSubmit = this.onScriptSubmit.bind(this);
  }

  onScriptSubmit(e){
    this.setState({ formData: e.formData });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={6}><ScriptForm formData={this.state.formData} onSubmit={this.onScriptSubmit} /></Col>
          <Col md={6}><DataForm formData={this.state.formData}></DataForm></Col>
        </Row>
      </Container>
    )
  }
}


