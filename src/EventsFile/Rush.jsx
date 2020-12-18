import react from 'react';
import CommonEventDetail from '../CommonEventDetail';
import web4 from '../images/RushHour.jpg';
const Rush = () =>{
    return(
        <div>
            <CommonEventDetail name="Photography"
            rule1="Maximum number of teams: 30"
            rule2="Maximum number of participants per team:1"
            rule3="Time Limit: 2 Days"
            rule4="Photography should be done within the campus of Integral University"
            rule5="Theme will be declared on the spot"
            desc="" imgsrc={web4} visit="/register" btname="Register" />
            
        </div>
    )
}
export default Rush;