import React from 'react';
import axios from 'axios';
import Header from './Header';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            name:'',
            name_email:'',
            pass:'',
            lemail:'',
            lpass:''
        };
    }

    // componentDidMount(){

    //     axios.get('http://localhost/nationnews24/app/userlist')
    //     .then(res=>{
    //         console.log(res);
    //     })
    //     .catch(error=>{

    //         console.log(error)
            
    //     })
      
    // }



    Addstudent=(e)=>{

        axios.post('http://localhost/nationnews24/app/saveData/', {name:this.state.name,name_email:this.state.name_email,pass:this.state.pass})  
        .then(res => {

            if(res.data.status==='error'){
                alert(res.data.error);
            }else{
                alert('Registration successfull');
            }

        })
        .catch(error=>{
            console.log(error);
        })

    }  


    
    LoginUser=(e)=>{
        axios.post('http://localhost/nationnews24/app/userLogin/', {name_email:this.state.lemail,pass:this.state.lpass})  
        .then(res => {
            if(res.data.status==='error'){
                alert(res.data.message);
            }else{
                console.log(res.data);
                alert('Login successfully');
            }
        })
        .catch(error=>{
            console.log(error);
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
                                <input type="text" className="form-control" id="lemail" name="lemail" onChange={this.handleChange} placeholder="Username or Email"/>
                                <label>Password <sup>*</sup></label>
                                <input type="password" className="form-control" id="lpass" name="lpass" onChange={this.handleChange} placeholder="*******"/>
                                <label className="checkbox-inline"></label>
                                <button type="button" onClick={this.LoginUser} className="btn btn-style">Login</button>
                                <div className="foeget"><a href="#">Forget username/password?</a></div>
                               
                            </form>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="register-form-inner">
                            <h3 className="category-headding ">REGISTER NOW!</h3>
                            <div className="headding-border bg-color-1"></div>
                            <form>

                                <label>Full Name : {this.state.name} <sup>*</sup></label>
                                <input type="text" className="form-control" id="name" name="name" onChange={this.handleChange} value={this.state.name}  placeholder="Username or Email"/>

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
