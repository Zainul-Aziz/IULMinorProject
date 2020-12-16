import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
class SignUp extends Component {
    constructor()
    {
        super();
        this.state = {
            username:'',
            email:'',
            mob:'',
            pass:'',
            cpass:''            
        }
        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeMobile = this.changeMobile.bind(this);
        this.changePass = this.changePass.bind(this);
        this.changeCpass = this.changeCpass.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    changeName(event){
        this.setState({
            username:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }    
    changeMobile(event){
        this.setState({
            mob:event.target.value
        })
    }
    changePass(event){
        this.setState({
            pass:event.target.value
        })
    }
    changeCpass(event){
        this.setState({
            cpass:event.target.value
        })
    }
    onSubmit(event)
    {
        event.preventDefault();
        const registered = {
            username:this.state.username,
            email:this.state.email,
            mob:this.state.mob,
            pass:this.state.pass,
            cpass:this.state.cpass
        }
        alert(`Registered Successfully.Your username is ${this.state.email}`);

        axios.post("http://localhost:4000/app/signup",registered)
        .then(response => console.log(response.data))

        this.setState({
            username:'',
            email:'',
            mob:'',
            pass:'',
            cpass:''
        })
        window.location.href = "/Home";
    }
    render(){
        return(
            <div className="container">
        <h2 className="text-center mt-3">User Signup</h2>

        {/* <hr className="mx-auto w-50"/> */}
        <div className="row mb-5">
            <div className="col-lg-6 col-md-6 col-12 m-auto">
                <form onSubmit={this.onSubmit}>
                    <div id="main_div" className="form-group from-label-group">
                        <label for="uname">Username </label>
                        <input type="text" name="username" onChange={this.changeName} value={this.state.name} className="form-control" placeholder="username"
                            autocomplete="off" required/>
                    </div>
                    <div className="form-group from-label-group">
                        <label for="email">Email </label>
                        <input type="text" name="email" onChange={this.changeEmail} value={this.state.email} className="form-control" placeholder="email" autocomplete="off"
                            required/>
                    </div>
                    <div className="form-group from-label-group">
                        <label for="mob">Contact Number </label>
                        <input type="text" name="mob" onChange={this.changeMobile} value={this.state.mob} className="form-control" placeholder="contact number"
                            autocomplete="off" required/>
                    </div>
                    <div className="form-group from-label-group">
                        <label for="pass">Password </label>
                        <input type="password" name="pass" onChange={this.changePass} value={this.state.pass} className="form-control" placeholder="password" required/>
                    </div>
                    <div className="form-group from-label-group">
                        <label for="cpass">Confirm Password </label>
                        <input type="password" name="cpass" onChange={this.changeCpass} value={this.state.cpass} className="form-control" placeholder="confirm password"
                            required/>
                    </div>
                    <div className="form-group from-label-group">
                        <input type="submit" className="btn btn-primary" value="Submit" />
                    </div>
                </form>
            </div>            
            </div>
            </div>
        );
    }
}
export default SignUp;