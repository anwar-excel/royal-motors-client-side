
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
            <Route exact path="/addServices">
              <AddServices></AddServices>
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
          </Switch>
        </BrowserRouter>
      </AuthProvider>

    </div >
  );
}

export default App;
