import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Home = () => <div>HOME!</div>;
const Test = () => <div>TEST!</div>;

class App extends Component {
  public render() {
    return (
      <Router>
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className='App-link'
              href='https://reactjs.org'
              target='_blank'
              rel='noopener noreferrer'
            >
              Learn React
            </a>

            <Link to="/">Home</Link>
            <Link to="/test">Test</Link>

            <Button>Click ME!!!</Button>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/test" component={Test} />
            </Switch>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
