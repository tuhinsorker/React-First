import React from 'react';
import axios from 'axios';

class Category extends React.Component {

    constructor() {
        super();
        this.state = {
            newsList:[],
            cat_slug:'international'
        };
    }

    componentDidMount(){

        axios.get(`http://localhost/nationnews24/app/newslist_by_category?cat_slug=${this.state.cat_slug}`)
        .then(res=>{
            this.setState({newsList:res.data})
            console.log(res);
        })
        .catch(error=>{
            console.log(error)
        })
      
    }

   

    render() {

        const mylist = this.state.newsList;
        const cname = mylist.map((mylist)=>{
            return(
                <>
                    <div class="post-style2 wow fadeIn" data-wow-duration="1s">
                        <a href="#"><img src={mylist.image_thumb} alt=""/></a>
                        <div class="post-style2-detail">
                            <h3><a href="#" title="">{mylist.title}</a></h3>
                            <div class="date">
                                <ul>
                                    <li><img src={mylist.post_by_photo} class="img-responsive" alt=""/></li>
                                    <li>By <a title="" href="#"><span>{mylist.post_by_name}</span></a> --</li>
                                    <li><a title="" href="#">{mylist.post_date}</a> --</li>
                                </ul>
                            </div>
                            <p>{mylist.short_news}</p>
                            <button type="button" class="btn btn-style">Reade more</button>
                        </div>
                    </div>
                </>
           

            )
        })

        
        return (
            <>
                    
        <section class="block-inner">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <h1>Fashion News</h1>
                        <div class="breadcrumbs">
                            <ul>
                                <li><i class="pe-7s-home"></i> <a href="home-style-one.html" title="">Home</a></li>
                                <li><a href="#" title="">Fashion</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="container">
            <div class="row">
                <div class="col-sm-8 theiaContent">

                    {cname}
                   
                </div>
                <aside class="col-sm-4 left-padding rightSidebar">
                    <div class="input-group search-area">
                        <input type="text" class="form-control" placeholder="Search articles here ..." name="q"/>
                        <div class="input-group-btn">
                            <button class="btn btn-search" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                        </div>
                    </div>
                    <h3 class="category-headding ">SOCIAL PIXEL</h3>
                    <div class="headding-border"></div>
                    <div class="social">
                        <ul>
                            <li><a href="#" class="facebook"><i class="fa  fa-facebook"></i><span>3987</span> </a></li>
                            <li><a href="#" class="twitter"><i class="fa  fa-twitter"></i><span>3987</span></a></li>
                            <li><a href="#" class="google"><i class="fa  fa-google-plus"></i><span>3987</span></a></li>
                            <li><a href="#" class="flickr"><i class="fa fa-flickr"></i><span>3987</span> </a></li>
                        </ul>
                    </div>
                    <div class="tab-inner">
                        <ul class="tabs">
                            <li><a href="#">POPULAR</a></li>
                            <li><a href="#">MOST VIEWED</a></li>
                        </ul>
                        <hr/>
                        <div class="tab_content">
                            <div class="tab-item-inner">
                                <div class="box-item wow fadeIn" data-wow-duration="1s">
                                    <div class="img-thumb">
                                        <a href="#" rel="bookmark"><img class="entry-thumb" src="assets/images/popular_news_01.jpg" alt="" height="80" width="90"/></a>
                                    </div>
                                    <div class="item-details">
                                        <h6 class="sub-category-title bg-color-1">
                                            <a href="#">SPORTS</a>
                                        </h6>
                                        <h3 class="td-module-title"><a href="#">It is a long established fact that a reader will</a></h3>
                                        <div class="post-editor-date">
                                            <div class="post-date">
                                                <i class="pe-7s-clock"></i> Oct 6, 2016
                                            </div>
                                            <div class="post-author-comment"><i class="pe-7s-comment"></i> 13 </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                                    <div class="img-thumb">
                                        <a href="#" rel="bookmark"><img class="entry-thumb" src="assets/images/popular_news_02.jpg" alt="" height="80" width="90"/></a>
                                    </div>
                                    <div class="item-details">
                                        <h6 class="sub-category-title bg-color-2">
                                            <a href="#">TECHNOLOGY </a>
                                        </h6>
                                        <h3 class="td-module-title"><a href="#">The generated Lorem Ipsum is therefore</a></h3>
                                        <div class="post-editor-date">
                                            <div class="post-date">
                                                <i class="pe-7s-clock"></i> Oct 6, 2016
                                            </div>
                                            <div class="post-author-comment"><i class="pe-7s-comment"></i> 13 </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                                    <div class="img-thumb">
                                        <a href="#" rel="bookmark"><img class="entry-thumb" src="assets/images/popular_news_03.jpg" alt="" height="80" width="90"/></a>
                                    </div>
                                    <div class="item-details">
                                        <h6 class="sub-category-title bg-color-3">
                                            <a href="#">HEALTH</a>
                                        </h6>
                                        <h3 class="td-module-title"><a href="#">The standard chunk of Lorem Ipsum used since</a></h3>
                                        <div class="post-editor-date">
                                            <div class="post-date">
                                                <i class="pe-7s-clock"></i> Oct 6, 2016
                                            </div>
                                            <div class="post-author-comment"><i class="pe-7s-comment"></i> 13 </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                                    <div class="img-thumb">
                                        <a href="#" rel="bookmark"><img class="entry-thumb" src="assets/images/popular_news_04.jpg" alt="" height="80" width="90"/></a>
                                    </div>
                                    <div class="item-details">
                                        <h6 class="sub-category-title bg-color-4">
                                            <a href="#">FASHION</a>
                                        </h6>
                                        <h3 class="td-module-title"><a href="#">Lorem Ipum therefore always free from</a></h3>
                                        <div class="post-editor-date">
                                            <div class="post-date">
                                                <i class="pe-7s-clock"></i> Oct 6, 2016
                                            </div>
                                            <div class="post-author-comment"><i class="pe-7s-comment"></i> 13 </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-item-inner">
                                <div class="box-item">
                                    <div class="img-thumb">
                                        <a href="#" rel="bookmark"><img class="entry-thumb" src="assets/images/popular_news_01.jpg" alt="" height="80" width="90"/></a>
                                    </div>
                                    <div class="item-details">
                                        <h6 class="sub-category-title bg-color-5">
                                            <a href="#">BUSINESS</a>
                                        </h6>
                                        <h3 class="td-module-title"><a href="#">It is a long established fact that a reader will</a></h3>
                                        <div class="post-editor-date">
                                            <div class="post-date">
                                                <i class="pe-7s-clock"></i> Oct 6, 2016
                                            </div>
                                            <div class="post-author-comment"><i class="pe-7s-comment"></i> 13 </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-item">
                                    <div class="img-thumb">
                                        <a href="#" rel="bookmark"><img class="entry-thumb" src="assets/images/popular_news_02.jpg" alt="" height="80" width="90"/></a>
                                    </div>
                                    <div class="item-details">
                                        <h6 class="sub-category-title bg-color-2">
                                            <a href="#">TECHNOLOGY </a>
                                        </h6>
                                        <h3 class="td-module-title"><a href="#">The generated Lorem Ipsum is therefore</a></h3>
                                        <div class="post-editor-date">
                                            <div class="post-date">
                                                <i class="pe-7s-clock"></i> Oct 6, 2016
                                            </div>
                                            <div class="post-author-comment"><i class="pe-7s-comment"></i> 13 </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-item">
                                    <div class="img-thumb">
                                        <a href="#" rel="bookmark"><img class="entry-thumb" src="assets/images/popular_news_03.jpg" alt="" height="80" width="90"/></a>
                                    </div>
                                    <div class="item-details">
                                        <h6 class="sub-category-title bg-color-3">
                                            <a href="#">HEALTH</a>
                                        </h6>
                                        <h3 class="td-module-title"><a href="#">The standard chunk of Lorem Ipsum used since</a></h3>
                                        <div class="post-editor-date">
                                            <div class="post-date">
                                                <i class="pe-7s-clock"></i> Oct 6, 2016
                                            </div>
                                            <div class="post-author-comment"><i class="pe-7s-comment"></i> 13 </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-item">
                                    <div class="img-thumb">
                                        <a href="#" rel="bookmark"><img class="entry-thumb" src="assets/images/popular_news_04.jpg" alt="" height="80" width="90"/></a>
                                    </div>
                                    <div class="item-details">
                                        <h6 class="sub-category-title bg-color-4">
                                            <a href="#">FASHION</a>
                                        </h6>
                                        <h3 class="td-module-title"><a href="#">Lorem Ipum therefore always free from</a></h3>
                                        <div class="post-editor-date">
                                            <div class="post-date">
                                                <i class="pe-7s-clock"></i> Oct 6, 2016
                                            </div>
                                            <div class="post-author-comment"><i class="pe-7s-comment"></i> 13 </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="banner-add">
                        <span class="add-title">- Advertisement -</span>
                        <a href="#"><img src="assets/images/ad-banner.jpg" class="img-responsive center-block" alt=""/></a>
                    </div>
                </aside>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <ul class="pagination">
                            <li>
                                <a href="#" class="prev">
                                    <i class="pe-7s-angle-left"></i>
                                </a>
                            </li>
                            <li> <a href="#">1</a></li>
                            <li> <a href="#" class="active">2</a></li>
                            <li> <a href="#">3</a></li>
                            <li> <a href="#">4</a></li>
                            <li> ... </li>
                            <li> <a href="#">15</a></li>
                            <li>
                                <a href="#" class="next"> <i class="pe-7s-angle-right"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-12">
                        <div class="banner">
                            <img src="assets/images/top-bannner2.jpg" class="img-responsive center-block" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                
            </>
        );
    }
}

Category.propTypes = {};

export default Category;
