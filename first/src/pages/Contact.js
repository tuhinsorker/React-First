import React from 'react';
import PropTypes from 'prop-types';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                
        <section class="block-inner">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <h1>Contact</h1>
                        <div class="breadcrumbs">
                            <ul>
                                <li><i class="pe-7s-home"></i> <a href="home-style-one.html" title="">Home</a></li>
                                <li><a href="#" title="">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="contact-title">
                        <h2>Get In Touch</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="contact-address">
                        <h3>Address</h3>
                        <i class="pe-7s-map-2 top-icon"></i>
                        <ul>
                            <li>14L.E Goulburn St, </li>
                            <li>Sydney 2000NSW</li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="contact-address">
                        <h3>Phone</h3>
                        <i class="pe-7s-headphones top-icon"></i>
                        <ul>
                            <li><i class="fa fa-mobile"></i> +8801620214460</li>
                            <li><i class="fa fa-mobile"></i> +8801821450144</li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="contact-address">
                        <h3>Email</h3>
                        <i class="pe-7s-global top-icon"></i>
                        <ul>
                            <li><i class="fa fa-envelope-o"></i> bdtask@gmail.com</li>
                            <li><i class="fa fa-globe"></i> www.companyweb.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="container">
            <div class="row">
                <div class="col-sm-8">
                    <div class="contact-form-area">
                        <form>
                            <div class="row">
                                <div class="col-sm-6">
                                    <span class="input">
                                        <input class="input_field" type="text" id="input-1"/>
                                        <label class="input_label" for="input-1">
                                            <span class="input_label_content" id="f_name" data-content="First Name">First Name</span>
                                        </label>
                                    </span>
                                </div>
                                <div class="col-sm-6">
                                    <span class="input">
                                        <input class="input_field" type="text" id="input-2"/>
                                        <label class="input_label" for="input-2">
                                            <span class="input_label_content" id="l_name" data-content="Last Name">Last Name</span>
                                        </label>
                                    </span>
                                </div>
                                <div class="col-sm-6">
                                    <span class="input">
                                        <input class="input_field" type="text" id="input-3"/>
                                        <label class="input_label" for="input-3">
                                            <span class="input_label_content" id="emai" data-content="Your Email">Your Email</span>
                                        </label>
                                    </span>
                                </div>
                                <div class="col-sm-6">
                                    <span class="input">
                                        <input class="input_field" type="text" id="input-4"/>
                                        <label class="input_label" for="input-4">
                                            <span class="input_label_content" id="subject" data-content="Subject">Subject</span>
                                        </label>
                                    </span>
                                </div>
                                <div class="col-sm-12">
                                    <span class="input">
                                        <textarea class="input_field" id="message"></textarea>
                                        <label class="input_label" for="message">
                                            <span class="input_label_content" data-content="Your Email">Your Message</span>
                                        </label>
                                    </span>
                                    <button type="button" class="btn btn-style">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div id="map"></div>
                </div>
            </div>
        </div>

            </div>
        );
    }
}

Contact.propTypes = {};

export default Contact;
