import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from '../components/Header';
import Home from '../pages/Home';
import PageNotFound from '../pages/NotFound'
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';


const AppRouter = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Redirect strict from="/home" to="/" />
          <Route path="/checkout" component={ Checkout } />
          <Route path="/login" component={ Login }/>
          <Route path='*' component={PageNotFound}  />
        </Switch>
      </Router>
   </div>
  )
}

export default AppRouter