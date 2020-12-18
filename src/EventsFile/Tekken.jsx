import react from 'react';
import CommonEventDetail from '../CommonEventDetail';
import web5 from '../images/Tekken.jpg';
const Tekken = () =>{
    return(
        <div>
            <CommonEventDetail name="Quizaholic" 
            rule1="Team participation only. (Each team comprises of three members)"
            rule2="The event comprises of two rounds :- Preliminary Round Final Round"
            rule3="The preliminary round comprises of 50 objective types question in 30 minutes."
            rule4="Only one member from each team will appear in the test."
            rule5="The final rounds consist of questions related to Indian polity, History, Geography, Science and Tech, Current Affair, Entertainment etc."
            desc="Participant is required to answer the question asked by the quiz masters." imgsrc={web5} visit="/register" btname="Register" />
            
        </div>
    )
}
export default Tekken;