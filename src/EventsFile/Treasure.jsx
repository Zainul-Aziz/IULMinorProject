import react from 'react';
import CommonEventDetail from '../CommonEventDetail';
import web3 from '../images/treasurehunt.jpg';
const Nukkad = () =>{
    return(
        <div>
            <CommonEventDetail name="Treasure" desc="Partcipate" imgsrc={web3} visit="/register" btname="Register" />
            
        </div>
    )
}
export default Nukkad;