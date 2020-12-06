import React from 'react';
import Category from './Category';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
  
class Header extends React.Component {

    render() {
        return (
            <>
                <div className="se-pre-con"></div>
                <header>
                    <div className="mobile-menu-area navbar-fixed-top hidden-sm hidden-md hidden-lg">

                        <nav className="mobile-menu" id="mobile-menu">
                            <div className="sidebar-nav">
                                <ul id="metismenu" className="nav side-menu">
                                    <li className="sidebar-search">
                                        <div className="input-group custom-search-form">
                                            <input type="text" className="form-control" placeholder="Search..."/>
                                            <span className="input-group-btn">
                                                <button className="btn mobile-menu-btn" type="button">
                                                    <i className="fa fa-search"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </li>
                                    <li><a href="index.html">Home</a></li>
                                    <li>
                                        <div className="social">
                                            <ul>
                                                <li><a href="#" className="facebook"><i className="fa  fa-facebook"></i> </a></li>
                                                <li><a href="#" className="twitter"><i className="fa  fa-twitter"></i></a></li>
                                                <li><a href="#" className="google"><i className="fa  fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                        <div className="container">
                            <div className="top_header_icon">
                                <span className="top_header_icon_wrap">
                                    <a target="_blank" href="#" title="Twitter"><i className="fa fa-twitter"></i></a>
                                </span>
                                <span className="top_header_icon_wrap">
                                    <a target="_blank" href="#" title="Facebook"><i className="fa fa-facebook"></i></a>
                                </span>
                                <span className="top_header_icon_wrap">
                                    <a target="_blank" href="#" title="Google"><i className="fa fa-google-plus"></i></a>
                                </span>
                                <span className="top_header_icon_wrap">
                                    <a target="_blank" href="#" title="Vimeo"><i className="fa fa-vimeo"></i></a>
                                </span>
                                <span className="top_header_icon_wrap">
                                    <a target="_blank" href="#" title="Pintereset"><i className="fa fa-pinterest-p"></i></a>
                                </span>
                            </div>
                            <div id="showLeft" className="nav-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>

                    <div className="top_header hidden-xs">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-4 col-md-3">
                                    <div className="top_header_menu_wrap">
                                        <ul className="top-header-menu">
                                            <li><a href="login&registration.html">REGISTER</a></li>
                                            <li className="dropdown">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">LOGIN</a>
                                            </li>
                                            <li><Link to='/contact' >CONTACT</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-sm-8 col-md-7">
                                    <div className="newsticker-inner">
                                        <ul className="newsticker">
                                            <li><span className="color-1">Fashion</span><a href="#">Etiam imperdiet volutpat libero eu tristique.imperdiet volutpat libero eu tristique.</a></li>
                                            <li><span className="color-2">International</span><a href="#">Curabitur porttitor ante eget hendrerit adipiscing.</a></li>
                                            <li><span className="color-3">Health</span><a href="#">Praesent ornare nisl lorem, ut condimentum lectus gravida ut.</a></li>
                                            <li><span className="color-4">technology</span><a href="#">Nunc ultrices tortor eu massa placerat posuere.</a></li>
                                            <li><span className="color-1">Travel</span><a href="#">Etiam imperdiet volutpat libero eu tristique.imperdiet volutpat libero eu tristique.</a></li>
                                        </ul>
                                        <div className="next-prev-inner">
                                            <a href="#" id="prev-button"><i class='pe-7s-angle-left'></i></a>
                                            <a href="#" id="next-button"><i class='pe-7s-angle-right'></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-2">
                                    <div className="top_header_icon">
                                        <span className="top_header_icon_wrap">
                                            <a target="_blank" href="#" title="Twitter"><i className="fa fa-twitter"></i></a>
                                        </span>
                                        <span className="top_header_icon_wrap">
                                            <a target="_blank" href="#" title="Facebook"><i className="fa fa-facebook"></i></a>
                                        </span>
                                        <span className="top_header_icon_wrap">
                                            <a target="_blank" href="#" title="Google"><i className="fa fa-google-plus"></i></a>
                                        </span>
                                        <span className="top_header_icon_wrap">
                                            <a target="_blank" href="#" title="Vimeo"><i className="fa fa-vimeo"></i></a>
                                        </span>
                                        <span className="top_header_icon_wrap">
                                            <a target="_blank" href="#" title="Pintereset"><i className="fa fa-pinterest-p"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="top_banner_wrap">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-md-4 col-sm-4">
                                    <div className="header-logo">
                                        
                                        <a href="home-style-one.html">
                                            <img className="td-retina-data img-responsive" src="assets/images/logo.png" alt=""/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xs-8 col-md-8 col-sm-8 hidden-xs">
                                    <div className="header-banner">
                                        <a href="#"><img className="td-retina img-responsive" src="assets/images/top-bannner.jpg" alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <nav className="navbar header-sticky hidden-xs">
                        <div className="container">
                            <div className="collapse navbar-collapse">
                                <ul className="nav navbar-nav">

                                    <li className="active"><Link to='/' >Home</Link></li>
                                    <li><Link to='/category' >Category</Link></li>
                                    <li><Link to='/details' >Details</Link></li>
                                    <li><Link to='/login' >Login</Link></li>

                                    <li><Link to='/registration' >Registration</Link></li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                
                </header>

            </>
        );
    }
}


export default Header;
