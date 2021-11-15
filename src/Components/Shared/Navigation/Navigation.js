import * as React from 'react';


import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useauth';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

export default function Navigation() {
    const { user, Logout } = useAuth()
    return (
        <>


            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Royal Motors</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link as={Link} to="/myorders">My Orders</Nav.Link>
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                        <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Add Services</Nav.Link>
                        {
                            user?.email ? <Button onClick={Logout} color="inherit">Login</Button>
                                :
                                <NavLink to="/login"><Button color="inherit">Login</Button></NavLink>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}