import React from 'react';
import './RegistrationForm.css';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

class RegistrationForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            firstName: '',
            lastName: '',
            npiNumber: '',
            street: '',
            city: '',
            state: '',
            zip: '',
            phone: '',
            email: '',
            errors: {
                firstName: '',
                lastName: '',
                street: '',
                city: '',
                state: '',
                zip: '',
                phone: ''
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleValidation(){
        let { firstName, lastName, street, city, state, zip, npiNumber, phone } = this.state;
        let errors = {};
        let valid = true;

        if(!firstName){
            valid = false;
            errors['firstName'] = "First name is Required";
        }

        if(!lastName){
            valid = false;
            errors['lastName'] = "Last name is Required";
        }

        if(!npiNumber){
            valid = false;
            errors['npiNumber'] = "NPI is Required";
        }

        if(npiNumber && !/^\d{10}$/.test(npiNumber)){
            valid = false;
            errors['npiNumber'] = "NPI must be a valid 10 digit number";
        }

        if(!street){
            valid = false;
            errors['street'] = "Street is Required";
        }

        if(!city){
            valid = false;
            errors['city'] = "City is Required";
        }

        if(!state){
            valid = false;
            errors['state'] = "State is Required";
        }

        if(!zip){
            valid = false;
            errors['zip'] = "Zip code is Required";
        }

        if(zip && !/^\d{5}(?:[-\s]\d{4})?$/.test(zip)){
            valid = false
            errors["zip"] = "Must be a valid US Postal Code"
        }

        if(phone && !/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(phone)){
            valid = false;
            errors['phone'] = "Must be valid 10 digit phone number";
        }

        this.setState({errors: errors, validated: true});
        return valid;
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.handleValidation();
        this.setState({[name]: value});
    }

    handleSubmit = (event) => {
        const form = event.currentTarget;
        this.handleValidation();
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            alert(`Thank you, ${this.state.firstName}!`)
            this.setState({ submitted: true })
        }
    };

    render(){
        const {errors} = this.state;

        return (
            <Container fluid>
                <Row>
                    <Col xs={6}>
                        <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                            <Row>
                                <Col xs={6}>
                                    <Form.Group controlId="formFirstName">
                                        <Form.Label>First name *</Form.Label>
                                        <Form.Control name="firstName" onChange={this.handleChange} required/>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.firstName}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col xs={6}>
                                    <Form.Group controlId="formLastName">
                                        <Form.Label>Last name *</Form.Label>
                                        <Form.Control name="lastName" onChange={this.handleChange} required/>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.lastName}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group controlId="formNpiNumber">
                                        <Form.Label>NPI Number *</Form.Label>
                                        <Form.Control name="npiNumber" onChange={this.handleChange} required minlength={10} maxlength={10}/>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.npiNumber}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group  controlId="formStreet">
                                        <Form.Label>Street Address *</Form.Label>
                                        <Form.Control name="street" onChange={this.handleChange} required/>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.street}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={5}>
                                    <Form.Group  controlId="formCity">
                                        <Form.Label>City *</Form.Label>
                                        <Form.Control name="city" onChange={this.handleChange} required/>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.city}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col xs={3}>
                                    <Form.Group  controlId="formState">
                                        <Form.Label>State *</Form.Label>
                                        <Form.Control name="state" onChange={this.handleChange} required/>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.state}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col xs={4}>
                                    <Form.Group  controlId="formZip">
                                        <Form.Label>Postal Code *</Form.Label>
                                        <Form.Control name="zip" onChange={this.handleChange} required minlength={5}/>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.zip}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6}>
                                    <Form.Group controlId="formPhoneNumber">
                                        <Form.Label>Phone number</Form.Label>
                                        <Form.Control type="tel" name="phone" onChange={this.handleChange} maxlength="12" />
                                    </Form.Group>
                                </Col>
                                <Col xs={6}>
                                    <Form.Group controlId="formEmailAddress">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" name="email" onChange={this.handleChange}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                            </Row>
                            <Row>
                                <Col xs={6}>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default RegistrationForm;
