import React from 'react';

class Footer extends React.Component {


    render() {
        return (
            <>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="footer-box footer-logo-address">
                                    
                                    <img src="assets/images/footer-logo.png" className="img-responsive" alt=""/>
                                    <address>
                                        14L.E Goulburn St, Sydney 2000NSW
                                        <br/> Tell: 01922296392
                                        <br/> Email: bdtask@gmail.com
                                    </address>
                                </div>
                            
                            </div>
                            <div className="col-sm-5">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="footer-box">
                                            <h3 className="category-headding">categories</h3>
                                            <div className="headding-border bg-color-4"></div>
                                            <ul>
                                                <li><i className="fa fa-dot-circle-o"></i><a href="#">Newsletter</a></li>
                                                <li><i className="fa fa-dot-circle-o"></i><a href="#">Pressroom</a></li>
                                                <li><i className="fa fa-dot-circle-o"></i><a href="#">Advertise online</a></li>
                                                <li><i className="fa fa-dot-circle-o"></i><a href="#">Language</a></li>
                                                <li><i className="fa fa-dot-circle-o"></i><a href="#">Being Part</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="footer-box">
                                            <h3 className="category-headding">POPULAR CATEGORY</h3>
                                            <div className="headding-border bg-color-5"></div>
                                            <ul>
                                                <li><i className="fa fa-dot-circle-o"></i><a href="#">Digital Edition</a></li>
                                                <li><i className="fa fa-dot-circle-o"></i><a href="#">Site Map</a></li>
                                                <li><i className="fa fa-dot-circle-o"></i><a href="#">About Ads</a></li>
                                                <li><i className="fa fa-dot-circle-o"></i><a href="#">Give a Gift</a></li>
                                                <li><i className="fa fa-dot-circle-o"></i><a href="#">About Us</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="footer-box">
                                    
                                    <h3 className="category-headding ">FEATURED NEWS</h3>
                                    <div className="headding-border bg-color-2"></div>
                                    <div className="box-item wow fadeIn" data-wow-duration="1s">
                                        <div className="img-thumb">
                                            <a href="#" rel="bookmark"><img className="entry-thumb" src="assets/images/popular_news_01.jpg" alt="" height="80" width="100"/></a>
                                        </div>
                                        <div className="item-details">
                                            <h6 className="sub-category-title bg-color-1">
                                                <a href="#">SPORTS</a>
                                            </h6>
                                            <h3 className="td-module-title"><a href="#">It is a long established fact that a reader will</a></h3>
                                            <div className="post-editor-date">
                                                
                                                <div className="post-date">
                                                    <i className="pe-7s-clock"></i> Oct 6, 2016
                                                </div>
                                                
                                                <div className="post-author-comment"><i className="pe-7s-comment"></i> 13 </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                                        <div className="img-thumb">
                                            <a href="#" rel="bookmark"><img className="entry-thumb" src="assets/images/popular_news_02.jpg" alt="" height="80" width="100"/></a>
                                        </div>
                                        <div className="item-details">
                                            <h6 className="sub-category-title bg-color-2">
                                                <a href="#">TECHNOLOGY </a>
                                            </h6>
                                            <h3 className="td-module-title"><a href="#">The generated Lorem Ipsum is therefore</a></h3>
                                            <div className="post-editor-date">
                                                
                                                <div className="post-date">
                                                    <i className="pe-7s-clock"></i> Oct 6, 2016
                                                </div>
                                                
                                                <div className="post-author-comment"><i className="pe-7s-comment"></i> 13 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </footer>
                
                <div className="sub-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <p><a href="http://bdtask.com/" className="color-1">bdtask</a> Theme | All right Reserved 2016</p>
                                <div className="social">
                                    <ul>
                                        <li><a href="#" className="facebook"><i className="fa  fa-facebook"></i> </a></li>
                                        <li><a href="#" className="twitter"><i className="fa  fa-twitter"></i></a></li>
                                        <li><a href="#" className="google"><i className="fa  fa-google-plus"></i></a></li>
                                        <li><a href="#" className="flickr"><i className="fa fa-flickr"></i></a></li>
                                        <li><a href="#" className="youtube"><i className="fa fa-youtube"></i></a></li>
                                        <li><a href="#" className="vimeo"><i className="fa fa-vimeo"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Footer;
