import React from 'react';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Category from './pages/Category';
import Myroute from './components/Myroute';

import axios from 'axios';



import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Details from './pages/Details';
import Login from './pages/Login';
import Registration from './pages/Registration';
  


class App extends React.Component {


    render() {

        return (
            <>
                <BrowserRouter>
                    <Header/>

                        <Route exact path='/'><Home/></Route>
                        <Route path='/contact'><Contact/></Route>
                        <Route path='/category'><Category/></Route>
                        <Route path='/details'><Details/></Route>
                        <Route path='/login'><Login/></Route>
                        <Route path='/registration'><Registration/></Route>

                    <Footer/>

                </BrowserRouter>
            </>
        );
    }


}
export default App;



