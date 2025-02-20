import StarshipCard from "./StarshipCard";

function StarshipList (props){
    return(
        <>
        Starship List
        <p>Number of results: {props.starships.length}</p>
        {props.starships.map((starship)=>(
        <StarshipCard starship={starship} />
        ))}
       
        </>
    )
}

export default StarshipList;