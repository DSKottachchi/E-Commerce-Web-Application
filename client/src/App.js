import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import NotFound from './pages/NotFound/NotFound';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Redirect to="/home"/>
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/detail/:productId">
          <Detail />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
