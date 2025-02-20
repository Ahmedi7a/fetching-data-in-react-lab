import { useState, useEffect } from 'react'
// import './App.css'
import StarshipList from './components/StarshipList';
import StarshipSearch from './components/StarshipSearch';
import * as starshipsService from './services/starshipService'
// src/App.jsx


const App = () => {

  const [starships, serStarships] = useState([])

  // were taking the data from api and store it in starships
  async function fetchData() {
    const data = await starshipsService.index()
    serStarships(data.results) //.results is somthing from this api to show only api
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <h1>Hello world!</h1>
      <StarshipSearch />
      <StarshipList starships={starships} />
    </>
  );
}

export default App
