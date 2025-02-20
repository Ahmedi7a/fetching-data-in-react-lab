import { useState, useEffect } from 'react'
// import './App.css'
import StarshipList from './components/StarshipList';
import StarshipSearch from './components/StarshipSearch';
import * as starshipsService from './services/starshipService'
// src/App.jsx


const App = () => {

  const [starships, serStarships] = useState([])
  const [search, setSearch]= useState('')

  // were taking the data from api and store it in starships
  async function fetchData() {
    const data = await starshipsService.index()
    serStarships(data.results) //.results is somthing from this api to show only api
  }

  useEffect(() => {
    fetchData();
  }, [])

  //need function to grab data from startshiplist
  function handleSearch(formData){
      setSearch(formData) //store the passing content
  }

  return (
    <>
      <h1>Star Wars API!</h1>
      <StarshipSearch handleSearch={handleSearch}/>
      <StarshipList starships={starships} search={search} />
    </>
  );
}

export default App
