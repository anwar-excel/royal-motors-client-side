
import './App.css';
import Header from './Components/Home/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Services from './Components/Services/Services';
import Details from './Components/Details/Details';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Explore from './Components/Explore/Explore';
import AddServices from './Components/AddService/AddServices';
import MyBookings from './Components/MyBookings/MyBookings';
import Reviews from './Components/Home/Reviews/Reviews';
import DashBoard from './Components/DashBoard/DashBoard/DashBoard';
import MakeAdmin from './Components/DashBoard/MakeAdmin/MakeAdmin';
import AddStaff from './Components/DashBoard/AddStaff/AddStaff';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/dashboard/makeadmin">
              <MakeAdmin />
            </Route>
            <Route exact path="/dashboard/addstaff">
              <AddStaff />
            </Route>
            <Route exact path="/dashboard/addstaff/:staffId">
              <AddStaff />
            </Route>
            <Route exact path="/addServices">
              <AddServices></AddServices>
            </Route>
            <Route exact path="/contact">
              <AddServices></AddServices>
            </Route>
            <Route exact path="/myorders">
              <MyBookings></MyBookings>
            </Route>
            {/* <Route exact path="/services/">
              <Services></Services>
            </Route> */}
            <Route exact path="/services/:serviceId">
              <Details></Details>
            </Route>
            <Route exact path="/explore">
              <Explore />
            </Route>
            <Route exact path="/reviews">
              <Reviews />
            </Route>
            <Route exact path="/dashboard">
              <DashBoard />
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div >
  );
}

export default App;
