import React from 'react';
import './RegistrationForm.css';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Confirmation from "../confirmation/Confirmation"

class RegistrationForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            firstName: '',
            lastName: '',
            streetAddress: '',
            city: '',
            state: '',
            postalCode: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({state: event.target.value});
    }

    handleSubmit(event) {
        this.state.submitted = true
        event.preventDefault();
    }

    render(){
        if(this.props.submitted){
            return <Confirmation></Confirmation>
        }

        return (
            <Container fluid>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col xs={2}>
                            <Form.Group controlId="formFirstName">
                                <Form.Label>First name</Form.Label>
                                <Form.Control/>
                            </Form.Group>
                        </Col>
                        <Col xs={2}>
                            <Form.Group controlId="formLastName">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control onChange={this.handleChange}/>
                            </Form.Group>
                        </Col>

                    </Row>

                    <Row>
                        <Col xs={4}>
                            <Form.Group controlId="formNpiNumber">
                                <Form.Label>NPI Number</Form.Label>
                                <Form.Control/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={5}>
                            <Form.Group  controlId="formStreet">
                                <Form.Label>Street Address</Form.Label>
                                <Form.Control/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2}>
                            <Form.Group  controlId="formStreet">
                                <Form.Label>City</Form.Label>
                                <Form.Control/>
                            </Form.Group>
                        </Col>
                        <Col xs={1}>
                            <Form.Group  controlId="formStreet">
                                <Form.Label>State</Form.Label>
                                <Form.Control/>
                            </Form.Group>
                        </Col>
                        <Col xs={2}>
                            <Form.Group  controlId="formStreet">
                                <Form.Label>Postal Code</Form.Label>
                                <Form.Control/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <Form.Group controlId="formPhoneNumber">
                                <Form.Label>Phone number</Form.Label>
                                <Form.Control/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <Form.Group controlId="formEmailAddress">
                                <Form.Label>Email</Form.Label>
                                <Form.Control/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        );
    }

}

export default RegistrationForm;
