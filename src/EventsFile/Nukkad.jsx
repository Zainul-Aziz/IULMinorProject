import react from 'react';
import CommonEventDetail from '../CommonEventDetail';
import web1 from '../images/nukkad.jpg';
const AndazAwadh = () =>{
    return(
        <div>
            <CommonEventDetail name="Nukkad Natak" 
//             desc="Only internal entries are allowed.Maximum number of participants in each team should not exceed 12.Maximum time limit for the act will be 15 minutes.Clear message.Clean contents.
// No innuendo is permitted (double meaning sentences)."

            rule1="Only internal entries are allowed."
            rule2="Maximum number of participants in each team should not exceed 12."
            rule3="Maximum time limit for the act will be 15 minutes."
            rule4="Clean contents."
            rule5="No innuendo is permitted (double meaning sentences)."
 imgsrc={web1} 
 visit="/register" 
 btname="Register" />
            
        </div>
    )
}
export default AndazAwadh;