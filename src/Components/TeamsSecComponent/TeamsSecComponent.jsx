import Card from "../Card/Card";
import DividerAndHeading from "../OurTeams/DividerAndHeading";
import './TeamsSecComponent.css'

const TeamsSecComponent = (props) => {
    const sectionHeading = props.sectionHeading;
    const details = props.details

    return (
    <div className="secc">
        <DividerAndHeading sectionHeading={sectionHeading} />

        <div  className="cards">

            {details.map((person, index) => {
                return <Card key = {index} name={person.name} imageurl={person.imageurl} position={person.position} quote={person.quote} />
            })}
    
        </div>
    </div>
    

       





      );
}
 
export default TeamsSecComponent;