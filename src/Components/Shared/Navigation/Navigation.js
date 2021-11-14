import * as React from 'react';


import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useauth';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

export default function Navigation() {
    const { user, Logout } = useAuth()
    return (
        <>
            {/* <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h2" component="div" sx={{ flexGrow: 1, padding: '5px' }}>
                            Royal Motors
                        </Typography>
                        
                    </Toolbar>
                </AppBar>
            </Box> */}

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
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