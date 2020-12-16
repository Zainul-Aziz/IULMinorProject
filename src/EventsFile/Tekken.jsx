import react from 'react';
import CommonEventDetail from '../CommonEventDetail';
import web5 from '../images/Tekken.jpg';
const Tekken = () =>{
    return(
        <div>
            <CommonEventDetail name="Tekken7" desc="Partcipate" imgsrc={web5} visit="/register" btname="Register" />
            
        </div>
    )
}
export default Tekken;