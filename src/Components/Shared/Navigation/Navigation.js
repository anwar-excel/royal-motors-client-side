import * as React from 'react';

import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useauth';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

export default function Navigation() {
    const { user, logout } = useAuth()
    return (
        <>


            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Royal Motors</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" >Home</Nav.Link>

                        <Nav.Link as={Link} to="/myorders">My Orders</Nav.Link>
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                        <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Add Services</Nav.Link>
                        {
                            user?.email ?


                                <Button onClick={logout} color="inherit">Logout</Button>

                                :
                                <NavLink to="/login"><Button color="inherit">Login</Button></NavLink>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}