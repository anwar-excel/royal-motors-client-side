// import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import useAuth from '../../../hooks/useauth';
import loginImg from '../../../images/login/login.png';

const Login = () => {
    const [loginData, setLoginData] = useState({});

    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory()
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginUser.password, location, history);
        console.log(loginData);
        e.preventDefault();
    }
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    return (
        <>




            <Container className="login">

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

        </>
    );
};

export default Login;
