import StarshipCard from "./StarshipCard";

function StarshipList(props) {
    let display = ''
    if (props.search) {
        let filteredArr= props.starships.filter((s)=>{
            return props.search === s.name
        })
        display = <div> <StarshipCard starship={filteredArr[0]}/></div>
    } else {
        display = <div>
            <p className="starship-results-count">Number of results: {props.starships.length}</p>
            <hr />
            {props.starships.map((starship) => (
                <StarshipCard starship={starship} />
            ))}
        </div>
    }
    return (
        <>
         <h3>StarShips</h3>        
         {props.starships ? (display) : ('loading ...')}
        </>
    )
}

export default StarshipList;