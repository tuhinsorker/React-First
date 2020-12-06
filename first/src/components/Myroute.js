import React from 'react';
import Category from '../pages/Category';

import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
  

class Myroute extends React.Component {
  
    render() {
        return (
            <>
                <Route exact path='/'/>
                <Route path='/category'/>
            </>
        );
    }
}


export default Myroute;
