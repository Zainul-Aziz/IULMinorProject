import React from 'react';
import Card from './Card';
import Register from "./Register";
import img from '../src/images/img1.jpg';
import Eventinfo from './Eventdata';
const Events = () => {
    return (
        // <h1>Welcome EventPage</h1>
        <section>
        <div className="my-5">
            <h1 className="text-center">Our Events</h1>
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">

                        {/* <Card eventImg={img} eventName="Andaz-e-Awadh" eventDesc="College students showcase their hidden talent." visit="" />
                        <Card eventImg={img} eventName="Andaz-e-Awadh" eventDesc="College students showcase their hidden talent." visit="" />
                        <Card eventImg={img} eventName="Andaz-e-Awadh" eventDesc="College students showcase their hidden talent." visit="" />
                        <Card eventImg={img} eventName="Andaz-e-Awadh" eventDesc="College students showcase their hidden talent." visit="" />
                        <Card eventImg={img} eventName="Andaz-e-Awadh" eventDesc="College students showcase their hidden talent." visit="" />
                        <Card eventImg={img} eventName="Andaz-e-Awadh" eventDesc="College students showcase their hidden talent." visit="" /> */
                        
                        Eventinfo.map((val,index) => {
                            return <Card key={index} eventImg={val.imgsrc} eventName={val.title} eventDesc={val.desc} visit={val.register} />     
                        })
                        
                        }
                        
                    </div>
                </div>
            </div>
        </div>    
        </section>
    );
};
export default Events;