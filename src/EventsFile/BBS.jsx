import react from 'react';
import CommonEventDetail from '../CommonEventDetail';
import web6 from '../images/bbs.jpg';
const BBS = () =>{
    return(
        <div>
            <CommonEventDetail name="Beg-Borrow-Steal" 
            rule1="A Team will comprise of 2 players"
            rule2="All the teams will be provided with a list of items."
            rule3="Team members will have to complete the task within a time limit of 30 minutes."
            rule4="Team can either beg, borrow or steal the items that are enlisted and provided to them"
            rule5="Teams will be judged on first come, first serve basis and also the items they were able to
collect."
            desc=" In this game show you can win money by begging, borrowing or stealing
things. Participants will be given a list of things that they have to fetch within a time
span. Everything is fair in this war. 'Jugaad' is the key word." imgsrc={web6} visit="/register" btname="Register" />
            
        </div>
    )
}
export default BBS;