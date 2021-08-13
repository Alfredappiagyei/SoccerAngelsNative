import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from '../App';
import Contacts from './Contacts';
import Gallery from './Gallery';
import "../App.css";


 
 const Routes = () => {
    return (
      <div >
       <BrowserRouter>
        <Route exact path="/"  component={App} />
        <Route exact path="/contacts"  component={Contacts} />
        <Route exact path="/gallery"  component={Gallery} />
       </BrowserRouter>
       </div>
    );
};

export default Routes

