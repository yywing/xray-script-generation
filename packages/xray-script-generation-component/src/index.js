import React from 'react'
import ScriptForm from './form'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import { Container, Row,Col } from 'react-bootstrap';

export {ScriptForm};

export default class FormWithData extends React.Component {
    render() {
      return (
        <Container>
          <Row>
            <Col md={6} mdPush={6}><ScriptForm /></Col>
            <Col md={6} mdPush={6}>
              <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Script Data</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      )
    }
  }


