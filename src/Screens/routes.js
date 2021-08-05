import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from '../App';
import "../App.css";

 
 const Routes = () => {
    return (
      <div >
       <BrowserRouter>
        <Route exact path="/"  component={App} />
       </BrowserRouter>
       </div>
    );
};

export default Routes

