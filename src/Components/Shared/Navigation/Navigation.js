import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useauth';

export default function Navigation() {
    const { user, Logout } = useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
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
                    {
                        user?.email ? <Button onClick={Logout} color="inherit">Login</Button>
                            :
                            <NavLink to="/login"><Button color="inherit">Login</Button></NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}