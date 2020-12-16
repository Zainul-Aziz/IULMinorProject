import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const Contact = () => {
    const [data,setData] = useState({
        name:"",
        email:"",
        contact:"",
        query:""
    });
    const InputEvent = (event) => {
        console.log(event.target.value);
        const {name,value} = event.target;
        setData((preval) => {
            return {
                ...preval,
                [name]:value,
            };
        });
    }
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`Hello ${data.name}, You are successfully registered.`);
    }
    return (
        <div className="container my-3">
            <div className="rows">
                <div className="mt-5 col-md-6 col-lg-6 m-auto">
                    <h2 className="text-center">Contact Us</h2>
                    <form className="mt-3" onSubmit={formSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your name"  name="name" value={data.name} onChange={InputEvent} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email"  placeholder="Enter your email" name="email" value={data.email} onChange={InputEvent}/>
                        </div>                        
                        <div className="mb-3">
                            <label htmlFor="contact" className="form-label">Contact Number</label>
                            <input type="text" className="form-control" id="contact"  placeholder="Enter contact number" name="contact" value={data.contact} onChange={InputEvent}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="query" className="form-label">Query/Suggestion</label>
                            <textarea type="text" className="form-control" id="query" placeholder="Enter your query/suggestion" name="query" value={data.query} onChange={InputEvent} />
                        </div> 
                        <Button
                            type="submit"            
                            variant="contained"
                            color="primary"
                            className="px-4"
                            // className={classes.submit}
                        >
                        Submit
                        </Button>                       
                        {/* <button type="submit"  className="btn btn-outline-primary">Submit</button> */}
                        {/* <label htmlFor="name" className="form-label">Name</label>
                        <input type="text"></input>
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text"></input>
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text"></input> */}
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Contact;