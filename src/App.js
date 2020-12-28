import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import CountryInfo from './countryInfo';
import CountryList from './countryList';

function App() {


  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path="/" exact component={CountryList} />
          <Route path="/:country" component={CountryInfo} />
          <Route path="/" render={() => 
            <div>
              <h1>Error: 404</h1>
              <h2>Page Not Found</h2>
              <h3><a href="/covid-info">Go Back</a></h3>
            </div>
            } 
          />
        </Switch>
      </div>
    </Router>
  );
  
}

export default App;