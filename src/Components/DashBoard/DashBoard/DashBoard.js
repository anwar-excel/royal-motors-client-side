import React from 'react';
import { Button } from 'react-bootstrap';
import DashBoardHome from '../DashBoardHome/DashBoardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import AddStaff from '../AddStaff/AddStaff';

const DashBoard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <div>
                <Link to="/appointment"><Button color="inherit">Appointment</Button></Link>
                <Link to={`${url}`}><Button color="inherit">Dashboard</Button></Link>
                <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                <Link to={`${url}/addstaff`}><Button color="inherit">Add Staff</Button></Link>
            </div>
            {/* <Switch>
                <Route exact path={path}>
                    <DashBoardHome></DashBoardHome>
                </Route>
                <Route path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </Route>
                <Route path={`${path}/addDoctor`}>
                    <AddStaff></AddStaff>
                </Route>
            </Switch> */}
        </div>
    );
};

export default DashBoard;