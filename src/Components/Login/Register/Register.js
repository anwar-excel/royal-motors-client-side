
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import './Register.css';
import useAuth from '../../../hooks/useauth';
import loginImg from '../../../images/login/login.png';




const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container className="register">

            <Row>
                <Form style={{ height: '50%', width: '50%' }} onSubmit={handleLoginSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control className="login" type="text" name="name" placeholder="Enter email" onBlur={handleOnBlur} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control className="login" type="email" name="email" placeholder="Enter email" onBlur={handleOnBlur} />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control className="login" type="password" name="password" placeholder="Password" onBlur={handleOnBlur} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <img style={{ height: '50%', width: '50%' }} src={loginImg} alt="" />
            </Row>
        </Container>
    );
};

export default Register;

