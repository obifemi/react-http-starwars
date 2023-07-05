import React, { useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [currentStatus, setStatus] = useState("Click the button to fetch movies");
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    setStatus("Loading...");
    try {
      const response = await fetch("https://swapi.dev/api/films");
      const data = await response.json();

      data.results.forEach((film, index) => {
        setTimeout(() => {
          setMovies((prevMovies) => [...prevMovies, film]); // Update movies array incrementally
        }, index * 1000); // Delay each film by 1 second (adjust as needed)
      });

      setStatus(""); // Clear the status message
    } catch (error) {
      console.error("Error fetching movies:", error);
      setStatus("Failed to fetch movies");
    }
  };

  const fetchHandler = () => {
    fetchMovies();
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
