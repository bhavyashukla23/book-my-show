import React from 'react';
import {BrowserRouter as Router , Route , Switch } from 'express';
import Movies from './Pages/MoviesList';
import Booking from './Pages/BookingPage';

function App() {

  return (
   <Router>
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Movies}/>
        <Route path='/book/:id' component={Booking}/>
      </Switch>
    </div>
    </Router>
  );
};

export default App
