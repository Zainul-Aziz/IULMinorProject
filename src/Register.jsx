import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
//const { request, response } = require("express");

// import Members from './Members';
//const Register = () => {

    // const [data,setData] = useState({
    //     number:"",
    //     // email:"",
    //     // contact:"",
    //     // query:""
    // });
    // const InputEvent = (event) => {
    //     console.log(event.target.value);
    //     const {name,value} = event.target;
    //     setData((preval) => {
    //         return {
    //             ...preval,
    //             [name]:value,
    //         };
    //     });
    // }
    // const formSubmit = (e) => {
    //     e.preventDefault();
    //     alert(`Hello ${data.name}, You are successfully registered.`);
    // }

    class Register extends Component 
    {
      constructor()
      {
          super();
          this.state = {
            fname:'',
            lname:'',
            uname:'',
            ucity:'',
            ustate:'',
            university:'',
            ucourse:'',
            ubranch:'',
            uyear:'',
            uevent:'',
            tname:'',
            tsize:''            
          }
          this.changeFname = this.changeFname.bind(this);
          this.changeLname = this.changeLname.bind(this);
          this.changeUname = this.changeUname.bind(this);
          this.changeCity = this.changeCity.bind(this);
          this.changeState = this.changeState.bind(this);
          this.changeUniv = this.changeUniv.bind(this);
          this.changeBranch = this.changeBranch.bind(this);
          this.changeCourse = this.changeCourse.bind(this);
          this.changeYear = this.changeYear.bind(this);
          this.changeEvent = this.changeEvent.bind(this);
          this.changeTname = this.changeTname.bind(this);
          this.changeTsize = this.changeTsize.bind(this);
          this.onSubmit = this.onSubmit.bind(this);
      }
      changeFname(event){
          this.setState({
              fname:event.target.value
          })
      }
      changeLname(event){
          this.setState({
              lname:event.target.value
          })
      }
      changeUname(event){
        this.setState({
            uname:event.target.value
        })
      }
    changeCity(event){
          this.setState({
              ucity:event.target.value
          })
      }
      changeState(event){
          this.setState({
              ustate:event.target.value
          })
      }
      changeUniv(event){
          this.setState({
              university:event.target.value
          })
      }
      changeBranch(event){
        this.setState({
            ubranch:event.target.value
        })
      }
      changeCourse(event){
        this.setState({
          ucourse:event.target.value
        })
      }
      changeYear(event){
        this.setState({
          uyear:event.target.value
        })
      }
      changeEvent(event){
        this.setState({
          uevent:event.target.value
        })
      }
      changeTname(event){
        this.setState({
          tname:event.target.value
        })
      }
      changeTsize(event){
          this.setState({
          tsize:event.target.value
        })
      }
      onSubmit(event)
      {        
          event.preventDefault();
          const registrationDetail = {
              fname:this.state.fname,
              lname:this.state.lname,
              uname:this.state.uname,
              ucity:this.state.ucity,
              ustate:this.state.ustate,
              university:this.state.university,
              ucourse:this.state.ucourse,
              ubranch:this.state.ubranch,
              uyear:this.state.uyear,
              uevent:this.state.uevent,
              tname:this.state.tname,
              tsize:this.state.tsize
          }  
          
          alert(`Congratulations..Team ${this.state.tname} is Successfully Registered in ${this.state.uevent}`);        
          axios.post("http://localhost:4000/app/registration",registrationDetail)
          .then(res => console.log(res.data))
          
          this.setState({
              fname:'',
              lname:'',
              uname:'',
              ucity:'',
              ustate:'',
              university:'',
              ucourse:'',
              ubranch:'',
              uyear:'',
              uevent:'',
              tname:'',
              tsize:''
          })
          window.location.href="/Home";
      }
      render(){
      return(
        <div className="container px-5">
        <h1 className="text-center mt-2 ">Event Registration Form</h1>
<form onSubmit={this.onSubmit} className="row g-3 mt-2">
  <div className="col-md-4">
    <label for="fname" className="form-label">First name</label>
    <input type="text" name="fname" className="form-control"  placeholder="Enter First Name" onChange={this.changeFname} value={this.state.fname} required/>
  </div>
  <div className="col-md-4">
    <label for="lname" className="form-label">Last name</label>
    <input type="text" name="lname" className="form-control"  placeholder="Enter Last Name" onChange={this.changeLname} value={this.state.lname} required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefaultUsername" className="form-label">Username</label>
    <div className="input-group">
      <span className="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" name="uname" className="form-control"  aria-describedby="inputGroupPrepend2" placeholder="Enter Userame" onChange={this.changeUname} value={this.state.uname} required/>
    </div>
  </div>
  <div className="col-md-6 mt-3">
    <label for="ucity" className="form-label">City</label>
    <input type="text" name="ucity" className="form-control" placeholder="Enter City" onChange={this.changeCity} value={this.state.ucity} required/>
  </div>
  <div className="col-md-3  mt-3">
    <label for="validationDefault04" className="form-label">State</label>
    <select className="form-select form-control" name="ustate" onChange={this.changeState} value={this.state.ustate} id="validationDefault04"  required>
      <option selected disabled >Choose State</option>
      <option>...</option>
      <option>Uttar Pradesh</option>
      <option>Madhya Pradesh</option>
      <option>Maharashtra</option>
      <option>Gujarat</option>
      <option>Bihar</option>
      <option>Rajasthan</option>
      <option>Punjab</option>
    </select>
    {/* <label for="ustate" className="form-label">State</label>
    <input type="text" name="ustate" className="form-control" placeholder="Enter state" onChange={this.changeState} value={this.state.ustate} required/> */}
  </div>
  <div className="col-md-3  mt-3">
    <label for="university" className="form-label">University</label>
    <input type="text" name="university" className="form-control" placeholder="Enter University/College Name" onChange={this.changeUniv} value={this.state.university} required/>
  </div>
  
  <div className="col-md-3  mt-3">
    <label for="ucourse" className="form-label">Course</label>
    <input type="text" name="ucourse" className="form-control" placeholder="Enter Course" onChange={this.changeCourse} value={this.state.ucourse} required/>
  </div>
  <div className="col-md-3  mt-3">
    <label for="ubranch" className="form-label">Branch</label>
    <input type="text" name="ubranch" className="form-control" placeholder="Enter Branch" onChange={this.changeBranch} value={this.state.ubranch} required/>
  </div>
  <div className="col-md-3  mt-3">
    <label for="uyear" className="form-label">Year</label>
    <input type="number" name="uyear" className="form-control" placeholder="Enter Year" onChange={this.changeYear} value={this.state.uyear} required/>
  </div>
  <div className="col-md-3  mt-3">
    <label for="uevent" className="form-label">Event</label>
    <input type="text" name="uevent" className="form-control" placeholder="Enter Event" onChange={this.changeEvent} value={this.state.uevent} required/>
  </div>
  <div className="col-md-6  mt-3">
    <label for="tname" className="form-label">Team Name</label>
    <input type="text" name="tname" className="form-control" placeholder="Enter Team Name" onChange={this.changeTname} value={this.state.tname} required/>
  </div>
  <div className="col-md-6 mt-3">
    <label for="tsize" className="form-label">Team Size</label>
    <input type="number" name="tsize" className="form-control" placeholder="Enter Team Size" onChange={this.changeTsize} value={this.state.tsize} required/>
    
  </div>
  {/* <div className="col-12 mt-3 mb-4">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="invalidCheck2"  required/>
      <label className="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div> */}
  <div className="form-group form-label-group mt-4 mx-3">
      <input type="submit" className="btn btn-primary" value="Submit" />
  </div>
</form>

</div>



    )
};
    }
export default Register;