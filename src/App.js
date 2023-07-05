import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [currentStatus, setStatus] = useState("Click the button to fetch movies")
  const [movies, setPeople] = useState([])
  const fetchHandler = async() =>{
    setStatus("Loading...")
    const response = await fetch("https://swapi.dev/api/films")
    const data = await response.json()
    setPeople(data.results)
    console.log(movies)
    
  }
 


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchHandler}>Fetch Movies</button>
      </section>
      <section>
         {movies.length === 6 ? <MoviesList movies={movies} /> : <h1>{currentStatus}</h1>   } 
        
      </section>
    </React.Fragment>
  );
}

export default App;
