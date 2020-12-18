import react from 'react';
import CommonEventDetail from '../CommonEventDetail';
import web3 from '../images/treasurehunt.jpg';
const Nukkad = () =>{
    return(
        <div>
            <CommonEventDetail name="Treasure Hunt" 
            rule1="Each team will have 4 players."
            rule2="Questions are from aptitude, verbal ability, coding/decoding, GK, current affairs and general questions from
the first year of engineering so that all the active students from every year and every branch can participate."
            rule3="There will be 4 rounds. In each round, a specific number of teams, collecting their treasures in minimum
time, will enter the next round."
            rule4="The questions will be distributed via QR codes. The teams are required to have good camera cell phones
with a QR Scanner App and internet connection."
            rule5="In case of ties, teams reaching to the starting point in the least time will win."
//             desc="In Treasure Hunt, participants act in a team, coordinating to win. They get
// a series of questions (based on technical, aptitude, engineering, and current affairs) to
// solve. The solution to these questions point out to an actual physical piece or an article
// (treasure). The team which reaches its article first, wins." 
imgsrc={web3} visit="/register" btname="Register" />
            
        </div>
    )
}
export default Nukkad;