import react from 'react';
import CommonEventDetail from '../CommonEventDetail';
import web4 from '../images/RushHour.jpg';
const Rush = () =>{
    return(
        <div>
            <CommonEventDetail name="Rush Hour" desc="Partcipate" imgsrc={web4} visit="/register" btname="Register" />
            
        </div>
    )
}
export default Rush;