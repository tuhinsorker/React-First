import React from 'react';
import axios from 'axios';
import Header from './Header';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Countrylist:[],
            name_email:'',
            pass:''
        };
    }

    componentDidMount(){

        axios.get('http://localhost/nationnews24/app/userlist')
        .then(res=>{
            console.log(res);
        })
        .catch(error=>{

            console.log(error)
            
        })


      
    }



    Addstudent(e){  

        const pdata = {name_email:this.state.name_email,pass:this.state.pass};

        console.log(pdata);
        axios.post('http://localhost/nationnews24/app/userlist/', {pdata})  
        .then(json => {

            console.log(json);

            // if(json.data.status==='OK'){  
                
            //     console.log(json.data.status);  
            //     alert("Data Save Successfully");  

            //     this.props.history.push('/Studentlist')  
            // }  
            // else{  
            //     alert('Data not Saved');  
            //     debugger;  
            //     this.props.history.push('/Studentlist')  
            // }  
        })  
    }  

    handleChange= (e)=> {  
        this.setState({[e.target.name]:e.target.value});  
    }

    render() {
        return (
            <div>
                
        <section className="block-inner">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>Login & Registration</h1>
                        <div className="breadcrumbs">
                            <ul>
                                <li><i className="pe-7s-home"></i> <a href="home-style-one.html" title="">Home</a></li>
                                <li><a href="#" title="">Login & Registration</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="login-reg-inner">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="login-form-inner">
                            <h3 className="category-headding ">LOGIN TO YOUR ACCOUNT</h3>
                            <div className="headding-border bg-color-1"></div>
                            <form>
                                <label>Username Or Email  <sup>*</sup></label>
                                <input type="text" className="form-control" id="name_email" name="name_email" placeholder="Username or Email"/>
                                <label>Password <sup>*</sup></label>
                                <input type="password" className="form-control" id="pass" name="pass" placeholder="*******"/>
                                <label className="checkbox-inline">
                                    <input type="checkbox" value=""/>Remember me</label>
                                <button type="button" className="btn btn-style">Login</button>
                                <div className="foeget"><a href="#">Forget username/password?</a></div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="social_icon">
                                            <div className="social_icon_box social_icon_box_1">
                                                <div className="icon facebook-icon"></div>
                                                <span className="social_info">Login with facebook</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="social_icon">
                                            <div className="social_icon_box social_icon_box_2">
                                                <div className="icon twitter-icon"></div>
                                                <span className="social_info">Login with twitter</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="register-form-inner">
                            <h3 className="category-headding ">REGISTER NOW!</h3>
                            <div className="headding-border bg-color-1"></div>
                            <form>
                                <label>Username Or Email : {this.state.name_email} <sup>*</sup></label>
                                <input type="text" className="form-control" id="name_email_2" name="name_email" onChange={this.handleChange} value={this.state.name_email}  placeholder="Username or Email"/>
                                <label>Password : {this.state.pass} <sup>*</sup></label>
                                <input type="password" className="form-control" id="pass_2" name="pass" onChange={this.handleChange} value={this.state.pass}  placeholder="Write Your Password Here ..."/>
                                <button type="button" onClick={this.Addstudent} className="btn btn-style">Register Now!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>


            </div>
        );
    }
}


export default Login;
