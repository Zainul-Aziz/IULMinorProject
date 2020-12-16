import react from 'react';
import CommonEventDetail from '../CommonEventDetail';
import web2 from '../images/andaz.jpg';
const AndazAwadh = () =>{
    return(
        <div>
            <CommonEventDetail name="Andaz-Awadh" desc="Partcipate" imgsrc={web2} visit="/register" btname="Register" />
            
        </div>
    )
}
export default AndazAwadh;