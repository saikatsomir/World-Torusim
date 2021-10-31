import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import DestinationCart from './pages/DestinationCart/DestinationCart';
import DestinationDetails from './pages/DestinationDetails/DestinationDetails';
import About from './pages/Home/About/About';
import Fotter from './pages/Home/Fotter/Fotter';
import Nevbars from './pages/Home/Header/Navbar/Navbar';
import Home from './pages/Home/Home/Home';
import Main from './pages/Home/Main/Main';
import Login from './pages/Login/Login/Login';
import PrivetRoute from './pages/Login/PrivetRoute/PrivetRoute';
import Shedule from './pages/Shedule/Shedule';
import Manage from './pages/SheduleTime/Manage';
import SheduleTime from './pages/SheduleTime/Manage';

function App() {
  return (
    <div>
      <AuthProvider>
         
    <Router>
          <Nevbars></Nevbars>
        <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/shedule">
              <Shedule/>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Main></Main>
            </Route>
            <Route path="/manage">
              <Manage></Manage>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivetRoute path="/detail/:id">
              <DestinationDetails></DestinationDetails>
            </PrivetRoute>
            <PrivetRoute path="/details/:id">
              <DestinationCart></DestinationCart>
            </PrivetRoute>
            <PrivetRoute path="/deta/:id">
              <SheduleTime></SheduleTime>
            </PrivetRoute>
            <Route paht="/login">
              <Login></Login>
            </Route>
        </Switch>
        <Fotter></Fotter>
      </Router>
  
      </AuthProvider>
    </div>
  );
}

export default App;
