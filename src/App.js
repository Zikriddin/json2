import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Menu from './pages/Menu';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="dashboard/home" />
          </Route>

          <Route path="/dashboard/:menu">
            <Menu />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
