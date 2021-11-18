import React from 'react';
import { Button } from 'react-bootstrap';
import './DashBoard.css';
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


            <div className="left-align">
                <Link to={`${url}`}><Button className="margin" color="inherit">Dashboard</Button></Link><br />
                <Link to={`${url}/makeAdmin`}><Button className="margin" color="inherit">Make Admin</Button></Link><br />
                <Link to={`${url}/addstaff`}><Button className="margin" color="inherit">Add Staff</Button></Link>
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