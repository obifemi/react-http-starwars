import React, { useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [currentStatus, setStatus] = useState("Click the button to fetch movies");
  const [movies, setMovies] = useState([]);

  const fetchHandler = async () => {
    setStatus("Loading...");
    try {
      let page = 1;
      while (true) {
        const response = await fetch(`https://swapi.dev/api/films/${page}`);
        const data = await response.json();
        


        if (data.title) {
          setMovies((prevMovies) => [...prevMovies, data.title]); // Update movies array incrementally
          page++;
          
        } else {
          console.log("No more films available");
          break; // Break the loop if there are no more films available
        }
      }

      setStatus(""); // Clear the status message
    } catch (error) {
      console.error("Error fetching movies:", error);
      setStatus("Failed to fetch movies");
    }
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchHandler}>Fetch Movies</button>
      </section>
      <section>
        {movies.length >= 1 ? <MoviesList movies={movies} /> : <h1>{currentStatus}</h1>}
      </section>
    </React.Fragment>
  );
}

export default App;
