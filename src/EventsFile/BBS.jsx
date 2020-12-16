import react from 'react';
import CommonEventDetail from '../CommonEventDetail';
import web6 from '../images/bbs.jpg';
const BBS = () =>{
    return(
        <div>
            <CommonEventDetail name="Beg-Borrow-Steal" desc="Partcipate" imgsrc={web6} visit="/register" btname="Register" />
            
        </div>
    )
}
export default BBS;