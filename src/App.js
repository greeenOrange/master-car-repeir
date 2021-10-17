
import './App.css';
import Home from './Components/Home/MainHome/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PageNotFound from './Components/Home/NotFound/PageNotFound';
import Booking from './Components/Home/Booking/Booking';
import Login from './Components/Login/Login';
import Header from './Components/Shared/Header';
import AuthProvider from './Context/AuthProvider';
import PriveteRoute from './Components/Login/PrivetRoute/PriveteRoute';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
    <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route  path='/home'>
          <Home></Home>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <PriveteRoute path='/booking/:bookingId'>
          <Booking></Booking>
        </PriveteRoute>
        <Route path='*'>
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
